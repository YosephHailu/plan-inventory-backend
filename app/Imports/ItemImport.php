<?php

namespace App\Imports;

use App\Models\Item;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Validators\Failure;

class ItemImport implements WithMultipleSheets
{
    use SkipsFailures;

    public $imported = 0;

    public $failed = 0;

    public $errors = [];

    public $currentRow = 1;

    /**
     * Only import from the first sheet (Item Import)
     */
    public function sheets(): array
    {
        return [
            0 => new ItemImportSheet($this),
        ];
    }
}

class ItemImportSheet implements ToModel, WithHeadingRow, SkipsEmptyRows, SkipsOnFailure
{
    use SkipsFailures;

    private $parent;

    public function __construct(ItemImport $parent)
    {
        $this->parent = $parent;
    }

    public function model(array $row)
    {
        try {
            // Trim whitespace from all string values FIRST
            $row = array_map(function ($value) {
                return is_string($value) ? trim($value) : $value;
            }, $row);

            // Skip completely empty rows (all values are null or empty string after trimming)
            $hasData = false;
            foreach ($row as $value) {
                // Check if value is not empty and not just whitespace
                if ($value !== null && $value !== '' && $value !== 0) {
                    $hasData = true;
                    break;
                }
            }

            if (! $hasData) {
                // Skip this row silently (don't count as failed, don't increment row counter)
                return null;
            }

            // Increment row counter ONLY for rows with data
            $this->parent->currentRow++;

            // Check if name exists (required field)
            if (empty($row['name'])) {
                $this->parent->failed++;
                $this->parent->errors[] = "Row {$this->parent->currentRow}: Item name is required";

                return null;
            }

            // Check if item_code exists (required field)
            if (empty($row['item_code'])) {
                $this->parent->failed++;
                $this->parent->errors[] = "Row {$this->parent->currentRow}: Item code is required";

                return null;
            }

            // Check if item with same code already exists
            $existingItem = Item::where('item_code', $row['item_code'])->first();
            if ($existingItem) {
                $this->parent->failed++;
                $this->parent->errors[] = "Row {$this->parent->currentRow}: Item with code '{$row['item_code']}' already exists";

                return null;
            }

            // Create the item
            $item = Item::create([
                'name' => $row['name'],
                'description' => $row['description'] ?? null,
                'item_code' => $row['item_code'],
                'created_by_id' => auth()->id(),
            ]);

            $this->parent->imported++;

            return $item;
        } catch (\Exception $e) {
            $this->parent->failed++;
            $this->parent->errors[] = "Row {$this->parent->currentRow}: " . $e->getMessage();
            Log::error("Item import row {$this->parent->currentRow} error: " . $e->getMessage());

            return null;
        }
    }

    public function onFailure(Failure ...$failures)
    {
        foreach ($failures as $failure) {
            $this->parent->failed++;
            $errorMessage = "Row {$failure->row()}: " . implode(', ', $failure->errors());
            $this->parent->errors[] = $errorMessage;
            Log::error("Item import validation error: {$errorMessage}");
        }
    }
}

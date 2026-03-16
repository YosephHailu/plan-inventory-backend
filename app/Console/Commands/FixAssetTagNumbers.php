<?php

namespace App\Console\Commands;

use App\Models\Asset;
use Illuminate\Console\Command;

class FixAssetTagNumbers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:fix-tag-numbers {--dry-run : Preview changes without applying them}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Regenerate all asset tag numbers using asset ID to match QR code numbering (fixes duplicates)';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dryRun = $this->option('dry-run');

        if ($dryRun) {
            $this->info('=== DRY RUN MODE - No changes will be saved ===');
        }

        // Load all assets with their program areas, ordered by ID
        $assets = Asset::with('programArea')->orderBy('id')->get();

        if ($assets->isEmpty()) {
            $this->info('No assets found in database.');
            return 0;
        }

        $this->info("Found {$assets->count()} assets to process.");
        $this->newLine();

        // Show current duplicates first
        $duplicates = $assets->groupBy('tag_number')->filter(fn ($group) => $group->count() > 1);
        if ($duplicates->isNotEmpty()) {
            $this->warn("Found {$duplicates->count()} duplicated tag numbers:");
            foreach ($duplicates as $tagNumber => $group) {
                $ids = $group->pluck('id')->implode(', ');
                $this->warn("  {$tagNumber} => asset IDs: [{$ids}]");
            }
            $this->newLine();
        } else {
            $this->info('No duplicate tag numbers found.');
        }

        if (!$dryRun && !$this->confirm('This will regenerate ALL asset tag numbers using format ETH1-{program_area_code}-{asset_id}. Continue?')) {
            $this->info('Cancelled.');
            return 0;
        }

        $updated = 0;
        $skipped = 0;
        $errors = 0;

        $tableData = [];

        foreach ($assets as $asset) {
            if (!$asset->programArea) {
                $this->error("Asset ID {$asset->id}: Missing program area (program_area_id={$asset->program_area_id}). Skipped.");
                $errors++;
                continue;
            }

            $oldTagNumber = $asset->tag_number;
            $newTagNumber = 'ETH1-' . $asset->programArea->four_digit_code . '-' . sprintf('%03d', $asset->id);

            if ($oldTagNumber === $newTagNumber) {
                $skipped++;
                continue;
            }

            $tableData[] = [
                $asset->id,
                $oldTagNumber,
                $newTagNumber,
                $asset->programArea->four_digit_code,
            ];

            if (!$dryRun) {
                // Update tag_number
                $asset->tag_number = $newTagNumber;

                // Also fix document_no if it was set to the old tag number
                if ($asset->document_no === $oldTagNumber) {
                    $asset->document_no = $newTagNumber;
                }

                $asset->save();
            }

            $updated++;
        }

        // Show changes table
        if (!empty($tableData)) {
            $this->table(
                ['Asset ID', 'Old Tag Number', 'New Tag Number', 'Program Area Code'],
                $tableData
            );
        }

        $this->newLine();
        $this->info("Results:");
        $this->info("  Updated: {$updated}");
        $this->info("  Already correct: {$skipped}");
        if ($errors > 0) {
            $this->error("  Errors (missing program area): {$errors}");
        }

        if ($dryRun) {
            $this->newLine();
            $this->warn('DRY RUN complete. No changes were saved.');
            $this->warn('Run without --dry-run to apply changes:');
            $this->warn('  php artisan assets:fix-tag-numbers');
        } else {
            $this->newLine();
            $this->info('All tag numbers have been regenerated successfully.');
        }

        return 0;
    }
}

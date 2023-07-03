<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('stock_card_number')->unique();
            $table->string('name');
            $table->longText('item_code')->nullable();
            $table->longText('description')->nullable();
            $table->date('expire_date')->nullable();
            $table->boolean('stock_available')->default(true);
            $table->foreignId('unit_of_measurement_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('item_category_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('office_location_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('where_house_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('stock_type_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('department_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('donor_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('lot_number_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('created_by_id')->constrained('users', 'id')->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};

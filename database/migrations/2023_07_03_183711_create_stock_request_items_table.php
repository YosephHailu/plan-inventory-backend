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
        Schema::create('stock_request_items', function (Blueprint $table) {
            $table->id();
            $table->string('designation_contact')->nullable();
            $table->double('quantity', 10)->nullable();
            $table->longText('description')->nullable();
            $table->longText('contact_detail')->nullable();

            $table->foreignId('item_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('stock_request_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_request_items');
    }
};

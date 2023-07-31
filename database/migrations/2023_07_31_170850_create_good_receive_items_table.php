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
        Schema::create('good_receive_items', function (Blueprint $table) {
            $table->id();
            $table->double('received_quantity', 10);
            $table->longText('description')->nullable();

            $table->foreignId('item_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('good_receive_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('good_receive_items');
    }
};

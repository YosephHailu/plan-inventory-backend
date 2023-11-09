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
        Schema::create('stock_verifications', function (Blueprint $table) {
            $table->id();
            $table->double('quantity', 10);
            $table->longText('remarks')->nullable();
            $table->foreignId('good_receive_item_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('condition_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');

            $table->foreignId('verified_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_verifications');
    }
};

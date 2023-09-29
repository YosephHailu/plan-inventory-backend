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
        Schema::create('asset_physical_checks', function (Blueprint $table) {
            $table->id();

            $table->longText('remark')->nullable();
            $table->date('checked_at');
            $table->foreignId('checked_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->foreignId('asset_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('condition_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_physical_checks');
    }
};

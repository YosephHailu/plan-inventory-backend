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
        Schema::create('asset_custodians', function (Blueprint $table) {
            $table->id();
            $table->longText('remark')->nullable();
            $table->timestamp('assigned_at');
            $table->foreignId('assigned_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->foreignId('returned_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('returned_at')->nullable();
            $table->boolean('returned')->default(false);
            
            $table->foreignId('asset_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('staff_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_custodians');
    }
};

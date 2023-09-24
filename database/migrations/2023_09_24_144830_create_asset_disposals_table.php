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
        Schema::create('asset_disposals', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('transfer_to');
            $table->string('accumulated_depreciation')->nullable();
            $table->string('replacement_cost')->nullable();
            $table->longText('remark')->nullable();

            $table->foreignId('currency_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('disposal_type_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('disposal_reason_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('asset_id')->constrained()->onUpdate('restrict')->onDelete('restrict');

            $table->foreignId('approved_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('approved_at')->nullable();
            $table->boolean('approved')->default(false);
            $table->longText('approval_remark')->nullable();
            
            $table->foreignId('created_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_disposals');
    }
};

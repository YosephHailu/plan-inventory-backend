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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('tag_number');
            $table->string('asset_type');
            $table->string('item_name');
            $table->date('acquisition_date');
            $table->string('searial_no')->nullable();
            $table->longText('description');
            $table->longText('accessories')->nullable();
            $table->double('acquisition_cost', 10);
            $table->string('purchase_order_no')->nullable();
            $table->string('gsrn_no');
            $table->date('receipt_date');
            $table->date('depreciation_date');
            $table->string('po_no');
            $table->string('cost_center')->nullable();
            $table->string('document_no');

            $table->foreignId('currency_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('acquisition_type_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('program_area_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('donor_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');

            $table->foreignId('created_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};

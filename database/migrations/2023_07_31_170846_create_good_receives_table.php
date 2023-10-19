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
        Schema::create('good_receives', function (Blueprint $table) {
            $table->id()->startingValue(10000);
            $table->string('reference_number')->unique();
            $table->date('received_date');
            $table->longText('remark')->nullable();
            $table->string('received_by');
            $table->string('status')->default('PENDING');

            $table->string('batch_number')->nullable();
            $table->string('vendor_name')->nullable();
            $table->string('vendor_id')->nullable();
            $table->string('purchase_order_no')->nullable();
            $table->string('invoice_no')->nullable();
            $table->string('project')->nullable();
            $table->string('loading_number')->nullable();

            $table->foreignId('created_by_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->foreignId('where_house_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('project_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('item_category_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('good_receives');
    }
    
};

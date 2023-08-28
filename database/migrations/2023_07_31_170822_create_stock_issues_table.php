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
        Schema::create('stock_issues', function (Blueprint $table) {
            $table->id();
            $table->string('issuance_number')->unique();
            $table->date('date')->nullable();
            $table->string('transport_mode')->nullable();
            $table->string('transported_by')->nullable();
            $table->double('rate_of_charge', 10)->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();

            $table->longText('remark')->nullable();

            $table->string('status')->default('PENDING');

            $table->foreignId('stock_request_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('created_by_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->foreignId('canceled_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('canceled_at')->nullable();
            $table->boolean('canceled')->default(false);
            $table->longText('cancellation_reason')->nullable();
            
            $table->boolean('waybill')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_issues');
    }
};

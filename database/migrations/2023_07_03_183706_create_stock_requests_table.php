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
        Schema::create('stock_requests', function (Blueprint $table) {
            $table->id()->startingValue(10000);
            $table->string('reference_no')->nullable();
            $table->date('requested_date')->nullable();

            $table->string('requester_name')->nullable();
            $table->longText('contact_detail')->nullable();

            $table->string('status')->default('PENDING');

            $table->foreignId('office_location_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('where_house_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('department_id')->constrained()->onUpdate('restrict')->onDelete('restrict');

            $table->foreignId('created_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->foreignId('checked_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('checked_at')->nullable();
            $table->boolean('checked')->default(false);

            $table->foreignId('approved_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('approved_at')->nullable();
            $table->boolean('approved')->default(false);

            $table->foreignId('rejected_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('rejected_at')->nullable();
            $table->boolean('rejected')->default(false);
            $table->longText('rejection_reason')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_requests');
    }
};

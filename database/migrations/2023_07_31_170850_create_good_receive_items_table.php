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
            $table->id()->startingValue(10000);
            $table->double('ordered_quantity', 10);
            $table->double('received_quantity', 10);
            $table->double('balance_due', 10);
            $table->string('description');
            $table->string('condition')->nullable();
            $table->date('expiry_date')->nullable();

            $table->longText('comment')->nullable();

            $table->foreignId('donor_id')->constrained()->onUpdate('restrict')->onDelete('restrict');

            $table->foreignId('checked_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('checked_at')->nullable();
            $table->boolean('checked')->default(false);
            $table->double('checked_quantity', 10)->nullable();
            
            $table->foreignId('approved_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('approved_at')->nullable();
            $table->boolean('approved')->default(false);
            $table->double('approved_quantity', 10)->nullable();
            
            $table->foreignId('rejected_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
            $table->date('rejected_at')->nullable();
            $table->boolean('rejected')->default(false);
            $table->longText('rejection_reason')->nullable();
            
            $table->foreignId('item_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('good_receive_id')->constrained()->onUpdate('restrict')->onDelete('restrict');
            $table->foreignId('condition_id')->nullable()->constrained()->onUpdate('restrict')->onDelete('restrict');
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

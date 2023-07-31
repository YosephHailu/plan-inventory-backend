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
            $table->id();
            $table->string('reference_number')->unique();
            $table->date('received_date');
            $table->longText('remark')->nullable();
            $table->string('received_by');
            $table->string('status')->default('PENDING');

            $table->foreignId('created_by_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');
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

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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('username')->unique();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_locked')->default(false);
            $table->timestamp('last_seen')->nullable();
            $table->date('last_password_change_date')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->boolean('suspended')->nullable();
            $table->timestamp('suspended_at')->nullable();
            $table->foreignId('suspended_by_id')->nullable()->constrained('users', 'id')->onUpdate('cascade')->onDelete('restrict');

            $table->integer('where_house_id')->nullable();
            $table->integer('project_id')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

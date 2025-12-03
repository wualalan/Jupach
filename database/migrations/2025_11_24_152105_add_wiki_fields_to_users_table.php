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
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_sysop')->default(false);
            $table->timestamp('blocked_until')->nullable();
            $table->string('signature', 255)->nullable();
            $table->string('skin')->default('default');
            $table->integer('edit_count')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['is_sysop', 'blocked_until', 'signature', 'skin', 'edit_count']);
        });
    }
};

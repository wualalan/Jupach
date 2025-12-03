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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255)->unique(); // R1.1
            $table->integer('namespace')->default(0); // R3.2
            $table->boolean('is_redirect')->default(false);
            $table->unsignedBigInteger('latest_revision_id')->nullable();
            $table->timestamps();
            $table->index(['title', 'namespace']);
        });

        Schema::create('revisions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->constrained('pages')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained('users'); // Null for anonymous
            $table->string('user_ip', 45)->nullable(); // R1.6
            $table->longText('content'); // R1.2
            $table->string('summary', 200)->nullable(); // R1.3
            $table->boolean('is_minor')->default(false); // R1.5
            $table->timestamps();
        });

        Schema::create('category_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->constrained('pages')->onDelete('cascade');
            $table->string('category_name', 255);
            $table->timestamps();
            $table->index('category_name');
        });

        Schema::create('watchlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('page_id')->constrained('pages')->onDelete('cascade');
            $table->boolean('email_sent')->default(false); // R7.3.2
            $table->timestamps();
            $table->unique(['user_id', 'page_id']);
        });

        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('filename', 255)->unique();
            $table->string('mime_type', 100);
            $table->unsignedBigInteger('size');
            $table->string('sha1_hash', 40); // R6.2.3
            $table->string('license'); // R6.4
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('abuse_filters', function (Blueprint $table) {
            $table->id();
            $table->text('pattern'); // Regex
            $table->string('action'); // warn, disallow, block
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('abuse_filter_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('filter_id')->constrained('abuse_filters');
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->string('user_ip', 45)->nullable();
            $table->string('title');
            $table->string('action_taken');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abuse_filter_logs');
        Schema::dropIfExists('abuse_filters');
        Schema::dropIfExists('files');
        Schema::dropIfExists('watchlists');
        Schema::dropIfExists('category_links');
        Schema::dropIfExists('revisions');
        Schema::dropIfExists('pages');
    }
};

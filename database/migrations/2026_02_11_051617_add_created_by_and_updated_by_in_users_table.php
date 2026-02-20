<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // created_by
            $table->unsignedBigInteger('created_by')->nullable()->after('id');
            $table->foreign('created_by', 'users_created_by_foreign')->references('id')->on('users')->onDelete('set null');

            // updated_by
            $table->unsignedBigInteger('updated_by')->nullable()->after('created_by');
            $table->foreign('updated_by', 'users_updated_by_foreign')->references('id')->on('users')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // drop foreign keys dulu
            $table->dropForeign('users_created_by_foreign');
            $table->dropForeign('users_updated_by_foreign');

            // lalu drop kolom
            $table->dropColumn(['created_by', 'updated_by']);
        });
    }
};

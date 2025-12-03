<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Page;
use App\Models\Revision;
use Illuminate\Support\Facades\DB;

class DatabaseConnectionTest extends TestCase
{
    public function test_can_write_and_read_from_postgres()
    {
        // 1. Verify Connection is Postgres
        $connection = DB::connection()->getPdo()->getAttribute(\PDO::ATTR_DRIVER_NAME);
        $this->assertEquals('pgsql', $connection, 'The database connection is not PostgreSQL.');

        $title = 'Postgres_Test_' . time();

        // 2. Create Page
        $page = Page::create([
            'title' => $title,
            'namespace' => 0,
        ]);

        $this->assertDatabaseHas('pages', [
            'title' => $title,
        ]);

        // 3. Create Revision
        $revision = Revision::create([
            'page_id' => $page->id,
            'content' => 'Testing Postgres Connection Content',
            'user_ip' => '127.0.0.1',
            'summary' => 'Test summary',
            'is_minor' => false,
        ]);

        $this->assertDatabaseHas('revisions', [
            'id' => $revision->id,
            'content' => 'Testing Postgres Connection Content',
        ]);

        // 4. Update Page with latest revision
        $page->latest_revision_id = $revision->id;
        $page->save();

        $this->assertDatabaseHas('pages', [
            'id' => $page->id,
            'latest_revision_id' => $revision->id,
        ]);

        // 5. Cleanup
        $page->delete();
    }
}

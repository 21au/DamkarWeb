<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@damkar.id',
                'notlp' => '08998765431',
            'password' => bcrypt('admin+damkar'),
            'role' => 'admin',
        ]);

        User::factory()->create([
            'name' => 'user',
            'email' => 'user@damkar.id',
                'notlp' => '0823456789',
            'password' => bcrypt('user+damkar'),
            'role' => 'user',
        ]);

        $this->call(LaporanSeeder::class);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Folder;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userId =
            DB::table('users')
                ->where('email', 'test_email@email.com')
                ->value('id');

        /** @var Folder $folder */
        $folder =
            DB::table('folders')
                ->where('user_id', $userId)
                ->first();

        $names = [];
        for ($i = 1; $i <= 40; $i++) {
            $names[] = "アニメ{$i}";
        }
        foreach ($names as $name) {
            DB::table('items')->insert([
                'name' => $name,
                'folder_id' => $folder->id,
                'memo' => 'memo',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        $userId =
            DB::table('users')
                ->where('email', 'test@email.com')
                ->value('id');

        /** @var Folder $folder */
        $folder =
            DB::table('folders')
                ->where('user_id', $userId)
                ->first();

        DB::table('items')->insert([
            'name' => 'test',
            'folder_id' => $folder->id,
            'memo' => 'memo',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

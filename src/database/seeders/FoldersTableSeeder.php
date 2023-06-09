<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoldersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['アクション', 'コメディ', 'ホラー'];
        $userId =
            DB::table('users')
                ->where('email', 'test_email@email.com')
                ->value('id');

        foreach ($names as $name) {
            DB::table('folders')->insert([
                'name' => $name,
                'user_id' => $userId,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        $userId =
            DB::table('users')
                ->where('email', 'test@email.com')
                ->value('id');

        DB::table('folders')->insert([
            'name' => 'test',
            'user_id' => $userId,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

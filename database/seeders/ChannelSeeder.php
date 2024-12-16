<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Channel;

class ChannelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Google',
                'amount' => 725
            ],
            [
                'name' => 'Facebook',
                'amount' => 225
            ],
            [
                'name' => 'Instagram',
                'amount' => 15
            ],
            [
                'name' => 'Twitter',
                'amount' => 30
            ],
            [
                'name' => 'LinkedIn',
                'amount' => 45
            ],
        ];
        Channel::insert($data);
    }
}

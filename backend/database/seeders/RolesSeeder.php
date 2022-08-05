<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;


class RolesSeeder extends Seeder
{
    public function run()
    {
      Role::create([
        'role' => 'student'
      ]);
      Role::create([
        'role' => 'tutor'
      ]);
    }
}

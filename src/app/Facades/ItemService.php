<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class ItemService extends Facade
{
    public static function getFacadeAccessor(): string
    {
        return 'ItemService';
    }
}

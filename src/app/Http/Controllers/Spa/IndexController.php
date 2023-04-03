<?php

namespace App\Http\Controllers\Spa;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    const SPA_URI = '/app/app';

    public function index(): \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Contracts\Foundation\Application
    {
        if (!\Auth::check()) {
            return redirect()->to('/');
        }
        return view(self::SPA_URI);
    }
}

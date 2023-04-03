<?php

namespace App\Http\Controllers\Top;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * ログイン済みのユーザーはapp/homeへ転送し
     * 未ログインユーザーはTopページに案内する
     */
    public function index(): \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Contracts\Foundation\Application
    {
        if (\Auth::check()) {
            return redirect()->to('/app/home');
        } else {
            return view('top.index');
        }
    }
}

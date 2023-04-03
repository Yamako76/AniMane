<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

/**
 * TOPページ
 */
\Route::get('/', [\App\Http\Controllers\Top\IndexController::class, 'index'])->name('top');

/**
 * ゲスト用のRouting
 */
\Route::get('/guest', [\App\Http\Controllers\Auth\LoginController::class, 'guestLogin'])->name('guestLogin');

/**
 * Folder API関連
 */
\Route::middleware('auth')->prefix('api/folders')->group(function () {
    \Route::get('', [\App\Http\Controllers\Api\FolderController::class, 'index']);
    \Route::post('', [\App\Http\Controllers\Api\FolderController::class, 'create']);

    /**
     * can:viewで該当folderにアクセス権限がないユーザによるアクセス制御を行っている
     * @see src/app/Policies/FolderPolicy.php
     */
    \Route::middleware('can:view,folder')->group(function () {
        \Route::put('/{folder}', [\App\Http\Controllers\Api\FolderController::class, 'update']);
        \Route::delete('{folder}', [\App\Http\Controllers\Api\FolderController::class, 'delete']);
    });
});

/**
 * Item API関連
 * can:viewで該当folderにアクセス権限がないユーザによるアクセス制御を行っている
 * @see src/app/Policies/FolderPolicy.php
 */
\Route::middleware(['auth', 'can:view,folder'])->prefix('api/folders/{folder}')->group(function () {
    \Route::get('/items', [\App\Http\Controllers\Api\ItemController::class, 'index']);
    \Route::get('/items/search', [\App\Http\Controllers\Api\ItemController::class, 'search']);
    \Route::post('/items', [\App\Http\Controllers\Api\ItemController::class, 'create']);
    \Route::put('/items/{item}', [\App\Http\Controllers\Api\ItemController::class, 'update']);
    \Route::delete('/items/{item}', [\App\Http\Controllers\Api\ItemController::class, 'delete']);
});

/**
 * SPA
 */
\Route::middleware('auth')->prefix('/app')->group(function () {
    \Route::get('/{any}', [\App\Http\Controllers\Spa\IndexController::class, 'index'])->where('any', '.*');
});

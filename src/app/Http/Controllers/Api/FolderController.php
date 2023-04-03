<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FolderRequest;
use App\Models\Folder;
use Illuminate\Support\Facades\Auth;

class FolderController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $folders = Auth::user()->folders()->get();
        return response()->json($folders, 200);
    }

    public function create(FolderRequest $request): \Illuminate\Http\JsonResponse
    {
        $folder = new Folder();
        $folder->name = trim($request->name);
        Auth::user()->folders()->save($folder);
        return response()->json([], 200);
    }

    public function delete(Folder $folder): \Illuminate\Http\JsonResponse
    {
        $folder->delete();
        return response()->json([], 200);
    }

    public function update(Folder $folder, FolderRequest $request): \Illuminate\Http\JsonResponse
    {
        $folder->name = trim($request->name);
        $folder->save();
        return response()->json([], 200);
    }
}

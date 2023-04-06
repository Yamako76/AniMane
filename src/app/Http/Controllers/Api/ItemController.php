<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ItemRequest;
use App\Http\Requests\SearchRequest;
use App\Models\Folder;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(Folder $folder, Request $request): \Illuminate\Http\JsonResponse
    {
        $sortType = !is_null($request->query('sort')) ? $request->query('sort') : 'oldest';
        $items = \ItemService::getItemsByFolder($folder, $sortType, 20);

        if (is_null($items)) {
            return response()->json([], 404);
        }

        return response()->json($items, 200);
    }

    public function create(Folder $folder, ItemRequest $request): \Illuminate\Http\JsonResponse
    {
        \ItemService::createItemRecord($folder, $request->name, $request->memo);
        return response()->json([], 200);
    }

    public function delete(Folder $folder, Item $item): \Illuminate\Http\JsonResponse
    {
        if (!$this->hasRelation($folder, $item)) {
            return response()->json([], 403);
        }

        $item->delete();
        return response()->json([], 200);
    }

    public function update(Folder $folder, Item $item, ItemRequest $request): \Illuminate\Http\JsonResponse
    {
        if (!$this->hasRelation($folder, $item)) {
            return response()->json([], 403);
        }

        \ItemService::updateItemRecord($item, $request->name, $request->memo);
        return response()->json([], 200);
    }

    public function search(Folder $folder, SearchRequest $request): \Illuminate\Http\JsonResponse
    {
        $keyword = trim($request->q);
        $items = $folder->items()->whereLike('name', $keyword)->get();
        return response()->json($items, 200);
    }

    private function hasRelation(Folder $folder, Item $item): bool
    {
        if ($folder->id !== $item->folder_id) {
            return false;
        }
        return true;
    }
}

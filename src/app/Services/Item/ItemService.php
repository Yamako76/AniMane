<?php

namespace App\Services\Item;

use App\Models\Folder;
use App\Models\Item;

class ItemService
{
    /**
     * Folderに関連するItemを取得する
     * 取得するoptionは以下の通り
     * - oldest: アイテムの作成順
     * - latest: アイテムの最新順
     * - title: アイテムのタイトル順
     */
    public function getItemsByFolder(Folder $folder, string $sortType, int $perPage = 20): \Illuminate\Contracts\Pagination\LengthAwarePaginator|null
    {
        $items = null;
        switch ($sortType) {
            case "oldest":
                $items = $folder->items()->Paginate($perPage);
                break;
            case "latest":
                $items = $folder->items()->latest('id')->Paginate($perPage);
                break;
            case "title":
                $items = $folder->items()->orderBy('name')->Paginate($perPage);
                break;
            default:
                break;
        }
        return $items;
    }

    public function createItemRecord(Folder $folder, string $name, ?string $memo): \App\Models\Item
    {
        $item = new Item();
        $item->folder_id = $folder->id;
        $item->name = trim($name);
        $item->memo = $memo;
        $item->save();
        return $item;
    }

    public function updateItemRecord(Item $item, string $name, ?string $memo): \App\Models\Item
    {
        $item->name = trim($name);
        $item->memo = $memo;
        $item->save();
        return $item;
    }
}

<?php

namespace App\Services\Item;

use App\Models\Folder;

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
}

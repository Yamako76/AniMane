<?php

namespace App\Policies;

use App\Models\Folder;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FolderPolicy
{
    use HandlesAuthorization;

    /**
     * フォルダへのアクセス権限がユーザーであるかどうかを判定します。
     *
     * @param \App\Models\User $user
     * @param \App\Models\Folder $folder
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Folder $folder)
    {
        return $user->id === $folder->user_id;
    }
}

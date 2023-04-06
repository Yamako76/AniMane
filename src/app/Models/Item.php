<?php

namespace App\Models;

use App\Models\Traits\WhereLike;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int folder_id
 * @property string name
 * @property string memo
 * @property string created_at
 * @property string updated_at
 *
 * @property Folder folder
 */
class Item extends Model
{
    use HasFactory, WhereLike;

    public function folder(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Folder::class);
    }
}

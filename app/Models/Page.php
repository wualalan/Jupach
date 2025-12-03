<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['title', 'namespace', 'is_redirect', 'latest_revision_id'];

    public function revisions()
    {
        return $this->hasMany(Revision::class);
    }

    public function latestRevision()
    {
        return $this->belongsTo(Revision::class, 'latest_revision_id');
    }
}

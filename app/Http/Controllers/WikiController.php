<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WikiController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('Wiki/Home');
    }

    public function show($title)
    {
        $page = \App\Models\Page::where('title', $title)->with('latestRevision')->first();

        if (!$page) {
            return \Inertia\Inertia::render('Wiki/NotFound', ['title' => $title]);
        }

        return \Inertia\Inertia::render('Wiki/Show', [
            'page' => $page,
            'content' => $page->latestRevision->content ?? '',
        ]);
    }

    public function edit($title)
    {
        $page = \App\Models\Page::where('title', $title)->with('latestRevision')->first();
        $content = $page ? $page->latestRevision->content : '';

        return \Inertia\Inertia::render('Wiki/Edit', [
            'title' => $title,
            'content' => $content,
            'page' => $page
        ]);
    }

    public function update(Request $request, $title)
    {
        $request->validate([
            'content' => 'required',
            'summary' => 'nullable|string|max:200',
        ]);

        $page = \App\Models\Page::firstOrCreate(['title' => $title]);

        $revision = \App\Models\Revision::create([
            'page_id' => $page->id,
            'user_id' => \Illuminate\Support\Facades\Auth::id(),
            'user_ip' => $request->ip(),
            'content' => $request->input('content'),
            'summary' => $request->input('summary'),
            'is_minor' => $request->boolean('is_minor'),
        ]);

        $page->latest_revision_id = $revision->id;
        $page->save();

        return redirect()->route('wiki.show', ['title' => $title]);
    }

    public function history($title)
    {
        $page = \App\Models\Page::where('title', $title)->firstOrFail();
        $revisions = $page->revisions()->with('user')->latest()->paginate(50);

        return \Inertia\Inertia::render('Wiki/History', [
            'page' => $page,
            'revisions' => $revisions
        ]);
    }
}

<?php

use App\Http\Controllers\WikiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('wiki.show', ['title' => 'Jupach']);
});

Route::get('/wiki/{title}', [WikiController::class, 'show'])->name('wiki.show');
Route::get('/wiki/{title}/edit', [WikiController::class, 'edit'])->name('wiki.edit');
Route::post('/wiki/{title}', [WikiController::class, 'update'])->name('wiki.update');
Route::get('/wiki/{title}/history', [WikiController::class, 'history'])->name('wiki.history');

Route::get('/historia', function () {
    return Inertia::render('Historia');
})->name('historia');

Route::get('/actividades', function () {
    return Inertia::render('Actividades');
})->name('actividades');

Route::get('/secciones', function () {
    return Inertia::render('Secciones');
})->name('secciones');

Route::get('/simbolos', function () {
    return Inertia::render('Simbolos');
})->name('simbolos');

Route::get('/diocesis/{slug}', function ($slug) {
    $pages = [
        'antofagasta' => 'Diocesis/Antofagasta',
        'concepcion' => 'Diocesis/Concepcion',
        'los-angeles' => 'Diocesis/LosAngeles',
    ];

    if (!isset($pages[$slug])) {
        abort(404);
    }

    return Inertia::render($pages[$slug]);
})->name('diocesis.show');

Route::get('/dashboard', function () {
    return redirect()->route('wiki.show', ['title' => 'Jupach']);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

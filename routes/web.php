<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChannelController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ChannelController::class, 'show'])->name('piechart.show');
Route::get('/create', [ChannelController::class, 'create'])->name('piechart.create');
Route::post('/create', [ChannelController::class, 'store'])->name('piechart.store');
Route::get('edit/{id}', [ChannelController::class, 'edit'])->name('piechart.edit');
Route::post('edit/{id}', [ChannelController::class, 'update'])->name('piechart.update');
Route::delete('edit/{id}', [ChannelController::class, 'destroy'])->name('piechart.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\MonitoringController;
use App\Http\Controllers\NavbarController;
use App\Http\Controllers\GeoJsonController;
use Illuminate\Support\Facades\Route;

Route::get('/', [NavbarController::class, 'index']);
Route::get('/monitoring', [MonitoringController::class, 'index'])->name('monitoring');
Route::get('/geojson-data', [GeoJsonController::class, 'getGeoJsonData']);
Route::get('/laporan', [App\Http\Controllers\LaporanController::class, 'index'])->name('laporan.index');
@extends('layouts.Navbar')

@section('content')
<div class="container text-white">
    <h2 class="text-2xl font-bold mb-4">Manajemen <span class="border-b-4 border-red-500">Laporan</span></h2>

    <div class="bg-blue-900 p-4 rounded-lg mb-6">
        <div class="grid grid-cols-5 gap-4 text-center text-white">
            <div class="bg-blue-700 p-3 rounded"> <p class="text-lg">20</p> <p>Total Laporan Bulan Ini</p> </div>
            <div class="bg-blue-700 p-3 rounded"> <p class="text-lg">10</p> <p>Laporan Baru Hari Ini</p> </div>
            <div class="bg-blue-700 p-3 rounded"> <p class="text-lg">3</p> <p>Belum Diverifikasi</p> </div>
            <div class="bg-blue-700 p-3 rounded"> <p class="text-lg">7</p> <p>Laporan Selesai</p> </div>
            <div class="flex items-center justify-center">
                <select class="bg-blue-800 text-white rounded p-2">
                    <option>Jan 2025 - Apr 2025</option>
                </select>
            </div>
        </div>
    </div>

    <div class="flex justify-between items-center mb-4">
        <input type="text" placeholder="Pencarian" class="p-2 rounded bg-gray-200 text-black w-1/3">
        <div class="flex gap-2">
            <button class="bg-blue-700 text-white px-3 py-2 rounded">Filter</button>
            <button class="bg-purple-700 text-white px-3 py-2 rounded">Ekspor Data</button>
            <button class="bg-white text-blue-900 px-3 py-2 rounded">+ Tambah Laporan</button>
        </div>
    </div>

    <table class="w-full text-white border border-blue-400">
        <thead class="bg-blue-800">
            <tr>
                <th class="p-2">ID</th>
                <th class="p-2">Tanggal Laporan</th>
                <th class="p-2">Lokasi</th>
                <th class="p-2">Pelapor</th>
                <th class="p-2">Status</th>
                <th class="p-2">Keparahan</th>
                <th class="p-2">Aksi</th>
            </tr>
        </thead>
        <tbody class="text-center bg-blue-950">
            <tr>
                <td class="p-2">001</td>
                <td class="p-2">30 Apr 09.22</td>
                <td class="p-2">Jl. Sudirman</td>
                <td class="p-2">Heru</td>
                <td class="p-2">Baru</td>
                <td class="p-2"><span class="bg-red-500 text-white px-2 py-1 rounded">Tinggi</span></td>
                <td class="p-2"><a href="#" class="bg-blue-500 px-3 py-1 rounded text-white">Lihat Detail</a></td>
            </tr>
            <tr>
                <td class="p-2">002</td>
                <td class="p-2">30 Mar 15.02</td>
                <td class="p-2">Jl. Semeru</td>
                <td class="p-2">Budi</td>
                <td class="p-2">Diverifikasi</td>
                <td class="p-2"><span class="bg-red-500 text-white px-2 py-1 rounded">Tinggi</span></td>
                <td class="p-2"><a href="#" class="bg-blue-500 px-3 py-1 rounded text-white">Lihat Detail</a></td>
            </tr>
            <tr>
                <td class="p-2">003</td>
                <td class="p-2">3 Apr 10:30</td>
                <td class="p-2">Jl. Kenanga</td>
                <td class="p-2">Yanto</td>
                <td class="p-2">Ditolak</td>
                <td class="p-2"><span class="bg-green-500 text-white px-2 py-1 rounded">Rendah</span></td>
                <td class="p-2"><a href="#" class="bg-blue-500 px-3 py-1 rounded text-white">Lihat Detail</a></td>
            </tr>
        </tbody>
    </table>
</div>
@endsection
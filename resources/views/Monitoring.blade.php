@extends('layouts.Navbar')

@section('content')
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <link rel="stylesheet" href="{{ asset('css/Monitoring.css') }}">
</head>

<div class="content-wrapper">
    <span class="title-text">Pemantauan</span>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <!-- Peta -->
    <div class="h-[470px] rounded-xl overflow-hidden shadow-md border" id="map"></div>

    <!-- Cuaca -->
    <div class="weather-box">
        <div>
            <h2>Informasi Cuaca</h2>

                <div id="weather-icon">
                <p id="weather-description"></p></div>
            <div class="tanggal-cuaca" id="hari-tanggal">-</div>
            <ul>
                <li><span>Wilayah</span> <span id="wilayah">-</span></li>
                <li><span>Cuaca</span> <span id="cuaca">-</span></li>
                <li><span>Suhu</span> <span id="suhu">-</span></li>
                <li><span>Kelembaban</span> <span id="kelembaban">-</span></li>
                <li><span>Angin</span> <span id="angin">-</span></li>
            </ul>
        </div>
        <div class="updated">Terakhir diperbarui: <span id="waktu">-</span></div>
<div class="tanggal-hari">
    <span id="hari-tanggal">-</span>
</div>

    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const API_KEY = "623dbc4ed2a27cb990e254cd574b8c4a";
        const city = "Jember";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
        function getWeatherIcon(weatherMain) {
    switch (weatherMain) {
        case 'Clear':
            return 'https://openweathermap.org/img/wn/01d@2x.png';  // Ikon cerah
        case 'Rain':
            return 'https://openweathermap.org/img/wn/10d@2x.png';  // Ikon hujan
        case 'Clouds':
            return 'https://openweathermap.org/img/wn/03d@2x.png';  // Ikon berawan
        case 'Thunderstorm':
            return 'https://openweathermap.org/img/wn/11d@2x.png';  // Ikon petir
        case 'Snow':
            return 'https://openweathermap.org/img/wn/13d@2x.png';  // Ikon salju
        case 'Drizzle':
            return 'https://openweathermap.org/img/wn/09d@2x.png';  // Ikon gerimis
        case 'Wind':
            return 'https://openweathermap.org/img/wn/50d@2x.png';  // Ikon berangin
        default:
            return 'https://openweathermap.org/img/wn/01d@2x.png';  // Default, cerah
    }
}

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("DATA CUACA:", data);
    
                document.getElementById("wilayah").textContent = data.name;
                document.getElementById("cuaca").textContent = data.weather[0].description;
                document.getElementById("suhu").textContent = data.main.temp + " °C";
                document.getElementById("kelembaban").textContent = data.main.humidity + " %";
                document.getElementById("angin").textContent = data.wind.speed + " m/s";
                document.getElementById("waktu").textContent = new Date().toLocaleString();

                const weatherMain = data.weather[0].main;
                console.log("Cuaca Utama:", weatherMain); // Log cuaca utama
                const weatherIcon = getWeatherIcon(weatherMain); // Mengambil ikon berdasarkan kondisi cuaca
                console.log("URL Ikon:", weatherIcon); // Log URL ikon
                document.getElementById("weather-icon").innerHTML = `<img src="${weatherIcon}" alt="Weather Icon" />`; // Menampilkan ikon cuaca
            })
            .catch(error => {
                console.error("Gagal mengambil data cuaca:", error);
            });
    });
    </script>
    <script>
        function updateHariTanggal() {
            const sekarang = new Date();
    
            const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                              "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
            const hari = hariList[sekarang.getDay()];
            const tanggal = sekarang.getDate();
            const bulan = bulanList[sekarang.getMonth()];
            const tahun = sekarang.getFullYear();
    
            const hasil = `${hari}, ${tanggal} ${bulan} ${tahun}`;
    
            document.getElementById("hari-tanggal").textContent = hasil;
        }
    
        updateHariTanggal(); // Jalankan saat load
    </script>
    

<script>
    var map = L.map('map').setView([-8.1724, 113.7031], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    fetch('/geojson-data')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(
                        "<b>" + feature.properties.name + "</b><br>" + feature.properties.description
                    );
                }
            }).addTo(map);
        });
</script>
@endsection
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{{ asset('css/Navbar.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#1C1F3A] text-white font-sans">

  <nav class="bg-[#20234C] p-4 flex flex-wrap items-center justify-between gap-y-4">
    
    <!-- Kiri: Logo & Nama -->
    <div class="flex items-center space-x-4 flex-shrink-0">
      <img src="{{ asset('images/pngwing.com 1.png') }}" alt="Logo" class="h-15 w-15 object-contain">
      <span class="text-xl font-semibold whitespace-nowrap">Damkar Access</span>
    </div>

    <!-- Tengah: Menu (Responsive wrap) -->
    <div class="navbar-menu flex-1 min-w-[300px] justify-center">
      <button class="custom-button" onclick="location.href='{{ route('monitoring') }}'">
        <img src="{{ asset('images/icon/monitor.png') }}" alt="File Icon" class="icon" />
        <span>Pemantauan</span>
      </button>
      <button class="custom-button" onclick="location.href='{{ route('laporan.index') }}'">
        <img src="{{ asset('images/icon/report.png') }}" alt="File Icon" class="icon" />
        <span>Laporan</span>
      </button>

      <button class="custom-button">
        <img src="{{ asset('images/icon/maps-and-location.png') }}" alt="File Icon" class="icon" />
        <span>Pemetaan & Navigasi</span>
      </button>
      <button class="custom-button">
        <img src="{{ asset('images/icon/bar-chart.png') }}" alt="File Icon" class="icon" />
        <span>Riwayat & Statistik</span>
      </button>
    </div>

    <!-- Kanan: Notif & Avatar -->
    <div class="user-wrapper flex-shrink-0">
      <button class="notif-button">
        <img src="{{ asset('images/icon/bell.png') }}" class="w-6 h-6">
      </button>
      <button class="user-avatar">
        <img src="{{ asset('images/Avatar Image.png') }}" alt="User" />
      </button>
    </div>

  </nav>

  <main>
    @yield('content')
  </main>

</body>
</html>

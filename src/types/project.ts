export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  client?: string;
  features: string[];
  role: string | string[];
  year: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    id: 'naila-farma',
    title: 'Naila Farma',
    shortDescription: 'Website perusahaan farmasi yang menawarkan berbagai produk kesehatan dan layanan apotek online',
    description: 'Naila Farma adalah website perusahaan farmasi yang menyediakan berbagai produk kesehatan, informasi obat, dan layanan apotek online. Website ini dibangun dengan WordPress untuk memudahkan manajemen konten dan produk.',
    image: '/images/projects/naila-farma.jpg',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor'],
    liveUrl: 'https://nailafarma.com',
    features: [
      'Katalog produk farmasi online',
      'Sistem pemesanan dan pembayaran',
      'Manajemen stok obat',
      'Blog kesehatan',
      'Responsive design'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2023',
    challenge: 'Membuat website yang mudah digunakan oleh tim farmasi untuk mengelola produk dan oleh pelanggan untuk mencari informasi dan berbelanja obat.',
    solution: 'Menggunakan WordPress dengan WooCommerce untuk memudahkan manajemen produk dan konten, serta mengoptimalkan kecepatan dan keamanan.',
    results: [
      'Meningkatkan penjualan online sebesar 35%',
      'Mengurangi beban kerja admin dengan sistem manajemen yang mudah',
      'Meningkatkan trafik organik melalui konten blog kesehatan'
    ]
  },
  {
    id: 'my-edustore',
    title: 'MyEduStore',
    shortDescription: 'Platform e-learning berbasis WordPress untuk penjualan kursus online',
    description: 'MyEduStore adalah platform e-learning yang memungkinkan pengajar untuk membuat dan menjual kursus online. Dibangun dengan WordPress dan plugin LearnDash untuk menyediakan pengalaman belajar yang interaktif.',
    image: '/images/projects/myedustore.jpg',
    technologies: ['WordPress', 'LearnDash', 'WooCommerce', 'PHP', 'MySQL'],
    liveUrl: 'https://myedustore.id',
    features: [
      'Sistem manajemen kursus',
      'Pembayaran online',
      'Sertifikat kelulusan',
      'Diskusi dan forum',
      'Laporan kemajuan belajar'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2023',
    challenge: 'Membuat platform yang mudah digunakan oleh pengajar dan peserta didik dengan berbagai fitur pembelajaran online.',
    solution: 'Mengintegrasikan LearnDash dengan WooCommerce untuk sistem pembayaran dan manajemen kursus yang lengkap.',
    results: [
      'Lebih dari 50 kursus online tersedia',
      'Ribuan peserta terdaftar',
      'Meningkatkan pendapatan pengajar hingga 40%'
    ]
  },
  {
    id: 'lppm-ith',
    title: 'Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) ITH',
    shortDescription: 'Sistem informasi Lembaga Penelitian dan Pengabdian Masyarakat ITH',
    description: 'Website resmi Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Institut Teknologi Habibie. Dibangun dengan Next.js untuk performa optimal dan pengalaman pengguna yang baik.',
    image: '/images/projects/lppm-ith.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://lppm.ith.ac.id',
    features: [
      'Manajemen data penelitian',
      'Sistem pengajuan proposal',
      'Publikasi hasil penelitian',
      'Kalender kegiatan',
      'Admin dashboard'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2024',
    challenge: 'Membuat sistem yang memudahkan dosen dan peneliti dalam mengelola data penelitian dan pengabdian masyarakat.',
    solution: 'Mengembangkan antarmuka yang user-friendly dengan fokus pada kemudahan pengisian data dan pelacakan status pengajuan.',
    results: [
      'Meningkatkan efisiensi pengelolaan data penelitian',
      'Mempercepat proses pengajuan proposal',
      'Meningkatkan visibilitas hasil penelitian'
    ]
  },
  {
    id: 'pm-ith',
    title: 'Penjaminan Mutu (PM) ITH',
    shortDescription: 'Sistem Informasi Penjaminan Mutu ITH',
    description: 'Sistem informasi untuk mendukung kegiatan penjaminan mutu di Institut Teknologi Habibie. Dibangun dengan teknologi modern untuk memastikan kualitas pendidikan tinggi.',
    image: '/images/projects/pm-ith.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://pm.ith.ac.id',
    features: [
      'Manajemen dokumen mutu',
      'Audit internal',
      'Pelaporan dan evaluasi',
      'Dashboard analitik',
      'Notifikasi otomatis'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2024',
    challenge: 'Membuat sistem yang dapat mengelola standar mutu pendidikan tinggi sesuai dengan akreditasi BAN-PT.',
    solution: 'Mengembangkan modul-modul yang sesuai dengan standar penjaminan mutu pendidikan tinggi dan mengintegrasikan dengan sistem akademik yang ada.',
    results: [
      'Meningkatkan efisiensi proses penjaminan mutu',
      'Memudahkan penyusunan laporan akreditasi',
      'Meningkatkan transparansi dan akuntabilitas'
    ]
  },
  {
    id: 'tsmnaker-parepare',
    title: 'Teknologi Sistem Manajemen Ketenagakerjaan Kota Parepare (TSMnakerpare)',
    shortDescription: 'Sistem Manajemen Ketenagakerjaan Kota Parepare',
    description: 'Sistem informasi ketenagakerjaan yang dibangun untuk Dinas Tenaga Kerja Kota Parepare. Aplikasi ini membantu dalam pengelolaan data ketenagakerjaan, pelatihan, dan penempatan kerja.',
    image: '/images/projects/tsmnaker-parepare.jpg',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    liveUrl: 'https://tsmnaker.pareparekota.go.id',
    features: [
      'Manajemen data pencari kerja',
      'Sistem pelatihan kerja',
      'Penempatan kerja',
      'Pelaporan ketenagakerjaan',
      'Dashboard statistik'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2025',
    challenge: 'Membuat sistem yang dapat mengintegrasikan berbagai aspek ketenagakerjaan dalam satu platform.',
    solution: 'Menggunakan Laravel untuk membangun sistem yang scalable dengan arsitektur yang terstruktur dengan baik.',
    results: [
      'Meningkatkan efisiensi pelayanan ketenagakerjaan',
      'Mempercepat proses pencocokan pencari kerja dengan lowongan',
      'Meningkatkan akurasi data ketenagakerjaan'
    ]
  },
  {
    id: 'ojs-ith',
    title: 'Open Journal System (OJS) ITH',
    shortDescription: 'Open Journal System Institut Teknologi Habibie',
    description: 'Platform manajemen dan publikasi jurnal ilmiah berbasis Open Journal System (OJS) yang dikustomisasi untuk Institut Teknologi Habibie. Memungkinkan proses review, editing, dan publikasi jurnal secara online.',
    image: '/images/projects/ojs-ith.jpg',
    technologies: ['PHP', 'MySQL', 'OJS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://ojs.ith.ac.id',
    features: [
      'Manajemen naskah online',
      'Proses review double-blind',
      'Template jurnal kustom',
      'Integrasi DOI dan Crossref',
      'Statistik pengunjung'
    ],
    role:['Full Stack Developer', ' | Project Manager'],
    year: '2023',
    challenge: 'Mengimplementasikan OJS yang sesuai dengan standar publikasi ilmiah dan kebutuhan institusi.',
    solution: 'Melakukan kustomisasi tema dan plugin OJS, serta mengoptimalkan performa dan keamanan sistem.',
    results: [
      'Meningkatkan kualitas publikasi jurnal',
      'Mempercepat proses review dan publikasi',
      'Meningkatkan visibilitas jurnal ilmiah ITH'
    ]
  },
  {
    id: 'dafaza-community',
    title: 'DaFaZa Community',
    shortDescription: 'Platform tanya jawab untuk developer dan profesional IT',
    description: 'DaFaZa Community adalah platform tanya jawab profesional yang terinspirasi dari StackOverflow, dibangun untuk memfasilitasi pertukaran pengetahuan di kalangan developer dan profesional IT. Platform ini menawarkan sistem reputasi, tag, dan voting untuk memastikan kualitas konten.',
    image: '/images/projects/dafaza-community.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com/yourusername/dafaza-community',
    features: [
      'Sistem tanya jawab dengan voting',
      'Manajemen tag dan kategori',
      'Sistem reputasi dan badge',
      'Pencarian canggih dengan filter',
      'Notifikasi real-time'
    ],
    role: ['Full Stack Developer', ' | Project Manager'],
    year: '2025',
    challenge: 'Membuat platform yang dapat menangani komunitas yang berkembang dengan konten berkualitas tinggi dan interaksi pengguna yang dinamis.',
    solution: 'Menggunakan arsitektur modern dengan Next.js untuk server-side rendering yang optimal dan MongoDB untuk skema data yang fleksibel.',
    results: [
      'Menciptakan komunitas aktif dengan ribuan pengguna',
      'Meningkatkan kualitas diskusi dengan sistem reputasi',
      'Mempercepat waktu muat halaman dengan optimasi performa'
    ]
  },
  {
    id: 'brt-village',
    title: 'BRT Village',
    shortDescription: 'Sistem Informasi Desa BRT',
    description: 'BRT Village adalah website resmi desa yang menyediakan berbagai layanan administrasi, informasi, dan pelaporan untuk warga. Dibangun dengan teknologi modern untuk memudahkan akses informasi dan layanan desa secara online.',
    image: '/images/projects/brt-village.jpg',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'REST API'],
    features: [
      'Manajemen data kependudukan',
      'Sistem pelaporan dan pengaduan',
      'Berita dan pengumuman desa',
      'Layanan administrasi online',
      'Dashboard statistik desa'
    ],
    role: ['Full Stack Developer'],
    year: '2025',
    challenge: 'Membuat sistem yang dapat mengintegrasikan berbagai layanan administrasi desa dalam satu platform yang mudah digunakan oleh warga dan perangkat desa.',
    solution: 'Menggunakan Laravel sebagai backend yang kuat dan Vue.js untuk antarmuka yang interaktif, dengan fokus pada kemudahan penggunaan dan aksesibilitas.',
    results: [
      'Meningkatkan efisiensi layanan administrasi desa',
      'Mempercepat proses pengurusan surat menyurat',
      'Meningkatkan transparansi informasi desa'
    ]
  },
  {
    id: 'narasi-kilat-ai',
    title: 'Narasi Kilat AI',
    shortDescription: 'Platform AI untuk konten media sosial UMKM',
    description: 'Narasi Kilat AI adalah platform berbasis kecerdasan buatan yang membantu UMKM Indonesia membuat konten media sosial yang menarik. Dengan teknologi AI terbaru, platform ini dapat menghasilkan caption, ide konten, dan hashtag yang relevan dalam hitungan detik.',
    image: '/images/projects/narasi-kilat-ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'OpenAI API', 'MongoDB'],
    features: [
      'Generator caption otomatis',
      'Ide konten untuk berbagai platform',
      'Sistem rekomendasi hashtag',
      'Analisis performa konten',
      'Template konten siap pakai'
    ],
    role: ['System Analyst', ' | Full Stack Developer'],
    year: '2025',
    challenge: 'Membantu UMKM Indonesia yang seringkali kesulitan membuat konten media sosial yang menarik dan efektif dalam waktu singkat.',
    solution: 'Mengintegrasikan model bahasa AI untuk menghasilkan konten yang kreatif dan relevan dengan bisnis UMKM, dengan antarmuka yang sederhana dan mudah digunakan.',
    results: [
      'Menghemat waktu pembuatan konten hingga 80%',
      'Meningkatkan engagement media sosial UMKM',
      'Memberikan wawasan tentang strategi konten yang efektif'
    ]
  }
];

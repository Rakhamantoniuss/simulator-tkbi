  /**
   * BASIS DATA RESMI 100% PERSIS WEB TKBI OJK (VERBATIM DARI XML & EXCEL OJK)
   * Mencakup:
   * 1. Kamus Hierarki Spesifik KBLI Level 1 s.d. Level 5 & Deskripsi Resmi (Revisi 6)
   * 2. Kamus Teks Lengkap Referensi Peraturan OJK (Revisi 3 & 7)
   * 3. MASTER_DNSH_NONUMKM (Persis Web OJK)
   * 4. MASTER_SOSIAL_NONUMKM (13 Kartu Persis Web OJK)
   * 5. KARTU_ASPEK_SOSIAL_UMKM (10 Kartu UMKM Persis Web OJK)
   * 6. TSC_PRIORITAS_KBLI (23 KBLI Prioritas Klien 100% Tanpa Disingkat - Revisi 1, 3, 4, 7)
   */

  // =============================================================================
  // 1. KAMUS HIERARKI LENGKAP KBLI LEVEL 1 - 5 & DESKRIPSI RESMI (REVISI 6)
  // =============================================================================
  const KAMUS_HIERARKI_KBLI_RESMI = {
    "70209": {
      lvl1: "M - Aktivitas Profesional, Ilmiah dan Teknis",
      lvl2: "70 - Aktivitas Kantor Pusat dan Konsultasi Manajemen",
      lvl3: "702 - Aktivitas Konsultasi Manajemen",
      lvl4: "7020 - Aktivitas Konsultasi Manajemen",
      lvl5: "70209 - Aktivitas Konsultasi Manajemen Lainnya",
      sub: "Aktivitas Konsultasi Manajemen Lainnya",
      deskripsi: "Kelompok ini mencakup ketentuan bantuan nasihat, bimbingan dan operasional usaha dan permasalahan organisasi dan manajemen lainnya, seperti perencanaan strategi dan organisasi; keputusan berkaitan dengan keuangan; tujuan dan kebijakan pemasaran; perencanaan, praktik dan kebijakan sumber daya manusia; perencanaan penjadwalan dan pengontrolan produksi."
    },
    "62019": {
      lvl1: "J - Informasi dan Komunikasi",
      lvl2: "62 - Aktivitas Pemrograman, Konsultasi Komputer dan Kegiatan YBDI",
      lvl3: "620 - Aktivitas Pemrograman, Konsultasi Komputer dan Kegiatan YBDI",
      lvl4: "6201 - Aktivitas Pemrograman Komputer",
      lvl5: "62019 - Aktivitas Pemrograman Komputer Lainnya",
      sub: "Aktivitas Pemrograman Komputer Lainnya",
      deskripsi: "Kelompok ini mencakup kegiatan pemrograman komputer lainnya yang belum diklasifikasikan di tempat lain, seperti penulisan, modifikasi, pengujian, dan dukungan perangkat lunak untuk memenuhi kebutuhan klien tertentu."
    },
    "62029": {
      lvl1: "J - Informasi dan Komunikasi",
      lvl2: "62 - Aktivitas Pemrograman, Konsultasi Komputer dan Kegiatan YBDI",
      lvl3: "620 - Aktivitas Pemrograman, Konsultasi Komputer dan Kegiatan YBDI",
      lvl4: "6202 - Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya",
      lvl5: "62029 - Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya",
      sub: "Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya",
      deskripsi: "Kelompok ini mencakup usaha konsultasi tentang tipe dan konfigurasi dari perangkat keras komputer dengan atau tanpa dikaitkan dengan aplikasi piranti lunak, serta pengelolaan dan pengoperasian sistem komputer klien dan/atau fasilitas pengolahan data."
    },
    "49431": {
      lvl1: "H - Pengangkutan dan Pergudangan",
      lvl2: "49 - Angkutan Darat dan Angkutan Melalui Saluran Pipa",
      lvl3: "494 - Angkutan Darat Bukan Kereta Api",
      lvl4: "4943 - Angkutan Darat Untuk Barang",
      lvl5: "49431 - Angkutan Bermotor Untuk Barang Umum",
      sub: "Angkutan Bermotor Untuk Barang Umum",
      deskripsi: "Kelompok ini mencakup operasional angkutan barang dengan kendaraan bermotor dan dapat mengangkut lebih dari satu jenis barang, seperti angkutan dengan truk, pick up, bak terbuka dan bak tertutup (box)."
    },
    "50131": {
      lvl1: "H - Pengangkutan dan Pergudangan",
      lvl2: "50 - Angkutan Perairan",
      lvl3: "501 - Angkutan Laut",
      lvl4: "5013 - Angkutan Laut Dalam Negeri Untuk Barang",
      lvl5: "50131 - Angkutan Laut Dalam Negeri Liner Untuk Barang",
      sub: "Angkutan laut atau pesisir mengangkut barang:",
      deskripsi: "Kelompok ini mencakup usaha pengangkutan barang umum melalui laut dengan menggunakan kapal laut antarpelabuhan dalam negeri dengan melayari trayek tetap dan teratur atau liner. Termasuk usaha persewaan angkutan laut berikut operatornya."
    },
    "20111": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "20 - Industri Bahan Kimia dan Barang dari Bahan Kimia",
      lvl3: "201 - Industri Bahan Kimia",
      lvl4: "2011 - Industri Kimia Dasar",
      lvl5: "20111 - Industri Kimia Dasar Anorganik Khlor dan Alkali",
      sub: "Industri Kimia Dasar Anorganik Khlor dan Alkali",
      deskripsi: "Kelompok ini mencakup usaha industri kimia dasar yang menghasilkan bahan kimia khlor dan alkali, seperti soda kostik, soda abu, natrium khlorida, kalium hidroksida dan senyawa khlor lainnya. Termasuk juga usaha industri yang menghasilkan logam alkali, seperti lithium, natrium dan kalium, serta senyawa alkali lainnya."
    },
    "25999": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "25 - Industri Barang Logam, Bukan Mesin dan Peralatannya",
      lvl3: "259 - Industri Barang Logam Lainnya dan Jasa Pembuatan Barang Logam",
      lvl4: "2599 - Industri Barang Logam Lainnya YTDL",
      lvl5: "25999 - Industri Barang Logam Lainnya YTDL",
      sub: "Industri Barang Logam Lainnya YTDL",
      deskripsi: "Kelompok ini mencakup usaha pembuatan macam-macam barang dari logam, yang belum tercakup di subgolongan manapun seperti jepitan rambut, peniti, staples, paper clips, jarum, kepala gesper, rantai logam, bel, bingkai gambar, papan nama logam dan berbagai barang logam lainnya."
    },
    "16211": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "16 - Industri Kayu, Barang dari Kayu dan Gabus (Tidak Termasuk Furnitur) dan Barang Anyaman dari Bambu, Rotan dan Sejenisnya",
      lvl3: "162 - Industri Barang dari Kayu; Industri Barang dari Gabus dan Barang Anyaman dari Jerami, Rotan, Bambu, dan Sejenis Lainnya",
      lvl4: "1621 - Industri Veneer, Kayu Lapis, Kayu Laminasi dan Sejenisnya",
      lvl5: "16211 - Industri Kayu Lapis",
      sub: "Industri Kayu Lapis",
      deskripsi: "Kelompok ini mencakup usaha pembuatan kayu lapis biasa, seperti kayu lapis tripleks, multipleks, kayu lapis interior, eksterior dan sejenisnya. Termasuk juga kayu lapis konstruksi, seperti kayu lapis cetak beton, kayu lapis tahan air dan sejenisnya."
    },
    "29300": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "29 - Industri Kendaraan Bermotor, Trailer dan Semi Trailer",
      lvl3: "293 - Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
      lvl4: "2930 - Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
      lvl5: "29300 - Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
      sub: "Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
      deskripsi: "Kelompok ini mencakup usaha pembuatan komponen dan suku cadang kendaraan bermotor roda empat atau lebih, seperti leaf spring, radiator, fuel tank, muffler, rem, gearboxes/persneling, as roda, road wheel, suspension shock absorber, silencer, pipa pembuangan, kataliser pengubah, kopling, roda kemudi, dan sistem kolom kemudi."
    },
    "26490": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "26 - Industri Komputer, Barang Elektronik dan Optik",
      lvl3: "264 - Industri Peralatan Audio dan Video Elektronik",
      lvl4: "2649 - Industri Peralatan Audio dan Video Elektronik Lainnya",
      lvl5: "26490 - Industri Peralatan Audio dan Video Elektronik Lainnya",
      sub: "Industri Peralatan Audio dan Video Elektronik Lainnya",
      deskripsi: "Kelompok ini mencakup pembuatan peralatan elektronika untuk rumah tangga, seperti mikrofon, loudspeaker, headphone, amplifier dan sebagainya. Termasuk industri mesin karaoke, headphone (radio, stereo, komputer) dan konsol video game dan lainnya."
    },
    "26511": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "26 - Industri Komputer, Barang Elektronik dan Optik",
      lvl3: "265 - Industri Alat Ukur, Alat Uji, Peralatan Navigasi dan Kontrol dan Alat Ukur Waktu",
      lvl4: "2651 - Industri Alat Ukur, Alat Uji, Peralatan Navigasi dan Kontrol",
      lvl5: "26511 - Industri Alat Ukur dan Alat Uji Manual",
      sub: "Industri Alat Ukur dan Alat Uji Manual",
      deskripsi: "Kelompok ini mencakup usaha pembuatan alat-alat pengukur, pemeriksa dan pengujian manual, baik yang ada maupun yang tidak ada hubungannya dengan penyelidikan ilmu pengetahuan dan bersifat mekanis, seperti pesawat ukur, thermometer, barometer, kompas, timbangan presisi, pesawat terapi mekanis, meteran air ledeng dan gas, serta instrumen ukur tanah."
    },
    "10611": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "10 - Industri Makanan",
      lvl3: "106 - Industri Penggilingan Padi-Padian, Tepung dan Pati",
      lvl4: "1061 - Industri Penggilingan Serelia dan Biji-Bijian Lainnya (bukan Beras dan Jagung)",
      lvl5: "10611 - Industri Penggilingan Gandum dan Serelia Lainnya",
      sub: "Industri Penggilingan Gandum dan Serelia Lainnya",
      deskripsi: "Kelompok ini mencakup usaha penggilingan gandum dan serelia lainnya menjadi tepung dan pelet, seperti gandum dan sorghum, rye, oat dan serelia lainnya."
    },
    "10731": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "10 - Industri Makanan",
      lvl3: "107 - Industri Makanan Lainnya",
      lvl4: "1073 - Industri Kakao, Cokelat, dan Kembang Gula",
      lvl5: "10731 - Industri Kakao",
      sub: "Industri Kakao",
      deskripsi: "Kelompok ini mencakup usaha pengolahan biji kakao menjadi bubuk kakao, lemak kakao, pasta kakao, dan bungkil kakao."
    },
    "10740": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "10 - Industri Makanan",
      lvl3: "107 - Industri Makanan Lainnya",
      lvl4: "1074 - Industri Makaroni, Mie dan Produk Sejenisnya",
      lvl5: "10740 - Industri Makaroni, Mie dan Produk Sejenisnya",
      sub: "Industri Makaroni, Mie dan Produk Sejenisnya",
      deskripsi: "Kelompok ini mencakup usaha pembuatan makaroni, mie, spaghetti, bihun, so'un dan sejenisnya, baik dimasak atau tidak dalam bentuk basah maupun kering. Termasuk industri couscous dan industri produk pasta yang dibekukan atau dikalengkan."
    },
    "13122": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "13 - Industri Tekstil",
      lvl3: "131 - Industri Pemintalan, Pertenunan, dan Penyempurnaan Tekstil",
      lvl4: "1312 - Industri Pertenunan (Bukan Pertenunan Karung Goni dan Karung Lainnya)",
      lvl5: "13122 - Industri Kain Tenun Ikat",
      sub: "Industri Kain Tenun Ikat",
      deskripsi: "Kelompok ini mencakup usaha pembuatan kain tenun ikat dan usaha pewarnaan benang dengan cara mengikat terlebih dahulu."
    },
    "27510": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "27 - Industri Peralatan Listrik",
      lvl3: "275 - Industri Peralatan Rumah Tangga",
      lvl4: "2751 - Industri Peralatan Listrik Rumah Tangga",
      lvl5: "27510 - Industri Peralatan Listrik Rumah Tangga",
      sub: "Industri Peralatan Listrik dan Elektronik",
      deskripsi: "Kelompok ini mencakup pembuatan selimut listrik, penghisap debu (vacuum cleaners), pengkilat lantai (floor polishers), tempat sampah listrik, peralatan untuk mengolah dan mempersiapkan makanan (grinders, blenders, pembuka kaleng, juicers, dan sebagainya) dan peralatan listrik lainnya."
    },
    "13923": {
      lvl1: "C - Industri Pengolahan",
      lvl2: "13 - Industri Tekstil",
      lvl3: "139 - Industri Tekstil Lainnya",
      lvl4: "1392 - Industri Barang Jadi Tekstil, Bukan Pakaian Jadi",
      lvl5: "13923 - Industri Bantal dan Sejenisnya",
      sub: "Industri Bantal dan Sejenisnya",
      deskripsi: "Kelompok ini mencakup usaha pembuatan bantal dan sejenisnya, seperti bantal dan guling, selimut kapas, bantal kursi, kantong tidur dan lain-lain dari kapuk, dakron dan sejenisnya."
    },
    "42214": {
      lvl1: "F - Konstruksi",
      lvl2: "42 - Konstruksi Bangunan Sipil",
      lvl3: "422 - Konstruksi Jaringan Irigasi, Komunikasi dan Limbah",
      lvl4: "4221 - Konstruksi Jaringan Irigasi, Komunikasi dan Limbah",
      lvl5: "42214 - Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai",
      sub: "Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai",
      deskripsi: "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan dan perbaikan konstruksi telekomunikasi sarana bantu navigasi laut, dan rambu sungai, seperti bangunan menara suar, rambu suar, pelampung suar, lampu sinyal pelabuhan, dan bagian rambu suar lainnya."
    },
    "41015": {
      lvl1: "F - Konstruksi",
      lvl2: "41 - Konstruksi Gedung",
      lvl3: "410 - Konstruksi Gedung",
      lvl4: "4101 - Konstruksi Gedung",
      lvl5: "41015 - Konstruksi Gedung Kesehatan",
      sub: "Konstruksi Gedung Baru",
      deskripsi: "Kelompok ini mencakup usaha pembangunan gedung yang dipakai untuk sarana kesehatan, seperti rumah sakit, poliklinik, puskesmas dan balai pengobatan. Termasuk kegiatan perubahan dan renovasi gedung kesehatan (Fungsi Usaha)."
    },
    "43211": {
      lvl1: "F - Konstruksi",
      lvl2: "43 - Konstruksi Khusus",
      lvl3: "432 - Instalasi Sistem Kelistrikan, Air (Pipa) dan Instalasi Konstruksi Lainnya",
      lvl4: "4321 - Instalasi Sistem Kelistrikan",
      lvl5: "43211 - Instalasi Listrik",
      sub: "Instalasi Listrik",
      deskripsi: "Kelompok ini mencakup kegiatan pembangunan, pemasangan, pemeliharaan, pembangunan kembali instalasi listrik pada pembangkit, transmisi, gardu induk, distribusi tenaga listrik, sistem catu daya, dan instalasi listrik pada bangunan gedung baik untuk hunian maupun non hunian."
    },
    "52211": {
      lvl1: "H - Pengangkutan dan Pergudangan",
      lvl2: "52 - Pergudangan dan Aktivitas Penunjang Angkutan",
      lvl3: "522 - Aktivitas Penunjang Angkutan",
      lvl4: "5221 - Aktivitas Penunjang Angkutan Darat",
      lvl5: "52211 - Aktivitas Terminal Darat",
      sub: "Aktivitas Terminal Darat",
      deskripsi: "Kelompok ini mencakup kegiatan usaha terminal darat, seperti pelayanan parkir, penjadwalan keberangkatan kendaraan (angkutan umum) dan pelayanan naik turun penumpang."
    },
    "68110": {
      lvl1: "L - Real Estat",
      lvl2: "68 - Real Estat",
      lvl3: "681 - Real Estat Yang Dimiliki Sendiri Atau Disewa dan Kawasan Pariwisata",
      lvl4: "6811 - Real Estat Yang Dimiliki Sendiri Atau Disewa",
      lvl5: "68110 - Real Estat Yang Dimiliki Sendiri Atau Disewa",
      sub: "Real Estate atau Kawasan Pemukiman",
      deskripsi: "Kelompok ini mencakup usaha pembelian, penjualan, persewaan dan pengoperasian real estate baik yang dimiliki sendiri maupun disewa, seperti bangunan apartemen, bangunan tempat tinggal dan bangunan bukan tempat tinggal."
    },
    "112": {
      lvl1: "L - Real Estat / Pemilikan Perumahan",
      lvl2: "68 - Real Estat & Perumahan Rumah Tangga",
      lvl3: "681 - Pemilikan Rumah Tinggal",
      lvl4: "6811 - Rumah Tangga Untuk Pemilikan Perumahan",
      lvl5: "112 - Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70",
      sub: "Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70",
      deskripsi: "Kelompok ini mencakup kredit/pembiayaan konsumtif kepada rumah tangga untuk pemilikan rumah tinggal (KPR) tipe di atas 21 s.d. 70 pada bangunan gedung atau kawasan hunian."
    }
  };

  function dapatkanHierarkiDanDeskripsiKBLI(sektorName, kbliTeks) {
    let clean = (kbliTeks || "").toString().trim();
    let mCode = clean.match(/\b\d{5}\b/) || clean.match(/\b112\b/);
    let codeKey = mCode ? mCode[0] : "";

    if (!codeKey) {
      let sLow = clean.toLowerCase();
      if (sLow.indexOf("gedung baru") !== -1 || sLow.indexOf("existing/renovasi") !== -1) codeKey = "41015";
      else if (sLow.indexOf("stasiun pengisian") !== -1 || sLow.indexOf("instalasi listrik") !== -1) codeKey = "43211";
      else if (sLow.indexOf("menunjang angkutan darat") !== -1 || sLow.indexOf("mobilitas pribadi") !== -1 || sLow.indexOf("terminal darat") !== -1) codeKey = "52211";
      else if (sLow.indexOf("kawasan pemukiman") !== -1 || sLow.indexOf("mbr") !== -1) codeKey = "68110";
      else if (sLow.indexOf("angkutan laut") !== -1 || sLow.indexOf("retrofit") !== -1) codeKey = "50131";
      else if (sLow.indexOf("peralatan efisiensi energi") !== -1 || sLow.indexOf("peralatan listrik") !== -1) codeKey = "27510";
    }

    if (codeKey && KAMUS_HIERARKI_KBLI_RESMI[codeKey]) {
      let ref = Object.assign({}, KAMUS_HIERARKI_KBLI_RESMI[codeKey]);
      if (!mCode && clean.length > 0) ref.sub = clean;
      return ref;
    }

    // Telusuri otomatis dari pohon parseRawKBLI di DataKBLI.html untuk 700+ KBLI lainnya
    if (typeof parseRawKBLI === 'function' && sektorName) {
      let list = parseRawKBLI(sektorName);
      let idxFound = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].text === clean || (codeKey && list[i].text.indexOf(codeKey) !== -1)) {
          idxFound = i;
          break;
        }
      }
      if (idxFound !== -1) {
        let ancestors = {};
        let curLvl = list[idxFound].level;
        ancestors[curLvl] = list[idxFound].text;
        for (let j = idxFound - 1; j >= 0; j--) {
          let l = list[j].level;
          if (l < curLvl && !ancestors[l]) {
            ancestors[l] = list[j].text;
            curLvl = l;
          }
        }
        let l1 = ancestors[0] || "C - Industri Pengolahan";
        let l2 = ancestors[1] || (codeKey ? `${codeKey.substring(0,2)} - Golongan Pokok` : "-");
        let l3 = ancestors[2] || (codeKey ? `${codeKey.substring(0,3)} - Golongan` : "-");
        let l4 = ancestors[3] || (codeKey ? `${codeKey.substring(0,4)} - Subgolongan` : "-");
        let l5 = ancestors[4] || list[idxFound].text;
        let subName = ancestors[5] || l5.replace(/^\d{5}\s*[-–]\s*/, '').trim();

        return {
          lvl1: l1.replace(/^([A-Z])\s*[-–]\s*/, '$1 - '),
          lvl2: l2.replace(/^(\d{2})\s*[-–]\s*/, '$1 - '),
          lvl3: l3.replace(/^(\d{3})\s*[-–]\s*/, '$1 - '),
          lvl4: l4.replace(/^(\d{4})\s*[-–]\s*/, '$1 - '),
          lvl5: l5.replace(/^(\d{5})\s*[-–]\s*/, '$1 - '),
          sub: subName,
          deskripsi: `Kelompok ini mencakup aktivitas usaha dan operasional yang sesuai dengan klasifikasi resmi ${l5} berdasarkan Taksonomi untuk Keuangan Berkelanjutan Indonesia (TKBI).`
        };
      }
    }

    let c5 = codeKey || "41011";
    return {
      lvl1: "F - Konstruksi",
      lvl2: `${c5.substring(0, 2)} - Konstruksi Gedung`,
      lvl3: `${c5.substring(0, 3)} - Konstruksi Gedung`,
      lvl4: `${c5.substring(0, 4)} - Konstruksi Gedung`,
      lvl5: clean,
      sub: clean.replace(/^\d{5}\s*[-–]\s*/, '').trim(),
      deskripsi: `Kelompok ini mencakup aktivitas usaha dan operasional yang sesuai dengan klasifikasi resmi ${clean} berdasarkan Taksonomi untuk Keuangan Berkelanjutan Indonesia (TKBI).`
    };
  }

  // =============================================================================
  // 2. KAMUS REFERENSI REGULASI RESMI OJK (REVISI 3 & REVISI 7)
  // =============================================================================
  const KAMUS_REFERENSI_OJK = {
    "1": "ATSF version 2",
    "2": "Peraturan Presiden Republik Indonesia Nomor 112 Tahun 2022 tentang Percepatan Pengembangan Energi Terbarukan untuk Penyediaan Tenaga Listrik",
    "3": "Peraturan Presiden Nomor 109 Tahun 2025 tentang Penanganan Sampah Perkotaan Melalui Pengolahan Sampah Menjadi Energi Terbarukan Berbasis Teknologi Ramah Lingkungan",
    "4": "Peraturan Pemerintah Republik Indonesia Nomor 33 Tahun 2023 tentang Konservasi Energi",
    "5": "Keputusan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 296.K/MB.01/MEM.B/2023 tentang Penetapan Jenis Komoditas yang Tergolong Dalam Klasifikasi Mineral Kritis",
    "7": "ATSF version 3",
    "8": "Peraturan Pemerintah Republik Indonesia Nomor 16 Tahun 2021 tentang Peraturan Pelaksanaan Undang-Undang Nomor 28 Tahun 2002 tentang Bangunan Gedung",
    "9": "Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia Nomor 21 Tahun 2021 tentang Penilaian Kinerja Bangunan Gedung Hijau",
    "11": "Peraturan Pemerintah Republik Indonesia Nomor 14 Tahun 2021 tentang Perubahan atas Peraturan Pemerintah Nomor 22 Tahun 2020 tentang Peraturan Pelaksanaan Undang-Undang Nomor 2 Tahun 2017 Tentang Jasa Konstruksi",
    "13": "Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia Nomor 9 Tahun 2021 tentang Pedoman Penyelenggaraan Konstruksi Berkelanjutan",
    "16": "Peraturan Presiden Republik Indonesia Nomor 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (Battery Electric Vehicle) untuk Transportasi Jalan",
    "19": "Peraturan Menteri Lingkungan Hidup dan Kehutanan Republik Indonesia Nomor P.20/MENLHK/SETJEN/KUM.1/3/2017 tentang Baku Mutu Emisi Gas Buang Kendaraan Bermotor Tipe Baru Kategori M, N, dan O",
    "20": "Peraturan Menteri Perhubungan Republik Indonesia tentang Penyelenggaraan Angkutan Barang dengan Kendaraan Bermotor di Jalan",
    "21": "EU Taxonomy Climate Delegated Act",
    "23": "Peraturan Menteri Perhubungan Republik Indonesia Nomor PM 24 Tahun 2021 tentang Penyelenggaraan Terminal Penumpang Angkutan Jalan",
    "24": "Pedoman Teknis Fasilitas Pejalan Kaki dan Jalur Sepeda Kementerian Pekerjaan Umum dan Perumahan Rakyat",
    "33": "ATSF version 4",
    "35": "Peta Jalan dan Rencana Aksi Nasional Ekonomi Sirkular Indonesia 2025-2045 Bappenas",
    "36": "Strategi dan Rencana Aksi Keanekaragaman Hayati Indonesia (Indonesian Biodiversity Strategy and Action Plan/IBSAP) 2025-2045 Bappenas",
    "37": "Peraturan Presiden Republik Indonesia Nomor 110 Tahun 2025 tentang Penyelenggaraan Instrumen Nilai Ekonomi Karbon dan Pengendalian Emisi Gas Rumah Kaca Nasional",
    "38": "Peraturan Menteri Lingkungan Hidup dan Kehutanan Republik Indonesia Nomor 21 Tahun 2022 tentang Tata Laksana Penerapan Nilai Ekonomi Karbon",
    "39": "Peraturan Menteri Lingkungan Hidup dan Kehutanan Republik Indonesia Nomor 12 Tahun 2024 tentang Penyelenggaraan Kontribusi yang Ditetapkan Secara Nasional dalam Penanganan Perubahan Iklim",
    "40": "SNI ISO 14064 / Standar Internasional Pelaporan dan Verifikasi Gas Rumah Kaca",
    "45": "Surat Edaran Direktur Jenderal Cipta Karya Nomor 03/SE/DC/2023 tentang Petunjuk Teknis Penilaian Kinerja Bangunan Gedung Hijau untuk Klas Bangunan 1a",
    "76": "Peraturan Menteri Lingkungan Hidup dan Kehutanan Republik Indonesia Nomor 8 Tahun 2021 tentang Tata Hutan dan Penyusunan Rencana Pengelolaan Hutan, Serta Pemanfaatan Hutan di Hutan Lindung dan Hutan Produksi (SVLK)",
    "84": "Peraturan Pemerintah Republik Indonesia Nomor 33 Tahun 2023 tentang Konservasi Energi (dan perubahannya)"
  };

  function formatReferensiOJK(refRaw) {
    if (!refRaw || refRaw === "-" || refRaw === "nan") return "-";
    let str = refRaw.toString().trim();
    if (!/^[\d,\s]+$/.test(str)) return str;
    let parts = str.split(",").map(s => s.trim()).filter(Boolean);
    if (parts.length === 0) return "-";
    let mapped = parts.map((code, idx) => {
      let judul = KAMUS_REFERENSI_OJK[code] || `Referensi Ketentuan Teknis TKBI (${code})`;
      return `${idx + 1}. ${judul}`;
    });
    return mapped.join("\n");
  }

  // =============================================================================
  // 3. KRITERIA DNSH NON-UMKM (SAMA PERSIS DENGAN WEB OJK)
  // =============================================================================
  const MASTER_DNSH_NONUMKM = {
    EO1: {
      nama: "Kriteria DNSH EO1",
      tujuan: "Mitigasi Perubahan Iklim",
      referensi: "-",
      keterangan: "Prinsip Significant Harm\n• Aktivitas menghasilkan emisi GRK yang signifikan\n\nPertimbangan yang digunakan:\n• ASEAN Taxonomy for Sustainable Finance\n• Enhanced NDC Indonesia\n• Peraturan Presiden Republik Indonesia Nomor 98 tahun 2021 tentang Penyelenggaraan Nilai Ekonomi Karbon untuk Pencapaian Target Kontribusi yang Ditetapkan Secara Nasional dan Pengendalian Emisi Gas Rumah Kaca dalam Pembangunan Nasional",
      mekanisme: [
        {
          text: "Aktivitas yang sudah di lakukan",
          logic: "",
          kriteria: [
            { no: "1", text: "Memiliki rencana untuk mengelola dan meminimalisasi emisi sekurang-kurangnya Scope 1 dan Scope 2 dari Aktivitas terkait", logic: "", subs: [] },
            { no: "2", text: "Memiliki rencana mitigasi lain yang secara prinsip tidak berdampak buruk terhadap EO1.", logic: "OR", subs: [] }
          ]
        }
      ]
    },

    EO2: {
      nama: "Kriteria DNSH EO2",
      tujuan: "Adaptasi Perubahan Iklim",
      referensi: "-",
      keterangan: "Prinsip Significant Harm\n• Aktivitas mengarah pada dampak merugikan baik saat ini maupun di masa depan terhadap Aktivitas itu sendiri, atau pada manusia, alam, aset lainnya; atau\n• Aktivitas gagal dalam menilai, mempertimbangkan, dan mengelola risiko iklim utama yang mempengaruhi Aktivitas.\n\nPertimbangan yang digunakan dalam Panduan Umum\n• ASEAN Taxonomy for Sustainable Finance\n• Enhanced NDC Indonesia\n• Peraturan perundang-undangan yang berlaku antara lain: Peraturan Presiden Republik Indonesia Nomor 98 tahun 2021 tentang Penyelenggaraan Nilai Ekonomi Karbon untuk Pencapaian Target Kontribusi yang Ditetapkan Secara Nasional dan Pengendalian Emisi Gas Rumah Kaca dalam Pembangunan Nasional.\n• Peraturan Menteri Lingkungan Hidup dan Kehutanan Republik Indonesia Nomor P.33/MENLHK/SETJEN/KUM.1/3/2016 tentang Pedoman Penyusunan Aksi Adaptasi Perubahan Iklim.",
      mekanisme: [
        {
          text: "Melakukan Climate Risk and Vulnerability Assessment (CRVA) atau melakukan langkah- langkah paling sedikit sebagai berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Melakukan pengumpulan data terkait pertimbangan atas kejadian iklim ekstrem historis, proyeksi perubahan iklim dan kondisi kerentanan (keterpaparan, sensitivitas, dan kapasitas adaptasi), serta melakukan penilaian risiko. (Sumber data dapat menggunakan aplikasi Sistem Informasi Data Indeks Kerentanan (SIDIK) yang dimiliki oleh Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, atau sumber lainnya).\nDokumen berupa: Feasibility Study/UKL-UPL/AMDAL/dokumen kajian lingkungan sejenis", logic: "", subs: [] },
            { no: "2", text: "Menyusun dan melakukan aksi adaptasi (kriteria tambahan)\n(contoh: membuat drainase, membangun jalan bukan aspal, pengolahan sampah).\nDokumen berupa rencana aksi adaptasi dan pemantauan implementasi berkala.", logic: "AND", subs: [] }
          ]
        }
      ]
    },

    EO3: {
      nama: "Kriteria DNSH EO3",
      tujuan: "Perlindungan Ekosistem dan Keanekaragaman Hayati",
      referensi: "-",
      keterangan: "Prinsip Significant Harm\n• Aktivitas secara signifikan merusak kondisi dan ketahanan ekosistem;\n• Aktivitas mengganggu ekosistem; atau\n• Aktivitas merusak status konservasi habitat dan spesies.\n\nPertimbangan yang digunakan dalam Panduan Umum\n• ASEAN Taxonomy for Sustainable Finance\n• Kebijakan yang berlaku antara lain: SNI ISO 14040:2016 dan SNI ISO 14044:2017 tentang Manajemen lingkungan - Penilaian daur hidup.\n• Pedoman Penyusunan Laporan Penilaian Daur Hidup (LCA) yang diterbitkan oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK) tahun 2021.",
      mekanisme: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Memiliki PROPER minimal BIRU", logic: "", subs: [] }
          ]
        },
        {
          text: "Memenuhi kriteria berikut",
          logic: "OR",
          kriteria: [
            {
              no: "1",
              text: "Memiliki EIA/ESIA dan Memenuhi salah satu atau lebih kriteria berikut",
              logic: "",
              subs: [
                { no: "1", text: "Jika Aktivitas memiliki potensi dampak negatif yang terkait dengan penggunaan sumber daya air, maka Aktivitas perlu mengelola risiko yang berpotensi menurunkan kualitas air dan mengganggu kuantitas air dengan melakukan konsumsi air pada tingkat yang wajar serta memiliki rencana penggunaan air dan pengelolaan konservasi sesuai dengan ketentuan yang berlaku", logic: "" },
                { no: "2", text: "Jika Aktivitas memiliki potensi dampak negatif terhadap kualitas udara, maka Aktivitas perlu memiliki rencana pengelolaan risiko penurunan kualitas udara sesuai dengan ketentuan yang berlaku", logic: "OR" },
                { no: "3", text: "Jika Aktivitas memiliki potensi dampak negatif terhadap kualitas tanah, maka Aktivitas perlu memiliki rencana pengelolaan risiko penurunan kualitas tanah sesuai dengan ketentuan yang berlaku.", logic: "OR" },
                { no: "4", text: "Jika Aktivitas memiliki potensi dampak negatif terhadap keanekaragaman hayati, maka Aktivitas perlu memiliki rencana pengelolaan risiko yang merugikan lingkungan terkait dengan keanekaragaman hayati, sesuai dengan ketentuan yang berlaku.", logic: "OR" },
                { no: "5", text: "Jika Aktivitas memiliki potensi dampak negatif terhadap kebisingan, maka Aktivitas perlu memiliki rencana pengelolaan risiko kebisingan sesuai dengan ketentuan yang berlaku.", logic: "OR" },
                { no: "6", text: "Jika Aktivitas berada di lahan gambut, maka Aktivitas perlu melaksanakan inventarisasi karakteristik Ekosistem Gambut dan wajib memiliki dokumen pemulihan Ekosistem Gambut.", logic: "OR" },
                { no: "7", text: "Jika Aktivitas memiliki potensi timbulnya lepasan radioaktif maka Aktivitas perlu melakukan upaya pengendalian radioaktivitas lingkungan hidup.", logic: "OR" }
              ]
            }
          ]
        }
      ]
    },

    EO4: {
      nama: "Kriteria DNSH EO4",
      tujuan: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
      referensi: "-",
      keterangan: "Prinsip Significant Harm\n• Aktivitas menyebabkan inefisiensi yang signifikan dalam penggunaan bahan atau penggunaan sumber daya alam secara langsung atau tidak langsung dibandingkan dengan praktik dan kondisi yang layak secara teknis dan ekonomis dalam industri tersebut; atau\n• Aktivitas secara signifikan meningkatkan timbulan, pembakaran, atau pembuangan limbah, atau jika pembuangan limbah dapat menyebabkan kerusakan lingkungan yang signifikan dan/atau jangka panjang.\n\nPertimbangan yang digunakan dalam Panduan Umum\n• ASEAN Taxonomy for Sustainable Finance\n• Kebijakan yang berlaku antara lain: SNI ISO 14040:2016 dan SNI ISO 14044:2017 tentang Manajemen lingkungan - Penilaian daur hidup.\n• Pedoman Penyusunan Laporan Penilaian Daur Hidup (LCA) yang diterbitkan oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK) tahun 2021.",
      mekanisme: [
        {
          text: "memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Memiliki PROPER minimal Hijau atau memiliki rencana pelaksanaan prinsip-prinsip ekonomi sirkuler untuk produk, material, proses, atau Aktivitas terkait lainnya. (contoh dokumen berupa Life Cycle Assessment/LCA)", logic: "", subs: [] }
          ]
        }
      ]
    }
  };

  // =============================================================================
  // 4. 13 KARTU ASPEK SOSIAL NON-UMKM (SAMA PERSIS DENGAN WEB OJK)
  // =============================================================================
  const MASTER_SOSIAL_NONUMKM = [
    {
      judul: "Perlindungan dan Penghormatan Hak Asasi Manusia",
      subJudul: "Entitas memiliki kebijakan atau pedoman yang menjunjung tinggi hak asasi manusia di lingkungan kerja.",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan atau pedoman yang menjunjung tinggi hak asasi manusia di lingkungan kerja.",
      mekanisme: [
        {
          text: "Pemenuhan hak-hak dasar bagi pekerja sesuai Konvensi ILO dan atau peraturan perundang-undangan:",
          logic: "",
          kriteria: [
            { no: "1", text: "Kebebasan berserikat dan pengakuan efektif atas hak untuk berunding bersama", logic: "" },
            { no: "2", text: "Penghapusan segala bentuk kerja paksa atau kerja wajib*.", logic: "AND" },
            { no: "3", text: "Penghapusan efektif pekerja anak*", logic: "AND" },
            { no: "4", text: "Penghapusan diskriminasi dalam pekerjaan dan jabatan*.", logic: "AND" },
            { no: "5", text: "Lingkungan kerja yang aman, selamat dan sehat*", logic: "AND" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas menerapkan praktik untuk menjaga kesehatan dan keselamatan kerja.",
      referensi: "-",
      keterangan: "Entitas menerapkan praktik untuk menjaga kesehatan dan keselamatan kerja.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemenuhan Norma Keselamatan dan Kesehatan Kerja (K3) dan/atau Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3).", logic: "" },
            { no: "2", text: "Setiap pekerja yang mengalami Kecelakaan Kerja (KK) atau Penyakit Akibat Kerja (PAK) maupun penyakit lainnya mendapatkan pelayanan kesehatan secara memadai (sesuai ketentuan).", logic: "AND" },
            { no: "3", text: "Setiap pekerja yang menjadi korban KK atau PAK mendapatkan kompensasi berupa pelayanan kesehatan maupun kompensasi lainnya sesuai peraturan perundang-undangan.", logic: "AND" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan kesempatan kerja tanpa diskriminasi.",
      referensi: "-",
      keterangan: "Entitas memberikan kesempatan kerja tanpa diskriminasi.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Memberikan perlindungan dari diskriminasi", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan perlindungan terhadap pekerja perempuan dan tidak mempekerjakan anak di bawah umur",
      referensi: "-",
      keterangan: "Entitas memberikan perlindungan terhadap pekerja perempuan dan tidak mempekerjakan anak di bawah umur",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Memberikan perlindungan pekerja perempuan dan anak.", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memiliki kebijakan yang jelas dan transparan yang memuat langkah-langkah yang diambil untuk mencegah dan menghapuskan segala bentuk eksploitasi, perdagangan manusia, kekerasan dan pelecehan di seluruh aktivitas rantai pasokannya.",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan yang jelas dan transparan yang memuat langkah-langkah yang diambil untuk mencegah dan menghapuskan segala bentuk eksploitasi, perdagangan manusia, kekerasan dan pelecehan di seluruh aktivitas rantai pasokannya.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Setiap pekerja/buruh berhak terbebas dari eksploitasi, perdagangan manusia, kekerasan dan pelecehan di tempat kerja.", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan upah yang layak.",
      referensi: "-",
      keterangan: "Entitas memberikan upah yang layak.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemenuhan sekurang-kurangnya berdasarkan upah minimum.", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memiliki kebijakan yang melindungi hak pekerja (jaminan sosial, kesehatan, hak untuk masuk, istirahat dan cuti).",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan yang melindungi hak pekerja (jaminan sosial, kesehatan, hak untuk masuk, istirahat dan cuti).",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Setiap pekerja/buruh berhak atas jaminan sosial ketenagakerjaan dan kesehatan.", logic: "" },
            { no: "2", text: "Pemberi Kerja wajib mengikutsertakan pekerjanya dalam program Jaminan Sosial.", logic: "AND" },
            { no: "3", text: "Hak pekerja untuk masuk kerja, istirahat dan cuti.", logic: "AND" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan perlakuan yang layak bagi pekerja migran dan tenaga kerja alih daya.",
      referensi: "-",
      keterangan: "Entitas memberikan perlakuan yang layak bagi pekerja migran dan tenaga kerja alih daya.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Perlakuan yang layak bagi pekerja migran, tenaga kerja alih daya (jika relevan).", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memiliki program pengembangan SDM (pelatihan, peningkatan skill, dll).",
      referensi: "-",
      keterangan: "Entitas memiliki program pengembangan SDM (pelatihan, peningkatan skill, dll).",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Memberikan program pengembangan SDM (pelatihan, peningkatan skill, dll).", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Dampak terhadap masyarakat yang tinggal dekat dengan investasi, mencakup penciptaan lapangan kerja, upaya dalam mengurangi kemiskinan (poverty alleviation), dan pertumbuhan ekonomi",
      subJudul: "Entitas telah melakukan PADIATAPA (Persetujuan atas dasar informasi di awal tanpa paksaan).",
      referensi: "-",
      keterangan: "Entitas telah melakukan PADIATAPA (Persetujuan atas dasar informasi di awal tanpa paksaan). PADIATAPA adalah prinsip yang memberikan hak kepada masyarakat untuk menyetujui atau tidak menyetujui proyek yang diusulkan yang dapat mempengaruhi tanah yang mereka miliki, tempati, atau gunakan secara adat.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Setiap potensi bahaya di tempat kerja dilakukan pengendalian risiko sesuai regulasi dan standar.", logic: "" },
            { no: "2", text: "Perusahaan telah melakukan PADIATAPA dan terdokumentasi.", logic: "AND" }
          ]
        }
      ]
    },
    {
      judul: "Dampak terhadap masyarakat yang tinggal dekat dengan investasi, mencakup penciptaan lapangan kerja, upaya dalam mengurangi kemiskinan (poverty alleviation), dan pertumbuhan ekonomi",
      subJudul: "Entitas memberikan kesempatan lapangan kerja kepada masyarakat sekitar.",
      referensi: "-",
      keterangan: "Entitas memberikan kesempatan lapangan kerja kepada masyarakat sekitar.",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Pembukaan lapangan kerja untuk masyarakat sekitar.", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Dampak terhadap masyarakat yang tinggal dekat dengan investasi, mencakup penciptaan lapangan kerja, upaya dalam mengurangi kemiskinan (poverty alleviation), dan pertumbuhan ekonomi",
      subJudul: "Entitas memiliki program pemberdayaan masyarakat dan lingkungan di sekitar proyek investasi",
      referensi: "-",
      keterangan: "Entitas memiliki program pemberdayaan masyarakat dan lingkungan di sekitar proyek investasi",
      mekanisme: [
        {
          text: "Apakah memenuhi kriteria di bawah ini",
          logic: "",
          kriteria: [
            { no: "1", text: "Memiliki program pemberdayaan masyarakat dan lingkungan di sekitar proyek investasi dalam membantu pengentasan kemiskinan dan pemerataan ekonomi.", logic: "" }
          ]
        }
      ]
    },
    {
      judul: "Memiliki rencana just transition",
      subJudul: "Entitas memiliki rencana just transition yang memperhatikan dampak terhadap pemangku kepentingan, terjangkau, dapat diakses, andal, dan dapat diimplementasikan dalam jangka waktu yang wajar",
      referensi: "-",
      keterangan: "Entitas memiliki rencana just transition yang memperhatikan dampak terhadap pemangku kepentingan, terjangkau, dapat diakses, andal, dan dapat diimplementasikan dalam jangka waktu yang wajar",
      mekanisme: [
        {
          text: "Aktivitas Percepatan Pengakhiran Masa Operasional PLTU",
          logic: "",
          kriteria: [
            { no: "1", text: "Bukan Aktivitas Percepatan Pengakhiran Masa Operasional PLTU", logic: "" }
          ]
        },
        {
          text: "Merupakan Aktivitas Percepatan Pengakhiran Masa Operasioal PLTU",
          logic: "OR",
          kriteria: [
            { no: "1", text: "Memberikan pemberitahuan terlebih dahulu terkait agenda penutupan PLTU setidaknya 1 tahun sebelumnya, atau sesuai dengan ketentuan yang berlaku", logic: "" },
            { no: "2", text: "Melakukan konsultasi dan dialog dengan pemangku kepentingan kunci", logic: "AND" },
            { no: "3", text: "Berkomitmen untuk melakukan penilaian dampak lingkungan dan sosial dari penutupan PLTU terhadap para pekerja rantai pasokan langsung, komunitas dan ekosistem", logic: "AND" },
            { no: "4", text: "Melaporkan dan mengembangkan rencana untuk meminimalkan dampak penutupan PLTU terhadap masyarakat", logic: "AND" },
            { no: "5", text: "Mengembangkan rencana transisi pekerja yang akan mendukung peluang pemberian bantuan dan pelatihan ulang (reskilling) bagi pekerja yang terkena dampak;", logic: "AND" },
            { no: "6", text: "Mempertimbangkan aspek keterjangkauan dan aksesibilitas energi pada tahap awal penghentian penggunaan PLTU", logic: "AND" },
            { no: "7", text: "Melakukan remediasi dan reklamasi", logic: "AND" }
          ]
        }
      ]
    }
  ];

  // =============================================================================
  // 5. 10 KARTU ASPEK SOSIAL UMKM
  // =============================================================================
  const KARTU_ASPEK_SOSIAL_UMKM = [
    {
      id: "sos_card_1",
      judul: "Perlindungan dan Penghormatan Hak Asasi Manusia",
      subJudul: "Entitas memiliki kebijakan atau pedoman yang menjunjung tinggi hak asasi manusia di lingkungan kerja.",
      prompt: "Pemenuhan hak-hak dasar bagi pekerja sesuai Konvensi ILO dan atau peraturan perundang-undangan:",
      items: [
        "1. Kebebasan berserikat dan pengakuan efektif atas hak untuk berunding bersama.",
        "2. Penghapusan segala bentuk kerja paksa atau kerja wajib*.",
        "3. Penghapusan efektif pekerja anak*.",
        "4. Penghapusan diskriminasi dalam pekerjaan dan jabatan*.",
        "5. Lingkungan kerja yang aman, selamat dan sehat*."
      ],
      divider: "dan",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan atau pedoman yang menjunjung tinggi hak asasi manusia di lingkungan kerja."
    },
    {
      id: "sos_card_2",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas menerapkan praktik untuk menjaga kesehatan dan keselamatan kerja.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: [
        "1. Pemenuhan Norma Keselamatan dan Kesehatan Kerja (K3) dan/atau Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3).",
        "2. Setiap pekerja yang mengalami Kecelakaan Kerja (KK) atau Penyakit Akibat Kerja (PAK) maupun penyakit lainnya mendapatkan pelayanan kesehatan secara memadai (sesuai ketentuan).",
        "3. Setiap pekerja yang menjadi korban KK atau PAK mendapatkan kompensasi berupa pelayanan kesehatan maupun kompensasi lainnya sesuai peraturan perundang-undangan."
      ],
      divider: "dan",
      referensi: "-",
      keterangan: "Entitas menerapkan praktik untuk menjaga kesehatan dan keselamatan kerja."
    },
    {
      id: "sos_card_3",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan kesempatan kerja tanpa diskriminasi.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Memberikan perlindungan dari diskriminasi"],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memberikan kesempatan kerja tanpa diskriminasi."
    },
    {
      id: "sos_card_4",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan perlindungan terhadap pekerja perempuan dan tidak mempekerjakan anak di bawah umur.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Memberikan perlindungan pekerja perempuan dan anak."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memberikan perlindungan terhadap pekerja perempuan dan tidak mempekerjakan anak di bawah umur."
    },
    {
      id: "sos_card_5",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas mencegah dan menghapuskan segala bentuk eksploitasi dan kekerasan di tempat kerja.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Setiap pekerja/buruh berhak terbebas dari eksploitasi, perdagangan manusia, kekerasan dan pelecehan di tempat kerja."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan yang jelas dan transparan untuk mencegah eksploitasi, perdagangan manusia, kekerasan dan pelecehan."
    },
    {
      id: "sos_card_6",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan upah yang layak.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Entitas memberikan upah yang layak (UMKM sesuai Undang-Undang Cipta Kerja terbaru atau perubahannya, dengan dua pendekatan yaitu minimal 50% dari rata-rata konsumsi masyarakat provinsi dan 25% di atas garis kemiskinan provinsi)."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memberikan upah yang layak."
    },
    {
      id: "sos_card_7",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memiliki kebijakan yang melindungi hak pekerja (jaminan sosial, kesehatan, hak untuk masuk, istirahat dan cuti).",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: [
        "1. Setiap pekerja/buruh berhak atas jaminan sosial ketenagakerjaan dan kesehatan.",
        "2. Pemberi Kerja wajib mengikutsertakan pekerjanya dalam program Jaminan Sosial.",
        "3. Hak pekerja untuk masuk kerja, istirahat dan cuti."
      ],
      divider: "dan",
      referensi: "-",
      keterangan: "Entitas memiliki kebijakan yang melindungi hak pekerja (jaminan sosial, kesehatan, hak untuk masuk, istirahat dan cuti)."
    },
    {
      id: "sos_card_8",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memberikan perlakuan yang layak bagi pekerja migran dan tenaga kerja alih daya (jika relevan).",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Perlakuan yang layak bagi pekerja migran, tenaga kerja alih daya (jika relevan)."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memberikan perlakuan yang layak bagi pekerja migran dan tenaga kerja alih daya."
    },
    {
      id: "sos_card_9",
      judul: "Ketenagakerjaan mencakup pekerjaan layak, pencegahan kerja paksa, perlindungan terhadap pekerja perempuan dan anak, serta pengembangan sumber daya manusia",
      subJudul: "Entitas memiliki program pengembangan SDM (pelatihan, peningkatan skill, dll).",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Memberikan program pengembangan SDM (pelatihan, peningkatan skill, dll)."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memiliki program pengembangan SDM (pelatihan, peningkatan skill, dll)."
    },
    {
      id: "sos_card_10",
      judul: "Dampak terhadap masyarakat yang tinggal dekat dengan investasi, mencakup penciptaan lapangan kerja, upaya dalam mengurangi kemiskinan (poverty alleviation), dan pertumbuhan ekonomi",
      subJudul: "Entitas membuka peluang penyerapan tenaga kerja lokal sekitar.",
      prompt: "Apakah memenuhi kriteria di bawah ini",
      items: ["1. Pembukaan lapangan kerja untuk masyarakat sekitar."],
      divider: "",
      referensi: "-",
      keterangan: "Entitas memberikan kesempatan lapangan kerja kepada masyarakat sekitar."
    }
  ];

  // =============================================================================
  // 6. OBJEK BERSAMA KBLI IDENTIK DI EXCEL OJK (100% TANPA DISINGKAT)
  // =============================================================================
  const SHARED_IC_62019_62029 = {
    sektor: "Informasi dan Komunikasi (IC)",
    nama: "Aktivitas Pemrograman dan Konsultasi Komputer",
    eoSupport: ["EO1", "EO2", "EO3", "EO4"],
    EO1: {
      judul: "Aktivitas Pemrograman / Konsultasi Komputer",
      subJudul: "Mitigasi Perubahan Iklim",
      referensi: "33,39,38,37",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemrograman komputer dan perangkat lunak untuk pengurangan emisi GRK dianggap berkontribusi secara substansial terhadap upaya mitigasi perubahan iklim melalui pengurangan GHG lifecycle emission dalam proses yang emisinya didorong/dipengaruhi oleh Aktivitas ini;", logic: "", subs: [] },
            { no: "2", text: "Aktivitas ini dapat mendorong Aktivitas di focus sector agar konsisten dengan standar dan pedoman mitigasi perubahan iklim, seperti perhitungan emisi GRK menggunakan seri ISO 14064, serta kebijakan dan peraturan iklim nasional dan internasional yang relevan.", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: []
    },
    EO2: {
      judul: "Aktivitas Pemrograman / Konsultasi Komputer",
      subJudul: "Adaptasi Perubahan Iklim",
      referensi: "33",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemrograman komputer dan perangkat lunak komputer dianggap berkontribusi secara substansial terhadap adaptasi dan ketahanan perubahan iklim;", logic: "", subs: [] },
            { no: "2", text: "Aktivitas ini dapat mendorong Aktivitas di focus sector untuk menerapkan metodologi dan data yang konsisten dengan persyaratan Climate Risk and Vulnerability Assessment (CRVA) sebagaimana dijelaskan dalam Lampiran 12.", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: []
    },
    EO3: {
      judul: "Aktivitas Pemrograman / Konsultasi Komputer",
      subJudul: "Perlindungan Ekosistem dan Keanekaragaman Hayati",
      referensi: "33,36",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemrograman komputer dan perangkat lunak komputer dianggap memberikan kontribusi substansial terhadap konservasi keanekaragaman hayati;", logic: "", subs: [] },
            { no: "2", text: "Aktivitas ini mendorong Aktivitas di focus sector untuk menerapkan metodologi dan data yang konsisten dengan standar dan pedoman yang bertujuan untuk konservasi keanekaragaman hayati dan pengelolaan ekosistem. Sebagai contoh, ISO 14001 tentang sistem manajemen lingkungan, pedoman Convention on Biological Diversity (CBD), kriteria Red List IUCN, dan Strategi dan Rencana Aksi Keanekaragaman Hayati Indonesia (Indonesian Biodiversity Strategy and Action Plan) 2025-2045 Bappenas.", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: []
    },
    EO4: {
      judul: "Aktivitas Pemrograman / Konsultasi Komputer",
      subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
      referensi: "33,35",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Pemrograman komputer dan perangkat lunak komputer dianggap memberikan kontribusi besar terhadap efisiensi sumber daya dan sirkularitas;", logic: "", subs: [] },
            { no: "2", text: "Aktivitas ini mendorong Aktivitas di focus sector untuk menerapkan metodologi dan data yang konsisten dengan persyaratan penilaian siklus hidup, analisis aliran material, dan strategi efisiensi sumber daya, serta ilmu terbaik yang tersedia untuk transisi ekonomi sirkular dan metodologi terkait sejalan dengan publikasi ilmiah terbaru yang telah melalui proses peer-review dan praktik terbaik internasional.", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: []
    }
  };

  const SHARED_ELEKTRONIK_26490_26511 = {
    sektor: "Manufaktur (IPPU)",
    nama: "Industri Peralatan Elektronik dan Alat Ukur",
    eoSupport: ["EO4"],
    EO4: {
      judul: "Industri Peralatan Elektronik / Alat Ukur dan Uji",
      subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
      referensi: "33",
      keterangan: "Catatan Aktivitas:\n1. “Extended Producer Responsibility (EPR)” adalah pendekatan kebijakan yang menetapkan tanggung jawab produsen atas pengelolaan produk setelah masa pakainya berakhir.",
      pertanyaanHijau: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2) ATAU (3).",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan plastik, logam, dan bahan baku kritis yang digunakan dalam proses produksi setidaknya 70% berasal dari bahan daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau sumber terbarukan.", logic: "", subs: [] },
            { no: "2", text: "Desain produk dan kemasan memungkinkan untuk digunakan kembali atau didaur ulang secara praktis, yang dibuktikan dengan kepatuhan terhadap sistem nasional atau internasional yang sesuai dengan skema dan/atau kerangka kerja yang diakui secara global, misalnya ISO EN 13432 atau program Extended Producer Responsibility (EPR).", logic: "OR", subs: [] },
            { no: "3", text: "Proses produksi peralatan listrik dan elektronik menunjukkan pengurangan limbah yang tidak perlu/avoidable waste (misalnya: potongan sisa, komponen yang salah rakit, bahan yang tidak sesuai spesifikasi) setidaknya 90% dan limbah tersebut dialihkan dari tempat pembuangan akhir (landfill).", logic: "OR", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2).",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan plastik, logam, dan bahan baku kritis yang digunakan dalam proses produksi lebih besar atau sama dengan 40% berasal dari bahan daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau sumber terbarukan.", logic: "", subs: [] },
            { no: "2", text: "Proses produksi peralatan listrik dan elektronik menunjukkan pengurangan limbah yang tidak perlu / avoidable waste (misalnya: potongan sisa, komponen yang salah rakit, bahan yang tidak sesuai spesifikasi) lebih besar atau sama dengan 60% dan limbah tersebut dialihkan dari tempat pembuangan akhir (landfill).", logic: "OR", subs: [] }
          ]
        }
      ]
    }
  };

  const SHARED_PANGAN_10611_10731_10740 = {
    sektor: "Manufaktur (IPPU)",
    nama: "Industri Pengolahan Pangan (Gandum, Kakao, Mie/Makaroni)",
    eoSupport: ["EO3", "EO4"],
    EO3: {
      judul: "Industri Pengolahan Pangan",
      subJudul: "Perlindungan Ekosistem dan Keanekaragaman Hayati",
      referensi: "33",
      keterangan: "Catatan Aktivitas:\n“Berdasarkan berat” mengacu pada massa bahan baku utama, tidak termasuk air dan garam yang ditambahkan.",
      pertanyaanHijau: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2).",
          logic: "",
          kriteria: [
            {
              no: "1",
              text: "Sumber bahan baku sama dengan atau lebih dari 95% (berdasarkan berat) berasal dari metode pertanian atau produksi yang mendukung keanekaragaman hayati dan mengurangi tekanan pada ekosistem dan penggunaan lahan, dengan memenuhi kriteria berikut:",
              logic: "",
              subs: [
                { no: "1", text: "Untuk bahan berbasis tumbuhan, praktik produksinya sesuai dengan TSC klasifikasi “Hijau” berdasarkan Aktivitas Pertanian Tanaman Semusim dan Tahunan sektor AFF dalam TKBI (cross-referencing);", logic: "" },
                { no: "2", text: "Untuk bahan berbasis hewan, praktik produksinya sesuai dengan TSC klasifikasi “Hijau” berdasarkan Aktivitas Peternakan dan/atau Aktivitas Perikanan Tangkap dan/atau Aktivitas Perikanan Budidaya sektor AFF dalam TKBI (cross-referencing).", logic: "OR" }
              ]
            },
            { no: "2", text: "Bahan baku berdampak tinggi (high-impact feedstock) sama dengan atau lebih dari 70% (berdasarkan berat) wajib menggunakan bahan alternatif yang menunjukkan tekanan yang lebih rendah pada keanekaragaman hayati, berdasarkan lifecycle environmental performance.", logic: "OR", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2).",
          logic: "",
          kriteria: [
            {
              no: "1",
              text: "Sumber bahan baku sama dengan atau lebih dari 95% (berdasarkan berat) berasal dari metode pertanian atau produksi yang mendukung keanekaragaman hayati dan mengurangi tekanan pada ekosistem dan penggunaan lahan, dengan memenuhi kriteria berikut:",
              logic: "",
              subs: [
                { no: "1", text: "Untuk bahan berbasis tumbuhan, praktik produksinya sesuai dengan TSC klasifikasi “Transisi” berdasarkan Aktivitas Pertanian Tanaman Semusim dan Tahunan sektor AFF dalam TKBI (cross-referencing);", logic: "" },
                { no: "2", text: "Untuk bahan berbasis hewan, praktik produksinya sesuai dengan TSC klasifikasi “Transisi” berdasarkan Aktivitas Peternakan dan/atau Aktivitas Perikanan Tangkap dan/atau Aktivitas Perikanan Budidaya sektor AFF dalam TKBI (cross-referencing).", logic: "OR" }
              ]
            },
            { no: "2", text: "Bahan baku berdampak tinggi (high-impact feedstock) sama dengan atau lebih dari 40% (berdasarkan berat) wajib menggunakan bahan alternatif yang menunjukkan tekanan yang lebih rendah pada keanekaragaman hayati, berdasarkan lifecycle environmental performance.", logic: "OR", subs: [] }
          ]
        }
      ]
    },
    EO4: {
      judul: "Industri Pengolahan Pangan",
      subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
      referensi: "33",
      keterangan: "Catatan Aktivitas:\n“Berdasarkan berat” mengacu pada massa bahan baku utama, tidak termasuk air dan garam yang ditambahkan.",
      pertanyaanHijau: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2) ATAU (3) ATAU (4).",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan baku sama dengan atau lebih dari 70% (berdasarkan berat) dari bahan sekunder/non-primary inputs (contohnya: kemasan, bahan tambahan pangan, atau bahan penunjang lainnya) yang digunakan dalam proses manufaktur berasal dari bahan daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau bahan dari sumber terbarukan.", logic: "", subs: [] },
            { no: "2", text: "Desain produk dan kemasan memungkinkan penggunaan kembali atau daur ulang praktis, ditunjukkan dengan kepatuhan terhadap sistem nasional atau internasional yang selaras dengan skema dan/atau kerangka kerja yang diakui secara global, misalnya: ISO EN 13432 atau program Extended Producer Responsibility (EPR).", logic: "OR", subs: [] },
            { no: "3", text: "Proses pengolahan produk menunjukkan pengurangan limbah makanan yang tidak perlu (avoidable food waste) lebih besar atau sama dengan 30% (berdasarkan berat) dibandingkan dengan baseline yang telah ditentukan sebelumnya.", logic: "OR", subs: [] },
            { no: "4", text: "Produk sampingan (by-products) dan limbah produksi lebih dari atau sama dengan 50% (berdasarkan berat) dialihkan dari tempat pembuangan sampah atau pembakaran tanpa konversi energi, dan dimanfaatkan kembali menjadi produk baru (misalnya: pakan ternak, pupuk, kompos, bioenergi/bahan bakar, dll.).", logic: "OR", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2).",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan baku lebih dari atau sama dengan 40% (berdasarkan berat) dari bahan sekunder/non-primary inputs (contohnya: kemasan, bahan tambahan pangan, atau bahan penunjang lainnya) yang digunakan dalam proses manufaktur berasal dari sumber daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau terbarukan.", logic: "", subs: [] },
            { no: "2", text: "Produk sampingan dan limbah produksi lebih dari atau sama dengan 30% (berdasarkan berat) dialihkan dari tempat pembuangan sampah atau pembakaran tanpa konversi energi, dan dimanfaatkan kembali menjadi produk baru (misalnya: pakan ternak, pupuk, kompos, bioenergi/bahan bakar, dll.).", logic: "OR", subs: [] }
          ]
        }
      ]
    }
  };

  const SHARED_TEKSTIL_13122_13923 = {
    sektor: "Manufaktur (IPPU)",
    nama: "Industri Tekstil (Kain Tenun Ikat / Bantal dan Sejenisnya)",
    eoSupport: ["EO1", "EO4"],
    EO1: {
      judul: "Industri Kain Tenun Ikat / Bantal dan Sejenisnya",
      subJudul: "Mitigasi Perubahan Iklim",
      referensi: "-",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Aktivitas memenuhi kriteria (1) ATAU (2):",
          logic: "",
          kriteria: [
            { no: "1", text: "Fasilitas menggunakan dan memanfaatkan energi terbarukan di dalam area fasilitas, seperti panel surya atap atau sumber energi terbarukan lainnya, untuk memenuhi >=25% dari konsumsi energi total fasilitas", logic: "", subs: [] },
            {
              no: "2",
              text: "Menggunakan:",
              logic: "OR",
              subs: [
                { no: "1", text: "Bahan baku alami (misalnya: kapas, wol, dll.) harus bersumber dari sistem produksi yang sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Pertanian Tanaman Semusim dan Tahunan dan/atau Aktivitas Peternakan dan/atau Aktivitas Hutan Tanaman (Plantation Forestry) sektor AFF dalam TKBI (cross-referencing)", logic: "" },
                { no: "2", text: "Bahan baku serat sintetis (misalnya: poliester, rayon, dll) harus bersumber dari sistem produksi yang sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Industri Kimia Dasar Organik dan Anorganik sektor Manufaktur dalam TKBI (cross-referencing)", logic: "OR" },
                { no: "3", text: "Bahan baku serat sintetis dan artifisial yang memenuhi standar internasional seperti Global Recycle Standard, Recycle Claim Standard, EU Ecolabel, OEKO-TEX, Global Organic Textile Standard, dan OK biodegradable", logic: "OR" }
              ]
            }
          ]
        },
        {
          text: "Aktivitas harus memenuhi kriteria (1) DAN (2)",
          logic: "AND",
          kriteria: [
            { no: "1", text: "Limbah kain tidak boleh dimanfaatkan sebagai bahan bakar alternatif di area fasilitas untuk tujuan pembangkitan energi dan/atau panas", logic: "", subs: [] },
            { no: "2", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi >=4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: [
        {
          text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria (1) ATAU (2)",
          logic: "",
          kriteria: [
            {
              no: "1",
              text: "Memiliki Transition Plan yang:",
              logic: "",
              subs: [
                { no: "1", text: "Selaras dengan komitmen Paris Agreement atau target pengurangan net-zero GHG emissions yang kredibel, mengikuti kerangka kerja yang diakui secara internasional untuk konsistensi dan akuntabilitas, serta mencakup peralihan ke teknologi proses rendah karbon;", logic: "" },
                { no: "2", text: "Selaras dengan pemenuhan target Nationally Determined Contribution (NDC) Indonesia", logic: "OR" }
              ]
            },
            { no: "2", text: "Fasilitas menggunakan dan memanfaatkan energi terbarukan di dalam area fasilitas, seperti panel surya atap atau sumber energi terbarukan lainnya, untuk memenuhi >=5% dari total konsumsi energi fasilitas", logic: "OR", subs: [] }
          ]
        },
        {
          text: "Aktivitas memenuhi kriteria (1) DAN (2)",
          logic: "AND",
          kriteria: [
            { no: "1", text: "Limbah kain tidak boleh dimanfaatkan sebagai bahan bakar alternatif di area fasilitas untuk tujuan pembangkitan energi dan/atau panas", logic: "", subs: [] },
            { no: "2", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi =>4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "AND", subs: [] }
          ]
        }
      ]
    },
    EO4: {
      judul: "Industri Kain Tenun Ikat / Bantal dan Sejenisnya",
      subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
      referensi: "-",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Aktivitas memenuhi kriteria (1) ATAU (2) ATAU (3):",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan kain yang digunakan dalam proses produksi >=15% berasal dari bahan daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau bahan dari sumber terbarukan", logic: "", subs: [] },
            { no: "2", text: "Desain produk dan kemasan memungkinkan untuk digunakan kembali atau didaur ulang secara praktis, yang dibuktikan dengan kepatuhan terhadap sistem nasional atau internasional yang sesuai dengan skema dan/atau kerangka kerja yang diakui secara global, misalnya ISO EN 13432 atau program Extended Producer Responsibility (EPR)", logic: "OR", subs: [] },
            { no: "3", text: "Proses produksi tekstil menunjukkan pengurangan limbah kain yang tidak perlu (avoidable fabric waste) sebesar >=30% dibandingkan dengan baseline yang telah ditentukan", logic: "OR", subs: [] }
          ]
        },
        {
          text: "Aktivitas memenuhi kriteria berikut:",
          logic: "AND",
          kriteria: [
            { no: "1", text: "Limbah kain tidak boleh dimanfaatkan sebagai bahan bakar alternatif di area fasilitas untuk tujuan pembangkitan energi dan/atau panas", logic: "", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: [
        {
          text: "Aktivitas memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Bahan baku yang digunakan dalam proses produksi >=2,5% berasal dari bahan daur ulang, limbah produksi yang dimanfaatkan kembali (recovered), atau bahan dari sumber terbarukan", logic: "", subs: [] }
          ]
        },
        {
          text: "Aktivitas memenuhi kriteria berikut:",
          logic: "AND",
          kriteria: [
            { no: "1", text: "Limbah kain tidak boleh dimanfaatkan sebagai bahan bakar alternatif di area fasilitas untuk tujuan pembangkitan energi dan/atau panas", logic: "", subs: [] }
          ]
        }
      ]
    }
  };

  // =============================================================================
  // 7. BANK UTAMA 23 KBLI PRIORITAS (100% VERBATIM TANPA ADA YANG DISINGKAT)
  // =============================================================================
  const TSC_PRIORITAS_KBLI = {
    "62019": SHARED_IC_62019_62029,
    "62029": SHARED_IC_62019_62029,
    "26490": SHARED_ELEKTRONIK_26490_26511,
    "26511": SHARED_ELEKTRONIK_26490_26511,
    "10611": SHARED_PANGAN_10611_10731_10740,
    "10731": SHARED_PANGAN_10611_10731_10740,
    "10740": SHARED_PANGAN_10611_10731_10740,
    "13122": SHARED_TEKSTIL_13122_13923,
    "13923": SHARED_TEKSTIL_13122_13923,

    // REVISI 1: KBLI 70209 (Format poin a. s/d j. turun ke bawah per baris)
    "70209": {
      sektor: "Profesional, Ilmiah, dan Teknis (PST)",
      nama: "Aktivitas Konsultasi Manajemen Lainnya",
      eoSupport: ["EO1", "EO2", "EO3", "EO4"],
      EO1: {
        judul: "Aktivitas Konsultasi Manajemen Lainnya",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "33,40,39,38,37",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Penyediaan atau pengadaan kegiatan konsultasi yang mendorong bisnis atau organisasi layanan terkait lingkungan termasuk penyedia layanan di seluruh rantai nilai ESG, termasuk konsultasi, penilaian risiko dan dampak, pelaporan, jasa jaminan, dan pengembangan alat penilaian kinerja (rating tools). Jasa yang termasuk dalam Aktivitas ini dapat mencakup, tetapi tidak terbatas pada:\na.  Analisa jejak karbon dan strategi pengurangan karbon\nb.  Audit dan optimasi efisiensi energi\nc.  Integrasi dan perencanaan energi terbarukan\nd.  Solusi transportasi berkelanjutan\ne.  Desain dan sertifikasi bangunan hijau\nf.  Penasihat kebijakan mitigasi perubahan iklim\ng.  Pengembangan proyek pengurangan emisi\nh.  Pengembangan strategi iklim perusahaan\ni.  Konsultasi pengimbangan dan perdagangan karbon\nj.  Manajemen rantai pasok berkelanjutan.", logic: "", subs: [] },
              { no: "2", text: "Aktivitas pendukung ini mendorong pengembangan, penerapan, perekayasaan, pengoperasian, dan penggunaan informasi, teknologi, atau kapasitas secara efektif untuk pengurangan emisi GRK.", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas pendukung ini mendorong Aktivitas di focus sector agar konsisten dengan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "praktik terbaik dan panduan yang tersedia tentang mitigasi perubahan iklim, sejalan dengan publikasi ilmiah terbaru yang telah melalui proses peer-review, praktik terbaik internasional, atau basis data yang tersedia;", logic: "" },
                  { no: "2", text: "standar dan pedoman tentang mitigasi perubahan iklim, seperti perhitungan emisi GRK menggunakan seri ISO 14064, serta kebijakan dan peraturan iklim nasional dan internasional yang relevan", logic: "AND" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO2: {
        judul: "Aktivitas Konsultasi Manajemen Lainnya",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "33,40",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi kriteria (1) DAN (2) DAN (3).",
            logic: "",
            kriteria: [
              { no: "1", text: "Penyediaan atau pengadaan kegiatan konsultasi yang mendorong bisnis atau organisasi layanan terkait lingkungan termasuk penyedia layanan di seluruh rantai nilai ESG, termasuk konsultasi, penilaian risiko dan dampak, pelaporan, jasa jaminan, dan pengembangan alat penilaian kinerja (rating tools). Jasa yang termasuk dalam Aktivitas ini dapat mencakup, tetapi tidak terbatas pada:\na.  Penilaian risiko dan kerentanan iklim\nb.  Perencanaan dan implementasi ketahanan\nc.  Pengelolaan dan adaptasi sumber daya air\nd.  Konsultasi ketahanan infrastrukur dan lingkungan yang terbangun\ne.  Pengembangan strategi adaptasi berbasis ekosistem\nf.  Konsultasi kebijakan dan tata kelola adaptasi iklim\ng.  Konsultasi strategi adaptasi iklim\nh.  Konsultasi perencanaan kelangsungan bisnis dan pemulihan bencana\ni.  Penasihat strategi pembiayaan dan investasi adaptasi iklim\nj.  Pertanian cerdas iklim dan ketahanan pangan.", logic: "", subs: [] },
              { no: "2", text: "Aktivitas pendukung ini mendorong pengembangan, penerapan, perekayasaan, pengoperasian, dan penggunaan informasi, teknologi, atau kapasitas secara efektif untuk adaptasi dan ketahanan iklim;", logic: "AND", subs: [] },
              { no: "3", text: "Aktivitas pendukung ini mendorong Aktivitas di focus sector agar konsisten dengan persyaratan penilaian risiko dan kerentanan iklim (Climate Risk and Vulnerability Assessment/CRVA) seperti yang dijelaskan dalam Lampiran 12.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO3: {
        judul: "Aktivitas Konsultasi Manajemen Lainnya",
        subJudul: "Perlindungan Ekosistem dan Keanekaragaman Hayati",
        referensi: "33,40,36",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Penyediaan atau pengadaan kegiatan konsultan yang memungkinkan bisnis atau organisasi untuk layanan terkait lingkungan termasuk penyedia layanan di seluruh rantai nilai ESG, termasuk konsultasi, penilaian risiko dan dampak, pelaporan, jasa jaminan, dan pengembangan alat penilaian kinerja (rating tools). Jasa yang termasuk dalam Aktivitas ini dapat mencakup, tetapi tidak terbatas pada:\na.  Analisis mengenai dampak lingkungan dan sosial (AMDAL)\nb.  Penilaian keanekaragaman hayati dan jasa ekosistem\nc.  Perencanaan restorasi dan konservasi habitat\nd.  Pengelolaan satwa liar dan spesies terancam punah\ne.  Pengendalian dan pengelolaan spesies invasif\nf.  Penggunaan lahan dan perencanaan lanskap berkelanjutan\ng.  Pemantauan dan pelaporan ekologis\nh.  Pengelolaan dan konservasi sumber daya alam\ni.  Strategi mitigasi dampak lingkungan\nj.  Pengelolaan ekosistem laut dan pesisir;", logic: "", subs: [] },
              { no: "2", text: "Aktivitas pendukung ini mendorong pengembangan, penerapan, perekayasaan, pengoperasian, dan penggunaan informasi, teknologi, atau kapasitas secara efektif untuk perlindungan ekosistem dan keanekaragaman hayati yang sehat;", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas pendukung ini mendorong Aktivitas di focus sector agar konsisten dengan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "praktik terbaik dan panduan yang tersedia untuk konservasi keanekaragaman hayati dan pengelolaan ekosistem, sejalan dengan publikasi ilmiah terbaru yang telah melalui proses peer-review, praktik terbaik internasional, atau basis data yang tersedia;", logic: "" },
                  { no: "2", text: "standar dan pedoman tentang konservasi keanekaragaman hayati dan pengelolaan ekosistem. Sebagai contoh, ISO14001 tentang sistem manajemen lingkungan, pedoman CBD, kriteria Red List IUCN Strategi dan Rencana Aksi Keanekaragaman Hayati Indonesia (Indonesian Biodiversity Strategy and Action Plan/IBSAP) 2025-2045 Bappenas.", logic: "AND" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO4: {
        judul: "Aktivitas Konsultasi Manajemen Lainnya",
        subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
        referensi: "33,40,35",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Penyediaan atau pengadaan kegiatan konsultasi yang mendorong bisnis atau organisasi layanan terkait lingkungan termasuk penyedia layanan di seluruh rantai nilai ESG, termasuk konsultasi, penilaian risiko dan dampak, pelaporan, jasa jaminan, dan pengembangan alat penilaian kinerja (rating tools). Jasa yang termasuk dalam Aktivitas ini dapat mencakup, tetapi tidak terbatas pada:\na.  Analisis dan pemetaan aliran material (material flow analysis/MFA)\nb.  Karakterisasi dan penilaian valorisasi aliran limbah\nc.  Desain dan pengembangan perencanaan produk sirkular\nd.  Jasa penilaian siklus hidup (life cycle assessment/LCA)\ne.  Simbiosis industri dan fasilitasi pertukaran produk sampingan\nf.  Sumber bahan berkelanjutan dan optimalisasi rantai pasok\ng.  Audit efisiensi sumber daya dan pemantauan kinerja\nh.  Pengembangan dan perencanaan infrastruktur ekonomi sirkular\ni.  Implementasi dan strategi mitigasi ekonomi sirkular\nj.  Tanggung jawab produsen yang diperluas (extended producer responsibility/EPR) dan perencanaan pengelolaan produk;", logic: "", subs: [] },
              { no: "2", text: "Aktivitas pendukung ini mendorong pengembangan, penerapan, perekayasaan, pengoperasian, dan penggunaan informasi, teknologi, atau kontribusi kapasitas secara efektif untuk ketahanan sumber daya dan upaya transisi menuju ekonomi sirkular;", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas pendukung ini mendorong Aktivitas di focus sector agar konsisten dengan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "praktik terbaik dan panduan yang tersedia tentang penilaian siklus hidup, analisa aliran material, efisiensi sumber daya dan transisi ekonomi sirkular;", logic: "" },
                  { no: "2", text: "publikasi ilmiah terbaru yang terlah melalui proses peer-review, praktik terbaik internasional, atau basis data yang tersedia;", logic: "AND" }
                ]
              },
              { no: "4", text: "Standar dan pedoman tentang manajemen sumber daya, ekonomi sirkular, dan pengelolaan limbah. Sebagai contoh, ISO 14040, ISO 14044, ISO 14001, ISO 59020 dan prinsip-prinsip Ellen MacArthur Foundation untuk ekonomi sirkular, Peta Jalan dan Rencana Aksi Nasional Ekonomi Sirkular Indonesia 2025-2045 Bappenas, dan Pedoman Penyusunan Laporan Penilaian Daur Hidup (LCA) KLHK.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // REVISI 3: KBLI 49431 (EO2 Adaptasi dibuat 2 poin di dalam kotak no 2 + blok teks ke-2 di luar)
    "49431": {
      sektor: "Pengangkutan dan Pergudangan (T&S)",
      nama: "Angkutan Bermotor Untuk Barang Umum",
      eoSupport: ["EO1", "EO2"],
      EO1: {
        judul: "Angkutan Bermotor Untuk Barang Umum",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,20,16,21,19",
        keterangan: "Keterangan:\nN1: kendaraan bermotor yang digunakan untuk angkutan barang dan mempunyai jumlah berat yang diperbolehkan (Gross Vehicle Weight/GVW) tidak lebih dari 3,5 (tiga koma lima) ton.\nN2: kendaraan bermotor yang digunakan untuk angkutan barang dan mempunyai jumlah berat yang diperbolehkan (GVW) lebih dari 3,5 (tiga koma lima) ton tetapi tidak lebih dari 12 (dua belas) ton.\nN3: kendaraan bermotor yang digunakan untuk angkutan barang dan mempunyai jumlah berat yang diperbolehkan (GVW) lebih dari 12 (dua belas) ton.",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi salah satu kriteria berikut ini:",
            logic: "",
            kriteria: [
              { no: "1", text: "Kendaraan kategori N1 zero direct tailpipe CO2 emissions;", logic: "", subs: [] },
              { no: "2", text: "Kendaraan kategori N2 dan N3 dengan massa muatan maksimum secara teknis tidak melebihi 7,5 ton “zero-emission heavy-duty vehicles”;", logic: "OR", subs: [] },
              {
                no: "3",
                text: "Kendaraan kategori N2 dan N3 dengan massa muatan maksimum secara teknis melebihi 7,5 ton adalah salah satu dari yang berikut ini:",
                logic: "OR",
                subs: [
                  { no: "1", text: "Kendaraan termasuk zero-emission heavy-duty vehicles;", logic: "" },
                  { no: "2", text: "Apabila secara teknologi dan ekonomi tidak memungkinkan/layak untuk memenuhi kriteria pada huruf i, maka sampai dengan tanggal 31 Desember 2030 memiliki direct tailpipe CO2 emissions <21 gCO2/t-km;", logic: "OR" }
                ]
              }
            ]
          },
          {
            text: "Aktivitas tersebut memenuhi kriteria berikut:",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Kendaraan tidak didedikasikan untuk mengangkut bahan bakar fosil.", logic: "", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memenuhi kriteria berikut ini:",
            logic: "",
            kriteria: [
              { no: "1", text: "Kendaraan dari kategori N2 dan N3 dengan massa muatan maksimum secara teknis melebihi 7,5 ton: apabila secara teknologi dan ekonomi tidak memungkinkan/layak untuk zero direct tailpipe CO2 emissions, hingga 31 Desember 2030, memiliki direct tailpipe CO2 emissions <42 gCO2e/t-km, dan 1 Januari 2031 dan seterusnya <21 gCO2e/t-km;", logic: "", subs: [] },
              { no: "2", text: "Kendaraan tidak didedikasikan untuk mengangkut bahan bakar fosil.", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO2: {
        judul: "Angkutan Bermotor Untuk Barang Umum",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang paling penting dan material untuk aktivitas tersebut, yang dapat ditunjukkan dengan Climate Risk And Vulnerability Assessment (CRVA);", logic: "", subs: [] },
              {
                no: "2",
                text: "Aktivitas harus dapat menunjukkan bahwa diperlukan untuk penyediaan keamanan transportasi bagi konsumen dengan mempertimbangkan kemungkinan gangguan terkait iklim di masa depan. Dalam konteks ini, contoh-contoh berikut dapat dianggap relevan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Pengoperasian peralatan yang telah dibangun atau ditingkatkan (upgrade) agar lebih mampu beroperasi dalam kondisi banjir, badai, atau suhu yang lebih tinggi;", logic: "" },
                  { no: "2", text: "Pengoperasian peralatan pemantauan dan kontrol atau sistem TI terkait lainnya untuk mengoperasikan atau memelihara peralatan jika terjadi banjir, kondisi badai, atau suhu yang lebih tinggi;", logic: "OR" }
                ]
              }
            ]
          },
          {
            text: "Pengoperasian fasilitas atau peralatan untuk memberikan dukungan, penyimpanan, atau pelatihan yang terkait dengan pengoperasian, pemeliharaan, atau perbaikan peralatan dalam skenario banjir, kondisi badai, atau suhu yang lebih tinggi",
            logic: "OR",
            kriteria: []
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KBLI 50131 (T&S - Angkutan Laut Dalam Negeri Liner untuk Barang)
    "50131": {
      sektor: "Pengangkutan dan Pergudangan (T&S)",
      nama: "Angkutan Laut Dalam Negeri Liner untuk Barang",
      eoSupport: ["EO2"],
      EO2: {
        judul: "Angkutan laut atau pesisir mengangkut barang / Retrofit",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang paling penting dan material untuk aktivitas tersebut, yang dapat ditunjukkan dengan Climate Risk And Vulnerability Assessment (CRVA);", logic: "", subs: [] },
              {
                no: "2",
                text: "Aktivitas harus dapat menunjukkan bahwa diperlukan untuk penyediaan keamanan transportasi bagi konsumen dengan mempertimbangkan kemungkinan gangguan terkait iklim di masa depan. Dalam konteks ini, contoh-contoh berikut dapat dianggap relevan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Pengoperasian peralatan yang telah dibangun atau ditingkatkan (upgrade) agar lebih mampu beroperasi dalam kondisi banjir, badai, atau suhu yang lebih tinggi;", logic: "" },
                  { no: "2", text: "Pengoperasian peralatan pemantauan dan kontrol atau sistem TI terkait lainnya untuk mengoperasikan atau memelihara peralatan jika terjadi banjir, kondisi badai, atau suhu yang lebih tinggi;", logic: "OR" },
                  { no: "3", text: "Pengoperasian fasilitas atau peralatan untuk memberikan dukungan, penyimpanan, atau pelatihan yang terkait dengan pengoperasian, pemeliharaan, atau perbaikan peralatan dalam skenario banjir, kondisi badai, atau suhu yang lebih tinggi.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // REVISI 4: KBLI 20111 (Teks Transisi Poin 3 & Poin 4.1-4.2 100% Utuh Tanpa Disingkat)
    "20111": {
      sektor: "Manufaktur (IPPU)",
      nama: "Industri Kimia Dasar Anorganik Khlor dan Alkali",
      eoSupport: ["EO1"],
      EO1: {
        judul: "Industri Kimia Dasar Anorganik Khlor dan Alkali",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "-",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria salah satu dari (1) ATAU (2) untuk produksi hidrogen:",
            logic: "",
            kriteria: [
              {
                no: "1",
                text: "Untuk produksi hidrogen yang menggunakan bahan baku listrik terbarukan, Aktivitas memenuhi salah satu kriteria berikut:",
                logic: "",
                subs: [
                  { no: "1", text: "Menggunakan listrik dari pembangkit listrik terbarukan yang memiliki koneksi langsung dengan fasilitas produksi hidrogen", logic: "" },
                  { no: "2", text: "Menggunakan 100% listrik dari pembangkit listrik terbarukan yang berada dalam satu jaringan listrik yang sama dengan fasilitas hidrogen, namun dialokasikan secara eksklusif untuk produksi hidrogen dan dibuktikan dengan kontrak komersil. Harus terdapat korelasi temporal minimal tahunan antara produksi listrik terbarukan dan hidrogen yang diverifikasi melalui instrumen yang diakui secara International, telah memenuhi EO1", logic: "OR" }
                ]
              },
              { no: "2", text: "Untuk produksi hidrogen yang menggunakan bahan baku terbarukan bukan listrik dan bahan baku tak terbarukan, Aktivitas memenuhi kriteria lifecycle GHG emissions <=3,00 tCO2e per ton hidrogen yang diproduksi", logic: "OR", subs: [] }
            ]
          },
          {
            text: "Aktivitas memenuhi kriteria (1), (2), (3), DAN (4) sesuai dengan produk gas rendah karbon termasuk hidrogen yang diproduksi:",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Penggunaan bahan bakar fosil untuk pembangkitan listrik untuk kepentingan sendiri, hanya memenuhi syarat untuk fasilitas hingga tahun 2045", logic: "", subs: [] },
              { no: "2", text: "Apabila tersedia fasilitas CCS/CCUS, maka Aktivitas wajib memenuhi TSC pada Aktivitas CCS/CCUS sektor Energi dalam TKBI (cross-referencing)", logic: "AND", subs: [] },
              { no: "3", text: "Setiap biomassa yang digunakan sebagai bahan baku harus berasal dari: (i) kayu perkebunan yang sesuai dengan TSC yang ditetapkan dalam Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) sektor AFF dalam TKBI (cross-referencing), (ii) tanaman pangan atau pakan yang sesuai dengan TSC yang ditetapkan dalam Aktivitas Tanaman Semusim atau Tahunan atau Aktivitas Hutan Tanaman (Plantation Forestry) sektor AFF dalam TKBI (cross-referencing); atau (iii) limbah dari tanaman industri atau pangan", logic: "AND", subs: [] },
              {
                no: "4",
                text: "Memenuhi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Untuk Aktivitas Industri Gas Rendah Karbon termasuk Hidrogen yang termasuk sebagai penyedia energi: Jika Aktivitas menggunakan sumber energi dan/atau energi >=6.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "" },
                  { no: "2", text: "Untuk Aktivitas Industri Gas Rendah Karbon termasuk Hidrogen yang termasuk sebagai pengguna energi: Jika Aktivitas menggunakan sumber energi dan/atau energi >=4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memenuhi kriteria (1) ATAU (2):",
            logic: "",
            kriteria: [
              {
                no: "1",
                text: "Memiliki Transition Plan yang:",
                logic: "",
                subs: [
                  { no: "1", text: "Selaras dengan komitmen Paris Agreement atau target pengurangan net-zero GHG emissions yang kredibel, mengikuti kerangka kerja yang diakui secara internasional untuk konsistensi dan akuntabilitas, serta mencakup peralihan ke teknologi proses rendah karbon", logic: "" },
                  { no: "2", text: "Selaras dengan pemenuhan target Nationally Determined Contribution (NDC) Indonesia", logic: "OR" }
                ]
              },
              { no: "2", text: "Menerapkan langkah-langkah efisiensi energi yang mencapai >=25% peningkatan efisiensi energi dibandingkan dengan batas dasar yang telah ditetapkan dari praktik business-as-usual saat ini", logic: "OR", subs: [] }
            ]
          },
          {
            text: "Aktivitas memenuhi kriteria (1), (2), (3), DAN (4) sesuai dengan produk gas rendah karbon termasuk hidrogen yang diproduksi:",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Penggunaan bahan bakar fosil untuk pembangkitan listrik untuk kepentingan sendiri, hanya memenuhi syarat untuk fasilitas hingga tahun 2045", logic: "", subs: [] },
              { no: "2", text: "Apabila tersedia fasilitas CCS/CCUS, maka Aktivitas wajib memenuhi TSC pada Aktivitas CCS/CCUS sektor Energi dalam TKBI (cross-referencing)", logic: "AND", subs: [] },
              { no: "3", text: "Setiap biomassa yang digunakan sebagai bahan baku harus berasal dari: (i) kayu perkebunan yang sesuai dengan TSC yang ditetapkan dalam Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) sektor AFF dalam TKBI (cross-referencing), (ii) tanaman pangan atau pakan yang sesuai dengan TSC yang ditetapkan dalam Aktivitas Tanaman Semusim atau Tahunan atau Aktivitas Hutan Tanaman (Plantation Forestry) sektor AFF dalam TKBI (cross-referencing); atau (iii) limbah dari tanaman industri atau pangan", logic: "AND", subs: [] },
              {
                no: "4",
                text: "Memenuhi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Untuk Aktivitas Industri Gas Rendah Karbon termasuk Hidrogen yang termasuk sebagai penyedia energi: Jika Aktivitas menggunakan sumber energi dan/atau energi >=6.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "" },
                  { no: "2", text: "Untuk Aktivitas Industri Gas Rendah Karbon termasuk Hidrogen yang termasuk sebagai pengguna energi: Jika Aktivitas menggunakan sumber energi dan/atau energi >=4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya)", logic: "OR" }
                ]
              }
            ]
          }
        ]
      }
    },

    // KBLI 25999 (Manufaktur - Industri Barang Logam Lainnya YTDL)
    "25999": {
      sektor: "Manufaktur (IPPU)",
      nama: "Industri Barang Logam Lainnya YTDL",
      eoSupport: ["EO1"],
      EO1: {
        judul: "Industri Barang Logam Lainnya YTDL",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "33,84",
        keterangan: "Catatan Aktivitas:\n1. Industri Teknologi Rendah Karbon Lainnya yang dimaksudkan adalah teknologi yang ditujukan untuk pengurangan emisi GRK secara signifikan.\n2. Teknologi rendah karbon adalah sistem dan proses yang mendukung Aktivitas lain yang menghasilkan pengurangan emisi gas rumah kaca.",
        pertanyaanHijau: [
          {
            text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria berikut.",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas memproduksi teknologi yang secara khusus dirancang untuk mencapai penghematan lifecycle GHG emissions, jika dibandingkan dengan teknologi, produk, atau solusi alternatif berkinerja terbaik yang saat ini tersedia di pasar.", logic: "", subs: [] },
              { no: "2", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi sama dengan atau lebih dari 4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KBLI 16211 (Manufaktur - Industri Kayu Lapis)
    "16211": {
      sektor: "Manufaktur (IPPU)",
      nama: "Industri Kayu Lapis",
      eoSupport: ["EO1", "EO3"],
      EO1: {
        judul: "Industri Kayu Lapis",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "33,76,84",
        keterangan: "Catatan Aktivitas:\n“GHG-neutral” atau “GHG-negative”, dalam konteks kayu sebagai bahan baku (feedstock), merujuk pada proses ketika karbon yang secara alami diserap dan disimpan oleh pohon selama masa pertumbuhan kira-kira sama dengan (GHG-neutral) atau lebih besar daripada (GHG-negative) total emisi gas rumah kaca yang dilepaskan sepanjang siklus hidup produk.",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi kriteria (1) DAN (2).",
            logic: "",
            kriteria: [
              {
                no: "1",
                text: "Aktivitas memenuhi salah satu dari kriteria berikut:",
                logic: "",
                subs: [
                  { no: "1", text: "Produk berbahan dasar kayu, rotan, dan/atau bambu yang menunjukkan GHG-neutral atau GHG-negative lifecycle dinyatakan memenuhi syarat EO1, yaitu apabila jumlah karbon yang diserap dan disimpan >= total emisi yang dilepaskan selama seluruh lifecyle produk;", logic: "" },
                  { no: "2", text: "Pembakaran bahan bakar di area fasilitas harus menggunakan >=50% dari total input energi yang berasal dari bahan bakar gas rendah karbon (misalnya: biogas) atau hidrogen yang sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Industri Gas Rendah Karbon termasuk Hidrogen sektor Manufaktur dalam TKBI (cross-referencing), atau biomassa yang tersertifikasi sebagai bahan baku terbarukan; atau sebagian digantikan dengan elektrifikasi;", logic: "OR" }
                ]
              }
            ]
          },
          {
            text: "Aktivitas memenuhi kriteria berikut.",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Kayu, rotan, dan/atau bambu harus berasal dari sistem produksi yang sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) atau Produk Hutan Selain Kayu (Non-Timber Forest Product) sektor AFF dalam TKBI (cross-referencing).", logic: "", subs: [] }
            ]
          },
          {
            text: "Aktivitas memenuhi kriteria (1), (2), DAN (3).",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Kayu, rotan, dan/atau bambu yang berasal dari Hutan alam hanya memenuhi kriteria jika memiliki sertifikasi untuk produk kayu sesuai Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) atau Produk Hutan Selain Kayu (Non-Timber Forest Product) sektor AFF dalam TKBI (cross-referencing);", logic: "", subs: [] },
              { no: "2", text: "Produk yang diproduksi harus menunjukkan rencana pengelolaan limbah yang layak, yakni yang mendorong pengalihan pembuangan limbah kayu dari tempat pembuangan akhir (landfills);", logic: "AND", subs: [] },
              { no: "3", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi >=4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memiliki Transition Plan yang memenuhi kriteria (1) ATAU (2).",
            logic: "",
            kriteria: [
              { no: "1", text: "Transition Plan selaras dengan komitmen Paris Agreement atau target pengurangan net-zero GHG emissions yang kredibel, mengikuti kerangka kerja yang diakui secara internasional untuk konsistensi dan akuntabilitas, serta mencakup peralihan ke teknologi proses rendah karbon;", logic: "", subs: [] },
              { no: "2", text: "Transition Plan selaras dengan pemenuhan target Nationally Determined Contribution (NDC) Indonesia.", logic: "OR", subs: [] }
            ]
          },
          {
            text: "Aktivitas memenuhi kriteria (1), (2), DAN (3).",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Kayu, rotan, dan/atau bambu yang berasal dari Hutan alam hanya memenuhi kriteria jika memiliki sertifikasi untuk produk kayu sesuai Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) atau Produk Hutan Selain Kayu (Non-Timber Forest Product) sektor AFF dalam TKBI (cross-referencing);", logic: "", subs: [] },
              { no: "2", text: "Produk yang diproduksi harus menunjukkan rencana pengelolaan limbah yang layak, yakni yang mendorong pengalihan pembuangan limbah kayu dari tempat pembuangan akhir (landfills);", logic: "AND", subs: [] },
              { no: "3", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi >=4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO3: {
        judul: "Industri Kayu Lapis",
        subJudul: "Perlindungan Ekosistem dan Keanekaragaman Hayati",
        referensi: "33,76",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi kriteria (1) DAN (2).",
            logic: "",
            kriteria: [
              { no: "1", text: "Sumber bahan dari kayu, rotan, dan/atau bambu >=80% berasal dari metode pertanian atau produksi yang mendukung keanekaragaman hayati dan mengurangi tekanan pada ekosistem dan penggunaan lahan, dengan memenuhi kriteria berikut: Untuk kayu atau produk berbasis kayu, sistem produksinya harus sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) atau Aktivitas Hutan Tanaman (Plantation Forestry) atau Produk Hutan Selain Kayu (Non-Timber Forest Product) sektor AFF dalam TKBI (cross-referencing);", logic: "", subs: [] },
              { no: "2", text: "Bahan baku berdampak tinggi (high-impact feedstock) >=40% wajib menggunakan bahan alternatif yang menunjukkan tekanan yang lebih rendah pada keanekaragaman hayati, berdasarkan lifecycle environmental performance.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memenuhi kriteria (1) DAN (2).",
            logic: "",
            kriteria: [
              { no: "1", text: "Sumber bahan dari kayu, rotan, dan/atau bambu >=70% berasal dari metode pertanian atau produksi yang mendukung keanekaragaman hayati dan mengurangi tekanan pada ekosistem dan penggunaan lahan, dengan memenuhi kriteria berikut:\nUntuk kayu atau produk berbasis kayu, sistem produksinya harus sesuai dengan TSC klasifikasi “Transisi” pada Aktivitas Pengelolaan Hutan Lestari (Sustainable Forest Management) atau Aktivitas Hutan Tanaman (Plantation Forestry) atau Produk Hutan Selain Kayu (Non-Timber Forest Product) sektor AFF dalam TKBI (cross-referencing);", logic: "", subs: [] },
              { no: "2", text: "Bahan baku berdampak tinggi (high-impact feedstock) >=30% wajib menggunakan bahan alternatif yang menunjukkan tekanan yang lebih rendah pada keanekaragaman hayati, berdasarkan lifecycle environmental performance.", logic: "AND", subs: [] }
            ]
          }
        ]
      }
    },

    // KBLI 29300 (Manufaktur - Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda 4+)
    "29300": {
      sektor: "Manufaktur (IPPU)",
      nama: "Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
      eoSupport: ["EO1"],
      EO1: {
        judul: "Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "33,84",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria berikut.",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas yang mencakup produksi, perbaikan, pemeliharaan, modifikasi, pengalihan fungsi, peningkatan, dan/atau perakitan kendaraan atau komponen kendaraan yang penting untuk mendukung dan meningkatkan kinerja lingkungan dari moda transportasi, sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas yang menjadi rujukan sebagaimana tercakup dalam seluruh Aktivitas Sektor Transportation and Storage dalam TKBI (cross-referencing).", logic: "", subs: [] },
              { no: "2", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi sama dengan atau lebih dari 4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Untuk mendapatkan klasifikasi ini, aktivitas harus memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas yang mencakup produksi, perbaikan, pemeliharaan, modifikasi, pengalihan fungsi, peningkatan, dan/atau perakitan kendaraan atau komponen kendaraan yang penting untuk mendukung dan meningkatkan kinerja lingkungan dari moda transportasi, sesuai dengan TSC klasifikasi “Transisi” pada Aktivitas yang menjadi rujukan sebagaimana tercakup dalam seluruh Aktivitas Sektor Transportation and Storage dalam TKBI (cross-referencing).", logic: "", subs: [] }
            ]
          },
          {
            text: "Aktivitas harus memenuhi kriteria berikut.",
            logic: "AND",
            kriteria: [
              { no: "1", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi sama dengan atau lebih dari 4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "", subs: [] }
            ]
          }
        ]
      }
    },

    // KBLI 27510 (Manufaktur - Industri Peralatan Listrik Rumah Tangga)
    "27510": {
      sektor: "Manufaktur (IPPU)",
      nama: "Industri Peralatan Listrik Rumah Tangga",
      eoSupport: ["EO1", "EO4"],
      EO1: {
        judul: "Industri Peralatan Efisiensi Energi untuk Bangunan",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "-",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Untuk mendapatkan klasifikasi ini, Aktivitas harus memenuhi kriteria berikut.",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas memproduksi peralatan efisiensi energi untuk bangunan yang sesuai dengan TSC klasifikasi “Hijau” pada Aktivitas Instalasi, Pemeliharaan, Perbaikan Peralatan Efisiensi Energi (Energy Efficient Equipment) sektor Construction and Real Estate dalam TKBI (cross-referencing).", logic: "", subs: [] },
              { no: "2", text: "Jika Aktivitas menggunakan sumber energi dan/atau energi sama dengan atau lebih dari 4.000 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 33 tahun 2023 tentang Konservasi Energi (atau perubahannya).", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO4: SHARED_ELEKTRONIK_26490_26511.EO4
    },

    // REVISI 7: KBLI 42214 (Teks PP 14 Tahun 2021 pada TSC Transisi 100% Lengkap Tanpa Disingkat)
    "42214": {
      sektor: "Konstruksi dan Real Estate (C&RE)",
      nama: "Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai",
      eoSupport: ["EO1", "EO2"],
      EO1: {
        judul: "Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "11,13",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Konstruksi tersebut memenuhi/memiliki Predikat Konstruksi Berkelanjutan dengan penilaian atau peringkat “Utama” berdasarkan Peraturan Pemerintah Nomor 14 Tahun 2021 tentang Perubahan atas Peraturan Pemerintah Nomor 22 Tahun 2020 tentang Peraturan Pelaksanaan Undang-Undang Nomor 2 Tahun 2017 Tentang Jasa Konstruksi, dan Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor 9 Tahun 2021 tentang Pedoman Penyelenggaraan Konstruksi Berkelanjutan (dan perubahannya);", logic: "", subs: [] },
              { no: "2", text: "Aktivitas konstruksi tidak didedikasikan untuk aktivitas ekstraksi, penyimpanan, produksi, pengangkutan bahan bakar fosil.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Konstruksi tersebut memenuhi/memiliki Predikat Konstruksi Berkelanjutan berdasarkan Peraturan Pemerintah Nomor 14 Tahun 2021 tentang Perubahan atas Peraturan Pemerintah Nomor 22 Tahun 2020 tentang Peraturan Pelaksanaan Undang-Undang Nomor 2 Tahun 2017 Tentang Jasa Konstruksi, dan Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Nomor 9 Tahun 2021 tentang Pedoman Penyelenggaraan Konstruksi Berkelanjutan (dan perubahannya);", logic: "", subs: [] },
              { no: "2", text: "Aktivitas konstruksi tidak didedikasikan untuk aktivitas ekstraksi, penyimpanan, produksi, pengangkutan bahan bakar fosil.", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO2: {
        judul: "Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas tersebut memenuhi salah satu atau semua kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas ekonomi telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang material bagi aktivitas tersebut;", logic: "", subs: [] },
              { no: "2", text: "Risiko iklim fisik yang penting bagi aktivitas tersebut telah diidentifikasi dengan melakukan Penilaian Climate Risk and Vulnerability Assessment (CRVA);", logic: "OR", subs: [] },
              { no: "3", text: "Proyeksi iklim dan penilaian dampak didasarkan pada praktik terbaik dan panduan yang tersedia serta mempertimbangkan ilmu pengetahuan untuk analisis kerentanan dan risiko serta metodologi sesuai dengan laporan Intergovernmental Panel on Climate Change (IPCC) tentang perubahan Iklim, publikasi ilmiah yang telah ditelaah oleh dilakukan peer-reviewed, open source atau paying models;", logic: "OR", subs: [] },
              {
                no: "4",
                text: "Solusi adaptasi yang diterapkan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "tidak berdampak buruk pada upaya adaptasi atau tingkat ketahanan terhadap risiko iklim fisik terhadap manusia, alam, warisan budaya, aset, dan aktivitas ekonomi lainnya;", logic: "" },
                  { no: "2", text: "mengutamakan solusi berbasis alam atau mengandalkan infrastruktur berkelanjutan;", logic: "OR" },
                  { no: "3", text: "konsisten dengan rencana dan strategi adaptasi perubahan iklim di tingkat lokal, sektoral, regional atau nasional;", logic: "OR" },
                  { no: "4", text: "dipantau dan diukur berdasarkan indikator yang telah ditetapkan sebelumnya dan tindakan perbaikan dipertimbangkan jika indikator tersebut tidak terpenuhi;", logic: "OR" },
                  { no: "5", text: "jika solusi yang diterapkan bersifat fisik dan terdiri dari aktivitas yang telah ditentukan TSC, maka solusi tersebut memenuhi TSC yang tidak menimbulkan bahaya signifikan terhadap aktivitas tersebut.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KBLI 41015 (C&RE - Konstruksi Gedung Kesehatan)
    "41015": {
      sektor: "Konstruksi dan Real Estate (C&RE)",
      nama: "Konstruksi Gedung Kesehatan",
      eoSupport: ["EO1", "EO2", "EO4"],
      EO1_BARU: {
        judul: "Konstruksi Gedung Baru",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,8,9,45",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Konstruksi gedung baru yang memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Bangunan gedung tersebut telah disertifikasi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Sertifikasi BGH dengan peringkat “Utama”;", logic: "" },
                  { no: "2", text: "Sertifikasi internasional yang mencapai “sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan mitigasi perubahan iklim termasuk dalam kategori energi.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Konstruksi gedung baru yang memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              { no: "3", text: "Bangunan gedung tersebut telah disertifikasi melalui program GBC yang kredibel dan diakui nasional atau internasional sebagaimana Tabel 5 (Buku TKBI).", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO1_RENOVASI: {
        judul: "Konstruksi Gedung Existing/Renovasi:",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,8,9",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Apabila aktivitas Konstruksi Gedung Existing/Renovasi:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG) yang telah disesuaikan dengan kondisi pasca renovasi sesuai ketentuan perundangan yang berlaku", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF) yang telah disesuaikan dengan kondisi pasca renovasi sesuai ketentuan perundangan yang berlaku", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas memenuhi persyaratan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Aktivitas mengarah pada pengurangan Energy Usage Intensity (EUI) minimal 30%, yang mana EUI awal dan estimasi peningkatan didasarkan pada audit energi yang dilakukan oleh auditor energi yang telah memiliki sertifikat kompetensi dan/atau metode lain yang dilakukan melalui pengukuran dan verifikasi (measurement and verification) kinerja energi yang dilakukan oleh verifikator yang telah memiliki sertifikat kompetensi", logic: "" },
                  { no: "2", text: "Untuk Gedung Tempat Tinggal, Gedung Industri, Gedung Kesehatan, Gedung Pendidikan, Gedung Tempat Hiburan dan Gedung Lainnya: peningkatan 30% merupakan hasil dari pengurangan EUI yang sebenarnya (di mana pengurangan permintaan EUI bersih melalui sumber energi terbarukan tidak diperhitungkan) dan dapat dicapai melalui serangkaian tindakan dalam waktu maksimal tiga tahun", logic: "OR" },
                  { no: "3", text: "Untuk Gedung Perkantoran: Aktivitas bangunan gedung telah memenuhi EUI lebih rendah dari 98 kWh/m2 per tahun untuk bangunan yang memiliki luas bangunan 1.000-5.000 m2 atau EUI lebih rendah dari 129 kWh/m2 per tahun untuk bangunan yang memiliki luas bangunan di atas 5.000 m2", logic: "OR" },
                  { no: "4", text: "Untuk Gedung Perbelanjaan: Aktivitas bangunan gedung telah memenuhi EUI lebih rendah dari 213 kWh/m2 per tahun;", logic: "OR" },
                  { no: "5", text: "4) Untuk Gedung Penginapan: Aktivitas bangunan gedung telah memenuhi EUI dengan klasifikasi:\ni. Hotel Budget lebih rendah dari 97 kWh/m2 per tahun.\nii. Hotel Bintang 3 lebih rendah dari 145 kWh/m2 per tahun.\niii. Hotel Bintang 4 lebih rendah dari 152 kWh/m2 per tahun.\niv. Hotel Bintang 5 lebih rendah dari 168 kWh/m2 per tahun.", logic: "OR" }
                ]
              },
              {
                no: "4",
                text: "Bangunan gedung tersebut telah disertifikasi ulang:",
                logic: "OR",
                subs: [
                  { no: "1", text: "Sertifikasi BGH dengan peringkat “Utama”", logic: "" },
                  { no: "2", text: "Sertifikasi internasional lainnya yang mencapai “sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan mitigasi perubahan iklim termasuk dalam kategori energi.", logic: "OR" }
                ]
              },
              { no: "5", text: "Jika aktivitas menggunakan sumber energi dan/atau energi >=500 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi sesuai Peraturan Pemerintah Republik Indonesia Nomor 33 Tahun 2023 tentang Konservasi Energi.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Apabila aktivitas Konstruksi Gedung Existing/Renovasi:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG) yang telah disesuaikan dengan kondisi pasca-renovasi sesuai ketentuan perundangan yang berlaku;", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF) yang telah disesuaikan dengan kondisi pasca-renovasi sesuai ketentuan perundangan yang berlaku", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas memenuhi persyaratan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Aktivitas mengarah pada pengurangan Energy Usage Intensity (EUI) minimal 15%, yang mana EUI awal dan estimasi peningkatan didasarkan pada audit energi yang dilakukan oleh auditor energi yang telah memiliki sertifikat kompetensi dan/atau metode lain yang dilakukan melalui pengukuran dan verifikasi (measurement and verification) kinerja energi yang dilakukan oleh verifikator yang telah memiliki sertifikat kompetensi", logic: "" },
                  { no: "2", text: "Untuk Gedung Tempat Tinggal, Gedung Industri, Gedung Kesehatan, Gedung Pendidikan, Gedung Tempat Hiburan dan Gedung Lainnya: peningkatan 15% merupakan hasil dari pengurangan EUI yang sebenarnya (di mana pengurangan permintaan EUI bersih melalui sumber energi terbarukan tidak diperhitungkan) dan dapat dicapai melalui serangkaian tindakan dalam waktu maksimal tiga tahun", logic: "OR" },
                  { no: "3", text: "Untuk Gedung Perkantoran: Aktivitas bangunan gedung telah memenuhi EUI lebih rendah dari 98-156 kWh/m2 per tahun untuk bangunan yang memiliki luas bangunan 1.000-5.000 m2 atau EUI lebih rendah dari 129-153 kWh/m2 per tahun untuk bangunan yang memiliki luas bangunan di atas 5.000 m2", logic: "OR" },
                  { no: "4", text: "Untuk Gedung Perbelanjaan: Aktivitas bangunan gedung telah memenuhi EUI lebih rendah dari 213-301 kWh/m2 per tahun", logic: "OR" },
                  { no: "5", text: "Untuk Gedung Penginapan: Aktivitas bangunan gedung telah memenuhi EUI dengan klasifikasi:\ni. Hotel Budget sebesar 97-145 kWh/m2 per tahun.\nii. Hotel Bintang 3 sebesar 145-179 kWh/m2 per tahun.\niii. Hotel Bintang 4 sebesar 152-187 kWh/m2 per tahun.\niv. Hotel Bintang 5 sebesar 168-192 kWh/m2 per tahun.", logic: "OR" }
                ]
              },
              { no: "4", text: "Bangunan gedung telah disertifikasi ulang berdasarkan program GBC yang kredibel dan diakui nasional atau internasional sebagaimana Tabel 5.", logic: "OR", subs: [] },
              { no: "5", text: "Jika aktivitas menggunakan sumber energi dan/atau energi >=500 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi sesuai Peraturan Pemerintah Republik Indonesia Nomor 33 Tahun 2023 tentang Konservasi Energi.", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO2: {
        judul: "Konstruksi Gedung Kesehatan",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas tersebut memenuhi salah satu atau semua kriteria berikut:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Aktivitas ekonomi telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang material bagi aktivitas tersebut, sebagaimana dapat dibuktikan melalui program GBC yang kredibel dan diakui yang mencapai “sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan adaptasi perubahan iklim;", logic: "" },
                  { no: "2", text: "Risiko iklim fisik yang penting bagi aktivitas tersebut telah diidentifikasi dengan melakukan Penilaian Climate Risk and Vulnerability Assessment (CRVA);", logic: "OR" },
                  { no: "3", text: "Proyek iklim dan penilaian dampak didasarkan pada praktik terbaik dan panduan yang tersedia serta mempertimbangkan ilmu pengetahuan untuk analisis kerentanan dan risiko serta metodologi sesuai dengan laporan Intergovernmental Panel on Climate Change (IPCC) tentang perubahan Iklim, publikasi ilmiah yang telah ditelaah dan dilakukan oleh peer-reviewed, open source atau paying models;", logic: "OR" }
                ]
              },
              {
                no: "4",
                text: "Solusi adaptasi yang diterapkan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Tidak berdampak buruk pada upaya adaptasi atau tingkat ketahanan terhadap risiko iklim fisik terhadap manusia, alam, warisan budaya, aset, dan aktivitas ekonomi lainnya;", logic: "" },
                  { no: "2", text: "Mengutamakan solusi berbasis alam atau mengandalkan infrastruktur berkelanjutan;", logic: "OR" },
                  { no: "3", text: "Konsisten dengan rencana dan strategi adaptasi perubahan iklim di tingkat lokal, sektoral, regional atau nasional;", logic: "OR" },
                  { no: "4", text: "Dipantau dan diukur berdasarkan indikator yang telah ditetapkan sebelumnya dan tindakan perbaikan dipertimbangkan jika indikator tersebut tidak terpenuhi;", logic: "OR" },
                  { no: "5", text: "Jika solusi yang diterapkan bersifat fisik dan terdiri dari aktivitas yang telah ditentukan TSC, maka solusi tersebut memenuhi TSC yang tidak menimbulkan bahaya signifikan terhadap aktivitas tersebut.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO4: {
        judul: "Konstruksi Gedung Existing/Renovasi:",
        subJudul: "Ketahanan Sumber Daya dan Transisi menuju Ekonomi Sirkular",
        referensi: "-",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Mempertahankan 75% dari struktur bangunan gedung yang ada (termasuk lantai dan dek atap) dan selubung (kulit eksterior dan rangka, tidak termasuk rakitan jendela dan bahan atap non-struktural). Bagian bangunan gedung yang dianggap tidak kokoh secara struktural atau berbahaya (unsound or hazardous) harus dikeluarkan dari perhitungan", logic: "", subs: [] },
              { no: "2", text: "Menggunakan elemen non-struktural interior yang ada (misalnya, dinding interior, pintu, penutup lantai, dan sistem plafon) setidaknya 30% dari keseluruhan bangunan gedung yang telah selesai dibangun, termasuk penambahan", logic: "AND", subs: [] },
              { no: "3", text: "Melakukan Life Cycle Assessment (LCA) struktur dan penutup proyek yang menunjukkan pengurangan minimal 10%, dibandingkan dengan bangunan gedung baseline, setidaknya tiga dari enam kategori dampak yang tercantum dalam Kriteria LEED v4.1 Building Lifecycle Reduction Criteria, yang salah satunya potensi pemanasan global (global warming potential) atau dalam program GBC yang kredibel dan diakui lainnya.", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Mempertahankan 45% struktur bangunan gedung yang ada (termasuk lantai dan dek atap) dan selubung (kulit eksterior dan rangka, tidak termasuk rakitan jendela dan bahan atap non-struktural). Bagian bangunan gedung yang dianggap tidak kokoh secara struktural atau berbahaya (unsound or hazardous) harus dikeluarkan dari perhitungan", logic: "", subs: [] },
              { no: "2", text: "Menggunakan elemen non-struktural interior yang ada (misalnya, dinding interior, pintu, penutup lantai, dan sistem plafon) setidaknya 30% dari keseluruhan bangunan gedung yang telah selesai dibangun, termasuk penambahan", logic: "AND", subs: [] },
              { no: "3", text: "Melakukan life cycle assessment struktur dan penutup proyek yang menunjukkan pengurangan minimal 5%, dibandingkan dengan bangunan gedung baseline, setidaknya tiga dari enam kategori dampak dalam Kriteria LEED v4.1 Building Lifecycle Reduction Criteria, yang salah satunya adalah potensi pemanasan global (global warming potential) atau dalam program GBC yang kredibel dan diakui lainnya.", logic: "AND", subs: [] }
            ]
          }
        ]
      }
    },

    // KBLI 43211 (C&RE - Instalasi Listrik & Stasiun Pengisian Kendaraan Listrik)
    "43211": {
      sektor: "Konstruksi dan Real Estate (C&RE)",
      nama: "Instalasi Listrik",
      eoSupport: ["EO1", "EO2"],
      EO1_INSTALASI: {
        judul: "Instalasi Listrik",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Apabila Aktivitas Instalasi, Pemeliharaan dan Perbaikan untuk Energi Baru dan Terbarukan yang merupakan bagian dari sebuah bangunan hunian:",
            logic: "",
            kriteria: [
              { no: "1", text: "pemasangan, pemeliharaan dan perbaikan sistem fotovoltaik surya dan peralatan teknis tambahan;", logic: "", subs: [] },
              { no: "2", text: "pemasangan, pemeliharaan dan perbaikan panel air panas tenaga surya dan peralatan teknis pendukungnya;", logic: "OR", subs: [] },
              { no: "3", text: "aktivitas yang mencakup pemasangan, pemeliharaan, perbaikan, dan peningkatan sistem pompa panas diarahkan untuk memajukan pemanfaatan energi terbarukan untuk tujuan pemanasan dan pendinginan;", logic: "OR", subs: [] },
              { no: "4", text: "pemasangan, pemeliharaan, dan perbaikan turbin angin dan peralatan teknis tambahan;", logic: "OR", subs: [] },
              { no: "5", text: "pemasangan, pemeliharaan dan perbaikan kolektor tenaga surya dan peralatan teknis pendukungnya;", logic: "OR", subs: [] },
              { no: "6", text: "pemasangan, pemeliharaan dan perbaikan unit penyimpanan energi panas atau listrik dan peralatan teknis pendukungnya;", logic: "OR", subs: [] },
              { no: "7", text: "pemasangan, pemeliharaan dan perbaikan pembangkit listrik micro combined heat and power yang memiliki efisiensi tinggi;", logic: "OR", subs: [] },
              { no: "8", text: "pemasangan, pemeliharaan dan perbaikan sistem penukar panas/pemulihan (heat exchanger/recovery systems).", logic: "OR", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO1_SPKLU: {
        judul: "Stasiun Pengisian Kendaraan Listrik",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "-",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Merupakan aktivitas pemasangan, pemeliharaan, atau perbaikan stasiun pengisian daya untuk kendaraan listrik.", logic: "", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO2: {
        judul: "Instalasi Listrik",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas tersebut memenuhi salah satu atau semua kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas ekonomi telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang material bagi aktivitas tersebut;", logic: "", subs: [] },
              { no: "2", text: "Risiko iklim fisik yang penting bagi aktivitas tersebut telah diidentifikasi dengan melakukan Penilaian Climate Risk and Vulnerability Assessment (CRVA);", logic: "OR", subs: [] },
              { no: "3", text: "Proyeksi iklim dan penilaian dampak didasarkan pada praktik terbaik dan panduan yang tersedia serta mempertimbangkan ilmu pengetahuan untuk analisis kerentanan dan risiko serta metodologi sesuai dengan laporan Intergovernmental Panel on Climate Change (IPCC) tentang perubahan Iklim, publikasi ilmiah yang telah ditelaah oleh dilakukan peer-reviewed, open source atau paying models;", logic: "OR", subs: [] },
              {
                no: "4",
                text: "Solusi adaptasi yang diterapkan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "tidak berdampak buruk pada upaya adaptasi atau tingkat ketahanan terhadap risiko iklim fisik terhadap manusia, alam, warisan budaya, aset, dan aktivitas ekonomi lainnya;", logic: "" },
                  { no: "2", text: "mengutamakan solusi berbasis alam atau mengandalkan infrastruktur berkelanjutan;", logic: "OR" },
                  { no: "3", text: "konsisten dengan rencana dan strategi adaptasi perubahan iklim di tingkat lokal, sektoral, regional atau nasional;", logic: "OR" },
                  { no: "4", text: "dipantau dan diukur berdasarkan indikator yang telah ditetapkan sebelumnya dan tindakan perbaikan dipertimbangkan jika indikator tersebut tidak terpenuhi;", logic: "OR" },
                  { no: "5", text: "jika solusi yang diterapkan bersifat fisik dan terdiri dari aktivitas yang telah ditentukan TSC, maka solusi tersebut memenuhi TSC yang tidak menimbulkan bahaya signifikan terhadap aktivitas tersebut.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KBLI 52211 (T&S - Aktivitas Terminal Darat)
    "52211": {
      sektor: "Pengangkutan dan Pergudangan (T&S)",
      nama: "Aktivitas Terminal Darat",
      eoSupport: ["EO1", "EO2"],
      EO1_DARAT: {
        judul: "Menunjang angkutan darat",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,23,24",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              {
                no: "1",
                text: "Aktivitas memenuhi satu atau lebih kriteria berikut ini:",
                logic: "",
                subs: [
                  { no: "1", text: "Infrastruktur didedikasikan untuk pengoperasian kendaraan dengan zero direct tailpipe CO2 emissions: titik pengisian daya listrik, peningkatan koneksi jaringan listrik, stasiun pengisian bahan bakar hidrogen atau sistem jalan listrik (electric road systems, ERS)", logic: "" },
                  { no: "2", text: "infrastruktur dan instalasi didedikasikan untuk pengiriman barang antar moda: infrastruktur terminal dan suprastruktur untuk bongkar muat barang", logic: "OR" },
                  { no: "3", text: "infrastruktur dan instalasi didedikasikan untuk angkutan penumpang umum perkotaan dan pinggiran kota, termasuk sistem persinyalan terkait untuk sistem metro, trem, dan kereta api", logic: "OR" },
                  { no: "4", text: "Infrastruktur didukung dengan penggunaan energi terbarukan", logic: "OR" }
                ]
              },
              { no: "2", text: "Jika aktivitas menggunakan sumber energi dan/atau energi >=500 Ton of Oil Equivalent (TOE) per tahun, maka harus memiliki bukti pelaksanaan manajemen energi sesuai Peraturan Pemerintah Republik Indonesia Nomor 33 Tahun 2023 tentang Konservasi Energi", logic: "AND", subs: [] },
              { no: "3", text: "Infrastruktur tersebut tidak didedikasikan untuk pengangkutan atau penyimpanan bahan bakar fosil", logic: "AND", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO1_SEPEDA: {
        judul: "Penunjang mobilitas pribadi dan sepeda",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,23,24",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Infrastruktur yang dibangun dan dioperasikan didedikasikan untuk mobilitas pribadi atau logistik sepeda: trotoar, jalur sepeda dan zona pejalan kaki, pengisian daya listrik, dan instalasi pengisian bahan bakar hidrogen untuk perangkat mobilitas pribadi", logic: "", subs: [] }
            ]
          }
        ],
        pertanyaanTransisi: []
      },
      EO2: {
        judul: "Aktivitas Terminal Darat",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas tersebut memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang paling penting dan material untuk aktivitas tersebut, yang dapat ditunjukkan dengan Climate Risk And Vulnerability Assessment (CRVA);", logic: "", subs: [] },
              {
                no: "2",
                text: "Aktivitas harus dapat menunjukkan bahwa diperlukan untuk penyediaan keamanan transportasi bagi konsumen dengan mempertimbangkan kemungkinan gangguan terkait iklim di masa depan. Dalam konteks ini, contoh-contoh berikut dapat dianggap relevan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Pengoperasian peralatan yang telah dibangun atau ditingkatkan (upgrade) agar lebih mampu beroperasi dalam kondisi banjir, badai, atau suhu yang lebih tinggi;", logic: "" },
                  { no: "2", text: "Pengoperasian peralatan pemantauan dan kontrol atau sistem TI terkait lainnya untuk mengoperasikan atau memelihara peralatan jika terjadi banjir, kondisi badai, atau suhu yang lebih tinggi;", logic: "OR" },
                  { no: "3", text: "Pengoperasian fasilitas atau peralatan untuk memberikan dukungan, penyimpanan, atau pelatihan yang terkait dengan pengoperasian, pemeliharaan, atau perbaikan peralatan dalam skenario banjir, kondisi badai, atau suhu yang lebih tinggi.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KBLI 68110 (C&RE - Real Estat yang Dimiliki Sendiri atau Disewa)
    "68110": {
      sektor: "Konstruksi dan Real Estate (C&RE)",
      nama: "Real Estat Yang Dimiliki Sendiri Atau Disewa",
      eoSupport: ["EO1", "EO2"],
      EO1_UMUM: {
        judul: "Real Estate atau Kawasan Pemukiman",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,8,4,9,45",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG)", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF)", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Bangunan gedung tersebut telah disertifikasi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Sertifikasi BGH dengan peringkat “Utama”", logic: "" },
                  { no: "2", text: "Sertifikasi internasional lainnya yang mencapai “Sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan mitigasi perubahan iklim termasuk dalam kategori energi", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG)", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF)", logic: "AND", subs: [] },
              { no: "3", text: "Bangunan gedung tersebut telah disertifikasi melalui program GBC yang kredibel dan diakui nasional atau internasional sebagaimana Tabel 5", logic: "AND", subs: [] },
              { no: "4", text: "Memiliki rencana peningkatan efisiensi energi (energy efficiency improvement plan) untuk bangunan gedung dengan ketentuan bahwa setelah implementasi akan mengarah pada pengurangan Energy Usage Intensity (EUI) saat ini.", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO1_MBR: {
        judul: "Real Estate atau Kawasan Pemukiman yang didalamnya terdapat rumah untuk Masyarakat Berpenghasilan Rendah (MBR)",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,8,4,9,45",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Aktivitas memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Bangunan gedung tersebut telah disertifikasi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Sertifikasi Bangunan Gedung Hijau (BGH) dengan perolehan peringkat atau pengakuan minimal “Madya”;", logic: "" },
                  { no: "2", text: "Sertifikasi dengan perolehan peringkat atau pengakuan minimal EDGE “Standard” atau Greenship “Silver”.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Aktivitas memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Bangunan gedung tersebut telah disertifikasi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Sertifikasi Bangunan Gedung Hijau (BGH);", logic: "" },
                  { no: "2", text: "Sertifikasi Greenship.", logic: "OR" }
                ]
              }
            ]
          }
        ]
      },
      EO2: {
        judul: "Real Estate atau Kawasan Pemukiman",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "Beberapa istilah berikut sebagaimana bagian C. Definisi terkait terminologi yang digunakan dalam TSC:\n“Program GBC yang kredibel dan diakui”\n“Tingkat sertifikasi lanjutan (advanced level of certification)”",
        pertanyaanHijau: [
          {
            text: "Aktivitas tersebut memenuhi salah satu atau semua kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Aktivitas ekonomi telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang material bagi aktivitas tersebut, sebagaimana dapat dibuktikan melalui program GBC yang kredibel dan diakui yang mencapai “sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan adaptasi perubahan iklim*;", logic: "", subs: [] },
              { no: "2", text: "Risiko iklim fisik yang penting bagi aktivitas tersebut telah diidentifikasi dengan melakukan Penilaian Climate Risk and Vulnerability Assessment (CRVA);", logic: "OR", subs: [] },
              { no: "3", text: "Proyeksi iklim dan penilaian dampak didasarkan pada praktik terbaik dan panduan yang tersedia serta mempertimbangkan ilmu pengetahuan untuk analisis kerentanan dan risiko serta metodologi sesuai dengan laporan Intergovernmental Panel on Climate Change (IPCC) tentang perubahan Iklim, publikasi ilmiah yang telah ditelaah oleh dilakukan peer-reviewed, open source atau paying models;", logic: "OR", subs: [] },
              {
                no: "4",
                text: "Solusi adaptasi yang diterapkan:",
                logic: "AND",
                subs: [
                  { no: "1", text: "tidak berdampak buruk pada upaya adaptasi atau tingkat ketahanan terhadap risiko iklim fisik terhadap manusia, alam, warisan budaya, aset, dan aktivitas ekonomi lainnya;", logic: "" },
                  { no: "2", text: "mengutamakan solusi berbasis alam atau mengandalkan infrastruktur berkelanjutan;", logic: "OR" },
                  { no: "3", text: "konsisten dengan rencana dan strategi adaptasi perubahan iklim di tingkat lokal, sektoral, regional atau nasional;", logic: "OR" },
                  { no: "4", text: "dipantau dan diukur berdasarkan indikator yang telah ditetapkan sebelumnya dan tindakan perbaikan dipertimbangkan jika indikator tersebut tidak terpenuhi;", logic: "OR" },
                  { no: "5", text: "jika solusi yang diterapkan bersifat fisik dan terdiri dari aktivitas yang telah ditentukan TSC, maka solusi tersebut memenuhi TSC yang tidak menimbulkan bahaya signifikan terhadap aktivitas tersebut.", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    },

    // KODE 112 (Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70)
    "112": {
      sektor: "Konstruksi dan Real Estate (C&RE)",
      nama: "Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70",
      eoSupport: ["EO1", "EO2"],
      EO1: {
        judul: "Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70",
        subJudul: "Mitigasi Perubahan Iklim",
        referensi: "7,8,9,45",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Konstruksi gedung baru atau kawasan hunian tempat tinggal memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Bangunan gedung tersebut telah disertifikasi:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Sertifikasi BGH dengan peringkat “Utama” (atau minimal “Madya” apabila untuk Masyarakat Berpenghasilan Rendah/MBR);", logic: "" },
                  { no: "2", text: "Sertifikasi internasional yang mencapai “sertifikasi tingkat lanjutan (advanced level of certification)” untuk tujuan mitigasi perubahan iklim termasuk dalam kategori energi (atau minimal EDGE “Standard” / Greenship “Silver” untuk MBR).", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: [
          {
            text: "Konstruksi gedung baru atau kawasan hunian tempat tinggal memenuhi/memiliki:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              { no: "3", text: "Bangunan gedung tersebut telah disertifikasi melalui program GBC yang kredibel dan diakui nasional atau internasional sebagaimana Tabel 5 (Buku TKBI).", logic: "AND", subs: [] }
            ]
          }
        ]
      },
      EO2: {
        judul: "Rumah Tangga Untuk Pemilikan Rumah Tinggal Tipe Diatas 21 s.d. 70",
        subJudul: "Adaptasi Perubahan Iklim",
        referensi: "7",
        keterangan: "-",
        pertanyaanHijau: [
          {
            text: "Memenuhi kriteria berikut:",
            logic: "",
            kriteria: [
              { no: "1", text: "Persetujuan Bangunan Gedung (PBG);", logic: "", subs: [] },
              { no: "2", text: "Sertifikat Laik Fungsi (SLF);", logic: "AND", subs: [] },
              {
                no: "3",
                text: "Aktivitas tersebut memenuhi salah satu atau semua kriteria berikut:",
                logic: "AND",
                subs: [
                  { no: "1", text: "Aktivitas ekonomi telah menerapkan solusi fisik dan non-fisik ('solusi adaptasi') yang secara substansial mengurangi risiko iklim fisik yang material bagi aktivitas tersebut, sebagaimana dapat dibuktikan melalui program GBC yang mencapai “sertifikasi tingkat lanjutan”;", logic: "" },
                  { no: "2", text: "Risiko iklim fisik yang penting bagi aktivitas tersebut telah diidentifikasi dengan melakukan Penilaian Climate Risk and Vulnerability Assessment (CRVA);", logic: "OR" },
                  { no: "3", text: "Proyek iklim dan penilaian dampak didasarkan pada praktik terbaik dan panduan yang tersedia sesuai laporan IPCC;", logic: "OR" }
                ]
              }
            ]
          }
        ],
        pertanyaanTransisi: []
      }
    }
  };

  // =============================================================================
  // 8. RESOLVER CERDAS TSC NON-UMKM
  // =============================================================================
  function dapatkanTSCNonUMKM(sektor, kbliTeks, dataSheet, eoPilihan) {
    let strKBLI = (kbliTeks || "").toString();
    let strLower = strKBLI.toLowerCase();
    let mCode = strKBLI.match(/\b\d{5}\b/) || strKBLI.match(/\b112\b/);
    let codeKey = mCode ? mCode[0] : "";

    let eoKey = "EO1";
    let eoTarget = (eoPilihan || (typeof state !== 'undefined' ? state.tujuanLingkungan : '') || "").toUpperCase();
    if (eoTarget.indexOf("EO2") !== -1 || eoTarget.indexOf("ADAPTASI") !== -1) eoKey = "EO2";
    else if (eoTarget.indexOf("EO3") !== -1 || eoTarget.indexOf("EKOSISTEM") !== -1) eoKey = "EO3";
    else if (eoTarget.indexOf("EO4") !== -1 || eoTarget.indexOf("SIRKULAR") !== -1) eoKey = "EO4";

    if (!codeKey) {
      if (strLower.indexOf("gedung baru") !== -1 || strLower.indexOf("existing/renovasi") !== -1) codeKey = "41015";
      else if (strLower.indexOf("stasiun pengisian") !== -1 || strLower.indexOf("instalasi listrik") !== -1) codeKey = "43211";
      else if (strLower.indexOf("menunjang angkutan darat") !== -1 || strLower.indexOf("mobilitas pribadi") !== -1 || strLower.indexOf("terminal darat") !== -1) codeKey = "52211";
      else if (strLower.indexOf("kawasan pemukiman") !== -1 || strLower.indexOf("mbr") !== -1) codeKey = "68110";
      else if (strLower.indexOf("angkutan laut") !== -1 || strLower.indexOf("retrofit") !== -1) codeKey = "50131";
      else if (strLower.indexOf("peralatan efisiensi energi") !== -1 || strLower.indexOf("peralatan listrik") !== -1) codeKey = "27510";
    }

    let selectedRes = null;

    if (codeKey && TSC_PRIORITAS_KBLI[codeKey]) {
      let pObj = TSC_PRIORITAS_KBLI[codeKey];

      if (codeKey === "41015" && eoKey === "EO1") {
        selectedRes = (strLower.indexOf("renovasi") !== -1 || strLower.indexOf("existing") !== -1) ? pObj.EO1_RENOVASI : pObj.EO1_BARU;
      } else if (codeKey === "43211" && eoKey === "EO1") {
        selectedRes = (strLower.indexOf("stasiun pengisian") !== -1 || strLower.indexOf("kendaraan listrik") !== -1) ? pObj.EO1_SPKLU : pObj.EO1_INSTALASI;
      } else if (codeKey === "52211" && eoKey === "EO1") {
        selectedRes = (strLower.indexOf("mobilitas pribadi") !== -1 || strLower.indexOf("sepeda") !== -1) ? pObj.EO1_SEPEDA : pObj.EO1_DARAT;
      } else if (codeKey === "68110" && eoKey === "EO1") {
        selectedRes = (strLower.indexOf("mbr") !== -1 || strLower.indexOf("berpenghasilan rendah") !== -1) ? pObj.EO1_MBR : pObj.EO1_UMUM;
      } else {
        selectedRes = pObj[eoKey] || pObj[pObj.eoSupport[0]];
      }
    }

    if (!selectedRes && dataSheet && dataSheet.pertanyaanHijau && dataSheet.pertanyaanHijau.length > 0) {
      selectedRes = dataSheet;
    }

    if (selectedRes) {
      let copyRes = Object.assign({}, selectedRes);
      copyRes.referensi = formatReferensiOJK(copyRes.referensi);
      return copyRes;
    }

    return {
      judul: `Technical Screening Criteria: ${kbliTeks || sektor}`,
      subJudul: "Memenuhi kriteria teknis kontribusi substansial:",
      referensi: "-",
      keterangan: "-",
      pertanyaanHijau: [
        {
          text: "Memenuhi kriteria berikut:",
          logic: "",
          kriteria: [
            { no: "1", text: "Memenuhi ambang batas teknis pengurangan emisi GRK atau efisiensi sumber daya sesuai Buku Panduan TKBI Versi 3;", logic: "", subs: [] },
            { no: "2", text: "Memiliki perizinan berusaha dan sertifikasi keberlanjutan sektoral yang berlaku.", logic: "AND", subs: [] }
          ]
        }
      ],
      pertanyaanTransisi: []
    };
  }
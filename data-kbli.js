/**
 * BASIS DATA LENGKAP KBLI & SUB-AKTIVITAS DARI 8 SEKTOR TKBI OJK
 * Dituangkan persis seperti isi file teks asli tanpa penambahan nomor buatan
 */
const KBLI_DATA_SEKTOR = {
  "Energi": `D-Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin
35-Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin
351-Ketenagalistrikan
3510-Ketenagalistrikan
35101-Pembangkitan Tenaga Listrik
Tenaga surya
Tenaga angin
Tenaga gelombang laut
Tenaga air
Panas bumi
Tenaga bioenergi
Tenaga gas (termasuk gas dan uap)
Batu bara - Aktivitas percepatan pengakhiran masa operasional PLTU
Tenaga nuklir
Gas hidrogen
Storage of electricity (termasuk pumped storage)
Batu bara - Aktivitas PLTU Baru
Batu bara - Aktivitas PLTU Existing
Tenaga Sampah
35102-Transmisi Tenaga Listrik
35103-Distribusi Tenaga Listrik
35104-Aktivitas Penunjang Kelistrikan
Jasa Konservasi/Efisiensi Energi
Aktivitas Penunjang Kelistrikan
352-Pengadaan dan Distribusi Gas Alam dan Buatan
3520-Pengadaan dan Distribusi Gas Alam dan Buatan
35202-Distribusi Gas Alam dan Buatan
35301-Pengadaan Uap/Air Panas dan Dingin
Energi surya
Energi panas bumi
Bahan bakar gas dan cair non-fosil terbarukan
Fossil gas
Limbah panas
Pompa panas listrik (electric heat pump)
35203-Pengadaan Gas Bio
Penangkapan dan Pemanfaatan Gas TPA
B-Pertambangan dan Penggalian
07-Pertambangan Bijih Logam
071-Pertambangan Pasir Besi dan Bijih Besi
0710-Pertambangan Pasir Besi dan Bijih Besi
07101-Pertambangan Pasir Besi
07102-Pertambangan Bijih Besi
072-Pertambangan Bijih Logam Yang Tidak Mengandung Besi, Tidak Termasuk Bijih Logam Mulia
0729-Pertambangan Bijih Logam Lainnya Yang Tidak Mengandung Besi, Tidak Termasuk Bijih Logam Mulia
07292-Pertambangan Bijih Timah Hitam
07293-Pertambangan Bijih Bauksit/Aluminium
07294-Pertambangan Bijih Tembaga
07295-Pertambangan Bijih Nikel
07296-Pertambangan Bijih Mangan
07299-Pertambangan Bahan Galian Lainnya yang Tidak Mengandung Bijih Besi
08-Pertambangan dan Penggalian Lainnya
089-Pertambangan dan Penggalian Lainnya YTDL
0899-Pertambangan dan Penggalian Lainnya YTDL
08995-Penggalian Kuarsa/Pasir Kuarsa
08999-Pertambangan dan Penggalian Lainnya YTDL
Logam Tanah Jarang
09-Aktivitas Jasa Penunjang Pertambangan
099-Aktivitas Penunjang Pertambangan dan Penggalian Lainnya
0990-Aktivitas Penunjang Pertambangan dan Penggalian Lainnya
09900-Aktivitas Penunjang Pertambangan dan Penggalian Lainnya`,

  "Konstruksi dan Real Estate (C&RE)": `F-Konstruksi
41-Konstruksi Gedung
410-Konstruksi Gedung
4101-Konstruksi Gedung
41011-Konstruksi Gedung Tempat Tinggal
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
Gedung tempat tinggal untuk Masyarakat Berpenghasilan Rendah (MBR)
41012-Konstruksi Gedung Perkantoran
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41013-Konstruksi Gedung Industri
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41014-Konstruksi Gedung Perbelanjaan
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41015-Konstruksi Gedung Kesehatan
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41016-Konstruksi Gedung Pendidikan
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41017-Konstruksi Gedung Penginapan
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41018-Konstruksi Gedung Tempat Hiburan dan Olahraga
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41019-Konstruksi Gedung Lainnya
Konstruksi Gedung Baru
Konstruksi Gedung Existing/Renovasi
41020 -Pemasangan Bangunan Prapabrikasi Gedung
42-Konstruksi Bangunan Sipil
421-Konstruksi Jalan dan Jalan Rel
4211-Konstruksi Jalan dan Jalan Rel
42111-Konstruksi Jalan Raya
42112-Konstruksi Jembatan dan Jalan Layang
42114-Konstruksi Jalan Rel dan Jembatan Rel
42115-Konstruksi Terowongan
4212-Pemasangan Bangunan Prapabrikasi Untuk Konstruksi Jalan dan Jalan Rel
42120-Pemasangan Bangunan Prapabrikasi Untuk Konstruksi Jalan dan Jalan Rel
422-Konstruksi Jaringan Irigasi, Komunikasi dan Limbah
4221-Konstruksi Jaringan Irigasi, Komunikasi dan Limbah
42211-Konstruksi Jaringan Irigasi
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Pencegahan dan Perlindungan Risiko Banjir Atau Kekeringan, Termasuk Solusi Berbasis Alam
42214-Konstruksi Telekomunikasi Sarana Bantu Navigasi Laut dan Rambu Sungai
42215-Konstruksi Telekomunikasi Navigasi Udara
42216-Konstruksi Sinyal dan Telekomunikasi Kereta Api
42212 -Konstruksi Bangunan Pengolahan, Penyaluran dan Penampungan Air Minum, Air Limbah dan Drainase
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Pembaruan Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Pencegahan dan Perlindungan Risiko Banjir Atau Kekeringan, Termasuk Solusi Berbasis Alam
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan dan Pengolahan Air Limbah
Pembaruan Sistem Pengumpulan dan Pengolahan Air Limbah
4222-Pemasangan Bangunan Prapabrikasi Untuk Konstruksi Jaringan Saluran Irigasi, Komunikasi dan Limbah
42220-Pemasangan Bangunan Prapabrikasi Untuk Konstruksi Jaringan Saluran Irigasi, Komunikasi dan Limbah
429-Konstruksi Bangunan Sipil Lainnya
4291-Konstruksi Bangunan Sipil Lainnya
42911-Konstruksi Bangunan Prasarana Sumber Daya Air
Pembangunan dan pengelolaan bendungan
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Pembaruan Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Pencegahan dan Perlindungan Risiko Banjir Atau Kekeringan, Termasuk Solusi Berbasis Alam
42912 -Konstruksi Bangunan Pelabuhan Bukan Perikanan
Pembangunan dan pengelolaan bendungan
42913 -Konstruksi Bangunan Pelabuhan Perikanan
Pembangunan dan pengelolaan bendungan
42919 -Konstruksi Bangunan Sipil Lainnya YTDL
42915-Pengerukan
Pencegahan dan Perlindungan Risiko Banjir Atau Kekeringan, Termasuk Solusi Berbasis Alam
43-Konstruksi Khusus
431-Pembongkaran dan Penyiapan Lahan
4311-Pembongkaran
43110-Pembongkaran
Dokumen Rencana Teknis Pembongkaran (RTB)
4312-Penyiapan Lahan
43120-Penyiapan Lahan
Dokumen Rencana Teknis Pembongkaran (RTB)
432-Instalasi Sistem Kelistrikan, Air (Pipa) dan Instalasi Konstruksi Lainnya
4321-Instalasi Sistem Kelistrikan
43211-Instalasi Listrik
Pemeliharaan dan Perbaikan untuk Energi Baru dan Terbarukan yang merupakan bagian dari sebuah bangunan hunian
Stasiun Pengisian Kendaraan Listrik
43217-Instalasi Elektronika
Instalasi, Pemeliharaan, Perbaikan pengukuran, pengaturan dan pengendalian kinerja energi
43212-Instalasi Telekomunikasi
Terkait dengan Early Warning System (EWS)
43213-Instalasi Navigasi Laut dan Sungai
Terkait dengan Early Warning System (EWS)
43214-Instalasi Navigasi Udara
Terkait dengan Early Warning System (EWS)
43215-Instalasi Sinyal dan Telekomunikasi Kereta Api
Terkait dengan Early Warning System (EWS)
4322-Instalasi Saluran Air (Plambing), Pemanas dan Pendingin
43221-Instalasi Saluran Air (Plambing)
43224-Instalasi Pendinginan dan Ventilasi Udara
4329-Instalasi Konstruksi Lainnya
43291-Instalasi Mekanikal
Instalasi, Pemeliharaan, Perbaikan pengukuran, pengaturan dan pengendalian kinerja energi
433-Penyelesaian Kontruksi Bangunan
4330-Penyelesaian konstruksi banguna
43301-Pengerjaan Pemasangan Kaca dan Aluminium
Instalasi, pemeliharaan, perbaikan peralatan efisiensi energi (energy efficient equipment)
43302-Pengerjaan Lantai, Dinding, Peralatan Saniter dan Plafon
Instalasi, pemeliharaan, perbaikan peralatan efisiensi energi (energy efficient equipment)
43304-Dekorasi Interior
Instalasi, pemeliharaan, perbaikan peralatan efisiensi energi (energy efficient equipment)
43305-Dekorasi Eksterior
Instalasi, pemeliharaan, perbaikan peralatan efisiensi energi (energy efficient equipment)
L-Real estate
68-Real estate
681-Real estate Yang Dimiliki Sendiri atau Disewa dan Kawasan Pariwisata
6811-Real estate Yang Dimiliki Sendiri atau Disewa
68110-Real estate yang Dimiliki Sendiri atau Disewa
Real Estate atau Kawasan Pemukiman
Real Estate atau Kawasan Pemukiman yang didalamnya terdapat rumah untuk Masyarakat Berpenghasilan Rendah (MBR)`,

  "Pengangkutan dan Pergudangan (T&S)": `H-Pengangkutan dan Pergudangan
49-Angkutan Darat dan Angkutan Melalui Saluran Pipa
492-Angkutan Bus
4921-Angkutan Bus Dalam Trayek
49211-Angkutan Bus Antarkota Antar Provinsi (AKAP)
49212-Angkutan Bus Perbatasan
49213 -Angkutan Bus Antarkota Dalam Provinsi (AKDP)
49214 -Angkutan Bus Kota
49215-Angkutan Bus Lintas Batas Negara
49216-Angkutan Bus Khusus
49219-Angkutan Bus Bertrayek Lainnya
4922-Angkutan Bus Tidak Dalam Trayek
49221-Angkutan Bus Pariwisata
49229 -Angkutan Bus Tidak Bertrayek Lainnya
494-Angkutan Darat Bukan Bus
4941-Angkutan Darat Bukan Bus Untuk Penumpang, Dalam Trayek
49411 -Angkutan Perbatasan Bukan Bus, Bertrayek
49412-Angkutan Antarkota Dalam Provinsi (AKDP) Bukan Bus, Bertrayek
49414 -Angkutan Perdesaan Bukan Bus, Bertrayek
49415-Angkutan Darat Khusus Bukan Bus
49419 -Angkutan Darat Bukan Bus Untuk Penumpang Lainnya, Dalam Trayek
49110 -Angkutan Jalan Rel Jarak Jauh Untuk Penumpang
4942-Angkutan darat lainnya untuk penumpang
49421-Angkutan Taksi
49422-Angkutan Sewa
49424 -Angkutan Ojek Motor
49425 -Angkutan Darat Wisata
49429-Angkutan Darat Lainnya Untuk Penumpang
49423-Angkutan Tidak Bermotor Untuk Penumpang
4943-Angkutan Darat Untuk Barang
49431-Angkutan Bermotor Untuk Barang Umum
49432-Angkutan Bermotor Untuk Barang Khusus
49433- Angkutan Tidak Bermotor Untuk Barang Umum
4944-Angkutan Jalan Rel Perkotaan dan Wisata Untuk Penumpang
49441-Angkutan Jalan Rel Perkotaan
49442-Angkutan Jalan Rel Wisata
4945-Angkutan Jalan Rel Lainnya
49450 -Angkutan Jalan Rel Lainnya
491-Angkutan Jalan Rel
4911-Angkutan Jalan Rel Jarak Jauh Untuk Penumpang
4912-Angkutan Jalan Rel untuk Barang
49120 -Angkutan Jalan Rel Untuk Barang
52-Pergudangan dan Aktivitas Penunjang Angkutan
522-Aktivitas Penunjang Angkutan
5221-Aktivitas Penunjang Angkutan Darat
52211-Aktivitas Terminal Darat
Menunjang angkutan darat
Penunjang mobilitas pribadi dan sepeda
52213-Aktivitas Jalan Tol
Menunjang angkutan darat
Penunjang mobilitas pribadi dan sepeda
52214-Aktivitas Perparkiran di Badan Jalan (On Street Parking)
Menunjang angkutan darat
Penunjang mobilitas pribadi dan sepeda
52215-Aktivitas Perparkiran di Luar Badan Jalan (Off Street Parking)
Menunjang angkutan darat
Penunjang mobilitas pribadi dan sepeda
52219 -Aktivitas Penunjang Angkutan Darat Lainnya
Menunjang angkutan darat
Penunjang mobilitas pribadi dan sepeda
52212-Aktivitas Stasiun Kereta Api
5229-Aktivitas Penunjang Angkutan Lainnya
52292 -Aktivitas Ekspedisi Muatan Kereta Api dan Ekspedisi Angkutan Darat (EMKA & EAD)
52293 -Aktivitas Ekspedisi Muatan Kapal Laut (EMKL)
52294-Aktivitas Ekspedisi Muatan Pesawat Udara (EMPU)
52291-Jasa Pengurusan Transportasi (JPT)
52299-Aktivitas Penunjang Angkutan Lainnya YTDL
52295-Angkutan Multimoda
5222-Aktivitas Penunjang Angkutan Perairan
52221-Aktivitas Pelayanan Kepelabuhanan Laut
52222 -Aktivitas Pelayanan Kepelabuhanan Sungai dan Danau
52223-Aktivitas Pelayanan Kepelabuhanan Penyeberangan
52225 -Aktivitas Pengelolaan Kapal
52229 -Aktivitas Penunjang Angkutan Perairan Lainnya
5223-Aktivitas Kebandarudaraan dan Jasa Pelayanan Navigasi Penerbangan
52230 -Aktivitas Kebandarudaraan
5224-Penanganan Kargo (Bongkar Muat Barang)
52240-Penanganan Kargo (Bongkar Muat Barang)
50-Angkutan Perairan
501-Angkutan Laut
5011-Angkutan Laut Dalam Negeri Untuk Penumpang
50111-Angkutan Laut Dalam Negeri Liner dan Tramper untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50112-Angkutan Laut Dalam Negeri Tramper Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50113-Angkutan Laut Dalam Negeri Untuk Wisata
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50114 -Angkutan Laut Dalam Negeri Perintis untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
5012-Angkutan Laut Luar Negeri Untuk Penumpang
50121-Angkutan Laut Luar Negeri Liner Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50122-Angkutan Laut Luar Negeri Tramper Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50123 -Angkutan Laut Luar Negeri Untuk Wisata
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
5013-Angkutan Laut Dalam Negeri Untuk Barang
50131 -Angkutan Laut Dalam Negeri Liner Untuk Barang
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50132-Angkutan Laut Dalam Negeri Tramper Untuk Barang
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50133-Angkutan Laut Dalam Negeri Untuk Barang Khusus
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50134-Angkutan Laut Dalam Negeri Perintis Untuk Barang
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50135 -Angkutan Laut Dalam Negeri Pelayaran Rakyat
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
5014-Angkutan Laut Luar Negeri Untuk Barang
50141 -Angkutan Laut Dalam Negeri Liner Untuk Barang
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50142 -Angkutan Laut Dalam Negeri Tramper Untuk Barang
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50143 -Angkutan Laut Luar Negeri Untuk Barang Khusus
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
50144-Angkutan Laut Luar Negeri Pelayaran Rakyat
Angkutan laut atau pesisir mengangkut barang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk barang
502-Angkutan Sungai, Danau dan Penyeberangan
5021-Angkutan Sungai, Danau dan Penyeberangan Untuk Penumpang
50214 -Angkutan Penyeberangan Antarprovinsi Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50215 -Angkutan Penyeberangan Perintis Antarprovinsi Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50216 -Angkutan Penyeberangan Antarkabupaten/Kota Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50217-Angkutan Penyeberangan Perintis Antarkabupaten/Kota Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50218-Angkutan Penyeberangan Dalam Kabupaten/Kota Untuk Penumpang
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50219 -Angkutan Penyeberangan Lainnya Untuk Penumpang Termasuk Penyeberangan Antarnegara
Angkutan laut atau pesisir mengangkut penumpang
Retrofit (perbaikan/penguatan) angkutan laut dan pesisir untuk penumpang
50211-Angkutan Sungai dan Danau Liner (Trayek Tetap dan Teratur) Untuk Penumpang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk penumpang
Aktivitas angkutan sungai, danau dan penyeberangan untuk penumpang
50212-Angkutan Sungai dan Danau Tramper (Trayek Tidak Tetap Dan Tidak Teratur) Untuk Penumpang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk penumpang
Aktivitas angkutan sungai, danau dan penyeberangan untuk penumpang
50213 -Angkutan Sungai dan Danau Untuk Wisata dan YBDI
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk penumpang
Aktivitas angkutan sungai, danau dan penyeberangan untuk penumpang
5022-Angkutan Sungai, Danau dan Penyeberangan Untuk Barang
50221 -Angkutan Sungai dan Danau Untuk Barang Umum Dan Atau Hewan
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50222 -Angkutan Sungai dan Danau untuk Barang Khusus
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50223-Angkutan Sungai dan Danau untuk Barang Berbahaya
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50224 -Angkutan Penyeberangan Umum Antarprovinsi untuk Barang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50225-Angkutan Penyeberangan Perintis Antarprovinsi untuk Barang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50226 -Angkutan Penyeberangan Umum Antarkabupaten/Kota untuk Barang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50227-Angkutan Penyeberangan Perintis Antarkabupaten/Kota untuk Barang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50228-Angkutan Penyeberangan Umum Dalam Kabupaten/Kota untuk Barang
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang
50229 -Angkutan Penyeberangan Lainnya Untuk Barang Termasuk Penyeberangan Antarnegara
Retrofit (perbaikan/penguatan) angkutan sungai, danau dan penyeberangan untuk barang
Angkutan sungai, danau dan penyeberangan untuk barang`,

  "Pertanian, Kehutanan, dan Perikanan (AFF)": `A-Pertanian, Kehutanan dan Perikanan
02-Kehutanan dan Pemanenan Kayu dan Hasil Hutan Selain Kayu
021-Pengusahaan Hutan
0212-Pengusahaan Hutan Alam
02120 -Pengusahaan Hutan Alam
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
0211-Pengusahaan Hutan Tanaman
02111-Pengusahaan Hutan Jati
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02112-Pengusahaan Hutan Pinus
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02113-Pengusahaan Hutan Mahoni
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02114-Pengusahaan Hutan Sonokeling
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02115-Pengusahaan Hutan Sengon/Albasia/Jeunjing
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02116-Pengusahaan Hutan Cendana
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02117-Pengusahaan Hutan Akasia
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02118-Pengusahaan Hutan Ekaliptus
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02119-Pengusahaan Hutan Lainnya
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
0213-Pengusahaan Hasil Hutan Bukan Kayu Pengusahaan Rotan
02131 -Pengusahaan Rotan
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02132-Pengusahaan Getah Pinus
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02133-Pengusahaan Daun Kayu Putih
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02134-Pengusahaan Bambu
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02135-Pengusahaan Damar
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02136-Pengusahaan Gaharu
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02139-Pengusahaan Hutan Bukan Kayu Lainnya
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
0214-Pengusahaan Pembibitan Tanaman Kehutanan
02141-Pengusahaan Pembibitan Tanaman Jati
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02142-Pengusahaan Pembibitan Tanaman Pinus
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02143-Pengusahaan Pembibitan Tanaman Mahoni
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02144-Pengusahaan Pembibitan Tanaman Sonokeling
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02145-Pengusahaan Pembibitan Tanaman Sengon/Albasia/Jeunjing
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02146-Pengusahaan Pembibitan Tanaman Jabon
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02147-Pengusahaan Pembibitan Tanaman Akasia
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02148-Pengusahaan Pembibitan Tanaman Ekaliptus
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
02149-Pengusahaan Pembibitan Tanaman Kehutanan Lainnya
Pengusahaan Perbenihan Tanaman Kehutanan pada Hutan Produksi, Hutan Lindung, dan Hutan Konservasi
022 -Pemanenan dan Pemungutan Kayu
0220 -Pemanenan Kayu
02201 -Pemanenan Kayu
PBPH atau Hak Pengelolaan Pemanfaatan HHK di Hutan Produksi serta Pemanenan Kayu
Pemanenan Kayu yang berupa Pemanfaatan Kayu Kegiatan Non Kehutanan (PKKNK)
02209-Usaha Kehutanan Lainnya
Jasa Lingkungan Panas Bumi Tahap Eksplorasi pada Kawasan Konservasi
Jasa Lingkungan Panas Bumi Tahap Eksploitasi dan Pemanfaatan pada Kawasan Konservasi
Jasa Lingkungan Air pada Kawasan Konservasi (termasuk skala Mikro, Kecil, Menengah, Besar)
Jasa Lingkungan Energi Air pada Kawasan Konservasi (termasuk skala Mikro, Kecil, Menengah, Besar)
Pengusahaan Sarana Jasa Lingkungan Wisata Alam pada Kawasan Konservasi
Pemanfaatan Kawasan pada Hutan Produksi dan Hutan Lindung
Penyimpanan dan Penyerapan Karbon pada Hutan Produksi dan Hutan Lindung
023-Pemungutan Hasil Hutan Bukan Kayu
0230-Pemungutan Hasil Hutan Bukan Kayu
02301 -Pemungutan Getah Karet
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02302 -Pemungutan Rotan
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02303-Pemungutan Getah Pinus
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02304-Pemungutan Daun Kayu Putih
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02305-Pemungutan Kokon/Kepompong Ulat Sutera
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02306-Pemungutan Damar
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02307-Pemungutan Madu
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02308-Pemungutan Bambu
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
02309-Pemungutan Bukan Kayu Lainnya
PBPH Pemanfaatan Hasil Hutan Bukan Kayu di Hutan Produksi dan Hutan Lindung
024-Jasa Penunjang Kehutanan
0240-Jasa Penunjang Kehutanan
02402-Jasa Perlindungan hutan dan Konservasi Alam
01-Pertanian Tanaman, Peternakan, Perburuan dan Kegiatan YBDI
012-Pertanian Tanaman Tahunan
0126-Perkebunan Buah-Buahan Penghasil Minyak (Oleaginous)
01262-Perkebunan Buah Kelapa Sawit
01261-Perkebunan Buah Kelapa
01269-Perkebunan Buah Oleaginous Lainnya
0121-Pertanian Buah Anggur
01210-Pertanian Buah Anggur
0122-Pertanian Buah-Buahan Tropis dan Subtropis
01220-Pertanian Buah-Buahan Tropis dan Subtropis
0123-Pertanian Buah Jeruk
01230-Pertanian Buah Jeruk
0124-Pertanian Buah Apel dan Buah Batu (Pome And Stone Fruits)
01240-Pertanian Buah Apel dan Buah Batu (Pome And Stone Fruits)
0125-Pertanian Sayuran dan Buah Semak dan Buah Biji Kacang-Kacangan Lainnya
01251-Pertanian Buah Beri
01252-Pertanian Buah Biji Kacang-Kacangan
01253-Pertanian Sayuran Tahunan
01259-Pertanian Buah Semak Lainnya
0127-Pertanian Tanaman untuk Bahan Minuman
01270-Pertanian Tanaman untuk Bahan Minuman
0128-Perkebunan Tanaman Rempah-Rempah, Aromatik/Penyegar, Narkotik dan Obat
01281-Perkebunan Lada
01282-Perkebunan Cengkeh
01283-Pertanian Cabai
01284-Perkebunan Tanaman Aromatik/Penyegar
01285-Pertanian Tanaman Obat atau Biofarmaka Rimpang
01286-Pertanian Tanaman Obat atau Biofarmaka Non Rimpang
01289-Pertanian Tanaman Rempah-Rempah, Aromatik/Penyegar, dan Obat Lainnya
0129-Perkebunan Tanaman Tahunan Lainnya
01291-Perkebunan Karet dan Tanaman Penghasil Getah Lainnya
01299-Pertanian Cemara dan Tanaman Tahunan Lainnya
011-Pertanian Tanaman Semusim
0111-Pertanian Serealia (Bukan Padi), Aneka Kacang dan Biji-Bijian Penghasil Minyak
01111-Pertanian Jagung
01112-Pertanian Gandum
01113-Pertanian Kedelai
01114 -Pertanian Kacang Tanah
01115 -Pertanian Kacang Hijau
01116-Pertanian Aneka Kacang Hortikultura
01117-Pertanian Biji-Bijian Penghasil Minyak Makan
01118-Pertanian Biji-Bijian Penghasil Bukan Minyak Makan
01119-Pertanian Serealia Lainnya, Aneka Kacang dan Biji-Bijian Penghasil Minyak Lainnya
0112-Pertanian Padi
01121-Pertanian Padi Hibrida
01122-Pertanian Padi Inbrida
0113-Pertanian Sayuran, Buah dan Aneka Umbi
01131-Pertanian Hortikultura Sayuran Daun
01132-Pertanian Hortikultura Buah
01133-Pertanian Hortikultura Sayuran Buah
01134-Pertanian Hortikultura Sayuran Umbi
01135-Pertanian Aneka Umbi Palawija
01136-Pertanian Jamur
01137-Pertanian Bit Gula dan Tanaman Pemanis Bukan Tebu
01139 -Pertanian Hortikultura Sayuran Lainnya
0114-Perkebunan Tebu
01140-Perkebunan Tebu
0115-Perkebunan Tembakau
01150-Perkebunan Tembakau Kelompok
0116-Pertanian Tanaman Berserat
01160-Pertanian Tanaman Berserat
0119 -Pertanian Tanaman Semusim Lainnya
01191-Pertanian Tanaman Rumput-Rumputan dan Tanaman Pakan Ternak
01192-Pembibitan Bit (Bukan Bit Gula) dan Bibit Tanaman Pakan Ternak
01193-Pertanian Tanaman Bunga
01194-Pertanian Pembibitan Tanaman Bunga
01199-Pertanian Tanaman Semusim Lainnya YTDL
013-Pertanian Tanaman Hias dan Pengembangbiakan Tanaman
0130-Pertanian Tanaman Hias dan Pengembangbiakan Tanaman
01301-Pertanian Tanaman Hias
01302-Pertanian Pengembangbiakan Tanaman
016-Jasa Penunjang Pertanian dan Pasca Panen
0161-Jasa Penunjang Pertanian
01611-Jasa Pengolahan Lahan
01612-Jasa Pemupukan, Penanaman Bibit/Benih dan Pengendalian Hama dan Gulma
01613-Jasa Pemanenan
01614-Jasa Penyemprotan dan Penyerbukan melalui Udara
01619-Jasa Penunjang Pertanian Lainnya
0163-Jasa Pasca Panen
01630-Jasa Pasca Panen
0164-Pemilihan Benih Tanaman untuk Pengembangbiakan
01640-Pemilihan Benih Tanaman untuk Pengembangbiakan
0162-Jasa Penunjang Peternakan
01621-Jasa Pelayanan Kesehatan Ternak
01622-Jasa Perkawinan Ternak
01623-Jasa Penetasan Telur
01629-Jasa Penunjang Peternakan Lainnya
014-Peternakan
0141-Peternakan Sapi dan Kerbau
01411-Pembibitan dan Budidaya Sapi Potong
01412-Pembibitan dan Budidaya Sapi Perah
01413-Pembibitan dan Budidaya Kerbau Potong
01414-Pembibitan dan Budidaya Kerbau Perah
0142-Peternakan Kuda dan Sejenisnya
01420-Peternakan Kuda dan Sejenisnya
0143-Peternakan Unta dan Sejenisnya
01430-Peternakan unta dan sejenisnya
0144-Peternakan Domba dan Kambing
01441-Pembibitan dan Budidaya Domba
01442-Pembibitan dan Budidaya Kambing Potong
01443-Pembibitan dan Budidaya Kambing Perah
0145-Peternakan Babi
01450-Peternakan Babi
0146-Peternakan Unggas
01461-Budidaya Ayam Ras Pedaging
01462-Budidaya Ayam Ras Petelur
01463-Pembibitan dan Budidaya Ayam Buras
01464-Pembibitan dan Budidaya Itik dan Itik Manila
01465-Pembibitan dan Budidaya Kalkun
01466-Pembibitan dan Budidaya Burung Puyuh
01467-Pembibitan dan Budidaya Burung Merpati
01468-Pembibitan Ayam Ras
01469-Pembibitan dan Budidaya Ternak Unggas Lainnya
0149-Peternakan Lainnya
01491-Pembibitan dan Budidaya Burung Unta
01492-Pengusahaan Kokon/Kepompong Ulat Sutera
01493-Pembibitan dan Budidaya Lebah
01494-Pembibitan dan Budidaya Rusa
01495-Pembibitan dan Budidaya Kelinci
01496-Pembibitan dan Budidaya Cacing
01499-Pembibitan dan Budidaya Aneka Ternak Lainnya
017-Perburuan, Penangkapan dan Penangkaran Tumbuhan/ Satwa Liar
0172-Panangkaran Tumbuhan/Satwa Liar
01721-Penangkaran Primata
01722-Penangkaran Mamalia
01723-Penangkaran Reptil
01724-Penangkaran Burung
01725-Penangkaran Insekta
01726-Penangkaran Anggrek
01727-Penangkaran Ikan dan Coral/Karang
01729-Penangkaran Tumbuhan/Satwa Liar Lainnya
03-Perikanan
031-Perikanan Tangkap
0311-Penangkapan Ikan di Laut
03111-Penangkapan Pisces/Ikan Bersirip di Laut
03112-Penangkapan Krustasea di Laut
03113-Penangkapan Mollusca di Laut
03114-Penangkapan/Pengambilan Tumbuhan Air di Laut
03115-Penangkapan/Pengambilan Induk/Benih Ikan di Laut
03116-Penangkapan Echinodermata di Laut
03117-Penangkapan Coelenterata di Laut
03118-Penangkapan Ikan Hias Laut
03119-Penangkapan Biota Air Lainnya di Laut
0312-Penangkapan Ikan di Perairan Umum
03121-Penangkapan Pisces/Ikan Bersirip di Perairan Umum
03122-Penangkapan Krustasea di Perairan Umum
03123-Penangkapan Mollusca di Perairan Umum
03124-Penangkapan/Pengambilan Tumbuhan Air di Perairan Umum
03125-Penangkapan/Pengambilan Induk/Benih Ikan di Perairan Umum
03126-Penangkapan Ikan Hias di Perairan Umum
03129 -Penangkapan Biota Air Lainnya di Perairan Umum
0313-Jasa Penangkapan Ikan di Laut
03131-Jasa Sarana Produksi Penangkapan Ikan di Laut
03132-Jasa Produksi Penangkapan Ikan di Laut
03133-Jasa Pasca Panen Penangkapan Ikan di Laut
0314-Jasa Penangkapan Ikan di Perairan Umum
03141-Jasa Sarana Produksi Penangkapan Ikan di Perairan Umum
03142-Jasa Produksi Penangkapan Ikan di Perairan Umum
03143-Jasa Pasca Panen Penangkapan Ikan di Perairan Umum
032-Perikanan Budidaya
0321-Budidaya Ikan Laut
03211-Pembesaran Pisces/ Ikan Bersirip Laut
03212-Pembenihan Ikan Laut
03213-Budidaya Ikan Hias Air Laut
03214-Budidaya Karang (Coral)
03215-Pembesaran Mollusca Laut
03216-Pembesaran Krustasea Laut
03217-Pembesaran Tumbuhan air Laut
03219-Budidaya Biota Air Laut Lainnya
0322-Budidaya Ikan Air Tawar
03221-Pembesaran Ikan Air Tawar di Kolam
03222-Pembesaran Ikan Air Tawar di Karamba Jaring Apung/Karamba Jaring Tancap
03223-Pembesaran Ikan Air Tawar di Karamba
03224-Pembesaran Ikan Air Tawar di Sawah
03225-Budidaya Ikan Hias Air Tawar
03226-Pembenihan Ikan Air Tawar
03229-Budidaya Ikan Air Tawar Di Media Lainnya
0323-Jasa Budidaya Ikan Laut
03231-Jasa Sarana Produksi Budidaya Ikan Laut
03232-Jasa Produksi Budidaya Ikan Laut
03233-Jasa Pasca Panen Budidaya Ikan Laut
0325-Budidaya Ikan Air Payau
03251-Pembesaran Pisces/Ikan Bersirip Air Payau
03252-Pembenihan Ikan Air Payau
03253-Pembesaran Mollusca Air Payau
03254-Pembesaran Krustasea Air Payau
03255-Pembesaran Tumbuhan Air Payau
03259-Budidaya Biota Air Payau Lainnya
0324-Jasa Budidaya Ikan Air Tawar
03241-Jasa Sarana Produksi Budidaya Ikan Air Tawar
03242-Jasa Produksi Budidaya Ikan Air Tawar
03243-Jasa Pasca Panen Budidaya Ikan Air Tawar
0326-Jasa Budidaya Ikan Air Payau
03261-Jasa Sarana Produksi Budidaya Ikan Air Payau
03262-Jasa Produksi Budidaya Ikan Air Payau
03263-Jasa Pasca Panen Budidaya Ikan Air Payau
R-Kesenian, Hiburan dan Rekreasi
91-Perpustakaan, Arsip, Museum dan Kegiatan Kebudayaan Lainnya
910-Perpustakaan, Arsip, Museum dan Kegiatan Kebudayaan Lainnya
9103-Aktivitas Kebun Binatang, Taman Botani dan Cadagan Alam
91032-Taman Nasional
91033-Taman Hutan Raya (Tahura)
91034-Taman Wisata Alam
91035-Suaka Margasatwa (SM) dan Cagar Alam (CA)
91037-Taman Buru, Kebun Buru dan Areal`,

  "Informasi dan Komunikasi (IC)": `J-Informasi Dan Komunikasi
58-Aktivitas Penerbitan
581-Aktivitas Penerbitan Buku, Majalah, dan Terbitan Lainnya
5811-Penerbitan Buku
58110 -Penerbitan Buku
Pemrograman
Penyiaran
5812-Penerbitan Direktori Dan Mailing List
58120 -Penerbitan Direktori Dan Mailing List
Pemrograman
Penyiaran
5813-Penerbitan Surat Kabar, Jurnal Dan Majalah Atau Terbitan Berkala Lainnya
58130-Penerbitan Surat Kabar, Jurnal Dan Majalah Atau Terbitan Berkala Lainnya
Pemrograman
Penyiaran
5819-Aktivitas Penerbitan Lainnya
58190 -Aktivitas Penerbitan Lainnya
Pemrograman
Penyiaran
582-Penerbitan Piranti Lunak (Software)
5820-Penerbitan Piranti Lunak (Software)
58200-Penerbitan Piranti Lunak (Software)
59-Aktivitas Produksi Gambar Bergerak, Video Dan Program Televisi, Perekaman Suara Dan Penerbitan Musik
591-Aktivitas Produksi Gambar Bergerak, Video Dan Program Televisi
5911-Aktivitas Produksi Gambar Bergerak, Video Dan Program Televisi
59111 -Aktivitas Produksi Film, Video Dan Program Televisi Oleh Pemerintah
Pemrograman
Penyiaran
59112 -Aktivitas Produksi Film, Video Dan Program Televisi Oleh Swasta
Pemrograman
Penyiaran
5912-Aktivitas Pasca Produksi Film, Video Dan Program Televisi
59121-Aktivitas Pasca Produksi Film, Video Dan Program Televisi Oleh Pemerintah
Pemrograman
Penyiaran
59122 -Aktivitas Pasca Produksi Film, Video Dan Program Televisi Oleh Swasta
Pemrograman
Penyiaran
5913-Aktivitas Distribusi Gambar Bergerak, Video Dan Program Televisi
59131-Aktivitas Distribusi Film, Video Dan Program Televisi Oleh Pemerintah
Pemrograman
Penyiaran
59132-Aktivitas Distribusi Film, Video Dan Program Televisi Oleh Swasta
Pemrograman
Penyiaran
5914-Aktivitas Pemutaran Film
59140-Aktivitas Pemutaran Film
Pemrograman
Penyiaran
592-Aktivitas Perekaman Suara Dan Penerbitan Musik
5920-Aktivitas Perekaman Suara Dan Penerbitan Musik
59201-Aktivitas Perekaman Suara
Pemrograman
Penyiaran
59202-Aktivitas Penerbitan Musik Dan Buku Musik
Pemrograman
Penyiaran
60-Aktivitas Penyiaran Dan Pemrograman
601-Penyiaran Radio
6010 -Penyiaran Radio
60101-Penyiaran Radio Oleh Pemerintah
Pemrograman
Penyiaran
60102 -Penyiaran Radio Oleh Swasta
Pemrograman
Penyiaran
602-Aktivitas Penyiaran Dan Pemrograman Televisi
6020-Aktivitas Penyiaran Dan Pemrograman Televisi
60201-Aktivitas Penyiaran Dan Pemrogaman Televisi Oleh Pemerintah
Pemrograman
Penyiaran
60202 -Aktivitas Penyiaran Dan Pemrogaman Televisi Oleh Swasta
Pemrograman
Penyiaran
63-Aktivitas Jasa Informasi
639-Aktivitas Jasa Informasi Lainnya
6391-Aktivitas Kantor Berita
63911-Aktivitas Kantor Berita Oleh Pemerintah
Pemrograman
Penyiaran
63912-Aktivitas Kantor Berita Oleh Swasta
Pemrograman
Penyiaran
6399-Aktivitas Jasa Informasi Lainnya YTDL
63990-Aktivitas Jasa Informasi Lainnya YTDL
Pemrograman
Penyiaran
631-Aktivitas Pengolahan Data, Hosting Dan Kegiatan YBDI; Portal Web
6311-Aktivitas Pengolahan Data, Hosting Dan YBDI
63111-Aktivitas Pengolahan Data
Solusi Berbasis Data Termasuk TI/TO
Pemrosesan Data, Hosting, dan Kegiatan Terkait
63112-Aktivitas Hosting Dan YBDI
Pemrosesan Data, Hosting, dan Kegiatan Terkait
6312-Portal Web Dan / Atau Platform Digital
63121-Portal Web Dan/Atau Platform Digital Tanpa Tujuan Komersial
Solusi Berbasis Data Termasuk TI/TO
Pemrosesan Data, Hosting, dan Kegiatan Terkait
63122-Portal Web Dan/Atau Platform Digital Dengan Tujuan Komersial
Solusi Berbasis Data Termasuk TI/TO
Pemrosesan Data, Hosting, dan Kegiatan Terkait
62-Aktivitas Keinsinyuran Dan Konsultasi Teknis Ybdi
620-Aktivitas Pemrograman, Konsultasi Komputer Dan Kegiatan YBDI
6201-Aktivitas Pemrograman Komputer
62012-Aktivitas Pengembangan Aplikasi Perdagangan Melalui Internet (E-commerce)
62019-Aktivitas Pemrograman Komputer Lainnya
6202-Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya
62029-Aktivitas Konsultasi Komputer dan Manajemen Fasilitas Komputer Lainnya`,

  "Manufaktur (IPPU)": `C-Industri Pengolahan
20-Industri Bahan Kimia dan Barang dari Bahan Kimia
201-Industri Bahan Kimia
2011-Industri Kimia Dasar
20111-Industri Kimia Dasar Anorganik Khlor dan Alkali
Industri Kimia Dasar Organik dan Anorganik
Industri Gas Rendah Karbon termasuk Hidrogen
20112-Industri Kimia Dasar Anorganik Gas Industri
Industri Kimia Dasar Organik dan Anorganik
Industri Gas Rendah Karbon termasuk Hidrogen
20113-Industri Kimia Dasar Anorganik Pigmen
Industri Kimia Dasar Organik dan Anorganik
20114-Industri Kimia Dasar Anorganik Lainnya
Industri Kimia Dasar Organik dan Anorganik
Industri Gas Rendah Karbon termasuk Hidrogen
20115-Industri Kimia Dasar Organik yang Bersumber dari Hasil Pertanian
Industri Kimia Dasar Organik dan Anorganik
Industri Gas Rendah Karbon termasuk Hidrogen
Industri Bahan Bakar Rendah Karbon termasuk Bahan Bakar Nabati
20116-Industri Kimia Dasar Organik untuk Bahan Baku Zat Warna dari Pigmen, Zat Warna dan Pigmen
Industri Kimia Dasar Organik dan Anorganik
20117-Industri Kimia Dasar Organik yang Bersumber dari Minyak Bumi, Gas Alam, dan Batu Bara
Industri Kimia Dasar Organik dan Anorganik
20118-Industri Kimia Dasar Organik yang Menghasilkan Bahan Kimia Khusus
Industri Kimia Dasar Organik dan Anorganik
20119-Industri Kimia Dasar Organik Lainnya
Industri Kimia Dasar Organik dan Anorganik
2012-Industri Pupuk dan Bahan Senyawa Nitrogen
20122-Industri Pupuk Buatan Tunggal Hara Makro Primer
Industri Kimia Dasar Organik dan Anorganik
Industri Gas Rendah Karbon termasuk Hidrogen
2013-Industri Plastik dan Karet Buatan dalam Bentuk Dasar
203-Industri Serat Buatan
2030-Industri Serat Buatan
20301-Industri Serat/Benang/Strip Filamen Buatan
20302-Industri Serat Stapel Buatan
202-Industri Barang Kimia Lainnya
2023-Industri Sabun Dan Deterjen, Bahan Pembersih Dan Pengilap, Parfum Dan Kosmetik
20232 -Industri Kosmetik, termasuk Pasta Gigi
22-Industri Karet, Barang dari Karet dan Plastik
222-Industri Barang dari Plastik
2221-Industri Barang dari Plastik untuk Bangunan
2222-Industri Barang dari Plastik untuk Pengemasan
2223-Industri Pipa Plastik dan Perlengkapannya
2229-Industri Barang dari Plastik Lainnya
22299-Industri Barang Plastik Lainnya YTDL
221-Industri Barang dari Karet Lainnya
2219-Industri Barang dari Karet Lainnya
22199-Industri Barang dari Karet Lainnya YTDL
24-Industri Logam Dasar
241-Industri Logam Dasar Besi dan Baja
2410-Industri Logam Dasar Besi dan Baja
24101-Industri Besi dan Baja Dasar (Iron and Steel Making)
24102-Industri Penggilingan Baja (Steel Rolling)
24103-Industri Pipa dan Sambungan Pipa dari Baja dan Besi
242-Industri Logam Dasar Mulia dan Logam Dasar bukan Besi Lainnya
2420-Industri Logam Dasar Mulia dan Logam Dasar bukan Besi Lainnya
24201-Industri Pembuatan Logam Dasar Mulia
24202-Industri Pembuatan Logam Dasar bukan Besi
24203-Industri Penggilingan Logam bukan Besi
24204-Industri Ekstrusi Logam bukan Besi
24205-Industri Pipa dan Sambungan Pipa dari Logam bukan Besi dan Baja
24206 -Industri Pengolahan Uranium dan Bijih Uranium
243-Industri Pengecoran Logam
2432-Industri Pengecoran Logam bukan Besi dan Baja
24320-Industri Pengecoran Logam bukan Besi dan Baja
23-Industri Barang Galian bukan Logam
239-Industri Barang Galian bukan Logam Lainnya
2394-Industri Semen, Kapur, dan Gips
23941-Industri Semen
2395-Industri Barang dari Semen, Kapur, Gips dan Asbes
23953-Industri Barang dari Semen dan Kapur untuk Konstruksi
23954-Industri Barang dari Gips untuk Konstruksi
23955-Industri Barang dari Asbes untuk Keperluan Bahan Bangunan
231-Industri Kaca dan Barang dari Kaca
2311-Industri Kaca Lembaran
23111-Industri Kaca Lembaran
23112-Industri Kaca Pengaman
23119-Industri Kaca Lainnya
2312-Industri Barang dari Kaca
23121-Industri Perlengkapan dan Peralatan Rumah Tangga dari Kaca
23122 -Industri Alat-Alat Laboratorium, Farmasi dan Kesehatan dari Kaca
23123-Industri Kemasan dari Kaca
23129-Industri Barang Lainnya dari Kaca
13-Industri Tekstil
131-Industri Permintalan, Pertenunan, dan Penyempurnaan Hasil
1311-Industri Persiapan dan Permintalan Serat Tekstil
13111-Industri Persiapan Serat Tekstil
13112-Industri Pemintalan Benang
13113-Industri Pemintalan Benang Jahit
1312-Industri Pertenunan Tekstil
13121-Industri Pertenunan (bukan Pertenunan Karung Goni dan Karung Lainnya)
13122-Industri Kain Tenun Ikat
13123-Industri Bulu Tiruan Tenunan
1313-Industri Penyempurnaan Tekstil
13131-Industri Penyempurnaan Benang
13132-Industri Penyempurnaan Kain
13133-Industri Pencetakan Kain
13134-Industri Batik
139-Industri Tekstil Lainnya
1391-Industri Kain Rajutan dan Sulaman
13911-Industri Kain Rajutan
13912 -Industri Kain Sulaman/Bordir
13913-Industri Bulu Tiruan Rajutan
1392-Industri Kain Rajutan dan Sulaman
13921-Industri Barang Jadi Tekstil untuk Keperluan Rumah Tangga
13922-Industri Barang Jadi Tekstil Sulaman
13923-Industri Bantal dan Sejenisnya
13924-Industri Barang Jadi Rajutan dan Sulaman
13925-Industri Karung Goni
13929-Industri Barang Jadi Tekstil Lainnya
13926-Industri Karung Bukan Goni
1393-Industri Karpet dan Permadani
13930-Industri Karpet dan Permadani
1394-Industri Tali dan Barang dari Tali
13941-Industri Tali
13942-Industri Barang dari Tali
1399-Industri Tekstil Lainnya YTDL
13991-Industri Kain Pita (Narrow Fabric)
13992-Industri yang Menghasilkan Kain Keperluan Industri
13993-Industri Non Woven (bukan Tenunan)
13994-Industri Kain Ban
13995-Industri Kapuk
13999-Industri Tekstil Lainnya YTDL
14-Industri Pakaian Jadi
141-Industri Pakaian Jadi dan Perlengkapannya, bukan Pakaian Jadi dari Kulit Berbulu
1411-Industri Pakaian Jadi (bukan Penjahitan dan Pembuatan Pakaian)
14111-Industri Pakaian Jadi (Konveksi) dari Tekstil
14112-Industri Pakaian Jadi (Konveksi) dari Kulit
14120-Penjahitan dan Pembuatan Pakaian Sesuai Pesanan
1412-Tailoring and Custom-Made Clothing
1413-Industri Perlengkapan Pakaian yang Utamanya Terbuat dari Tekstil
14131-Industri Perlengkapan Pakaian dari Tekstil
14132-Industri Perlengkapan Pakaian dari Kulit
142-Industri Pakaian Jadi dan Barang dari Kulit Berbulu
1420-Industri Pakaian Jadi dan Barang dari Kulit Berbulu
14200-Industri Pakaian Jadi dan Barang dari Kulit Berbulu
143-Industri Pakaian Jadi Rajutan dan Sulaman/Bordir
1430-Industri Pakaian Jadi Rajutan dan Sulaman/Bordir
14301-Industri Pakaian Jadi Rajutan
14302-Industri Pakaian Jadi Sulaman/Bordir
14303-Industri Rajutan Kaos Kaki dan Sejenisnya
15-Industri Kulit, Barang dari Kulit dan Alas Kaki
151-Industri Kulit, Barang dari Kulit termasuk Kulit Buatan
1511-Industri Kulit dan Kulit Komposisi, termasuk Pencelupan Kulit Bulu
1512-Industri Barang dari Kulit dan Kulit Komposisi, Koper, Tas Tangan dan Sejenisnya, Pelana dan Alat Pengekang (Harness)
152-Industri Alas Kaki
1520-Industri Alas Kaki
15201-Industri Alas Kaki untuk Keperluan Sehari-hari
15202-Industri Sepatu Olahraga
15203-Industri Sepatu Teknik Lapangan/Keperluan Industri
15209-Industri Alas Kaki Lainnya
17-Industri Kertas dan Barang dari Kertas
170-Industri Kertas dan Barang dari Kertas
1701-Industri Bubur Kertas, Kertas dan Papan Kertas
17011-Industri Bubur Kertas (Pulp)
17012-Industri Kertas Budaya
17013-Industri Kertas Berharga
17014-Industri Kertas Khusus
17019-Industri Kertas Lainnya
1702-Industri Kertas dan Papan Kertas Bergelombang dan Wadah dari Kertas dan Papan Kertas
17021-Industri Kertas dan Papan Kertas Bergelombang
17022-Industri Kemasan dan Kotak dari Kertas dan Karton
1709-Industri Barang dari Kertas dan Papan Kertas Lainnya
17091-Industri Kertas Tissue
17099-Industri Barang dari Kertas dan Papan Kertas Lainnya YTDL
16-Industri Kayu, Barang dari Kayu dan Gabus (Tidak termasuk Furnitur) dan Barang Anyaman dari Bambu, Rotan dan Sejenisnya
161-Industri Penggergajian dan Pengawetan Kayu, Rotan, Bambu dan Sejenisnya
1610-Industri Penggergajian dan Pengawetan Kayu, Rotan, Bambu dan Sejenisnya
16101-Industri Penggergajian Kayu
16102 -Industri Pengawetan Kayu
16103-Industri Pengawetan Rotan, Bambu, dan Sejenisnya
16104-Industri Pengolahan Rotan
162-Industri Barang dari Kayu; Industri Barang dari Gabus dan Barang Anyaman dari Jerami, Rotan, Bambu, dan Sejenis Lainnya
1621-Industri Veneer, Kayu Lapis, Kayu Laminasi dan Sejenisny
16211-Industri Kayu Lapis
16212 -Industri Kayu Lapis Laminasi, termasuk Decorative Plywood
16213 -Industri Panel Kayu Lainnya
16214-Industri Veneer
1622-Industri Barang Bangunan dari Kayu
16221-Industri Barang Bangunan dari Kayu
16222-Industri Bangunan Prafabrikasi dari Kayu
1623-Industri Wadah dari Kayu
16230 -Industri Wadah dari Kayu
1629-Industri Barang Lainnya dari Kayu; Industri Barang dari Gabus dan Barang Anyaman dari Jerami, Rotan, Bambu dan Sejenisnya
16291 -Industri Barang Anyaman dari Rotan dan Bambu
16292-Industri Barang Anyaman dari Tanaman bukan Rotan dan Bambu
16293-Industri Kerajinan Ukiran dari Kayu Bukan Mebeller
16294 -Industri Alat Dapur dari Kayu, Rotan dan Bambu
16295- Industri Kayu Bakar dan Pelet Kayu
16299 -Industri Barang dari Kayu, Rotan, Gabus Lainnya YTDL
31-Industri Furnitur
310-Industri Furnitur
3100-Industri Furnitur
31001 -Industri Furnitur dari Kayu
31002 -Industri Furnitur dari Rotan dan atau Bambu
31009 -Industri Furnitur Lainnya
10-Industri Makanan
101-Industri Pengolahan dan Pengawetan Daging
1011-Kegiatan Rumah Potong dan Pengepakan Daging bukan Unggas
10110 -Kegiatan Rumah Potong dan Pengepakan Daging bukan Unggas
1012-Kegiatan Rumah Potong dan Pengepakan Daging Unggas
10120-Kegiatan Rumah Potong dan Pengepakan Daging Unggas
1013-Industri Pengolahan dan Pengawetan Produk Daging dan Daging Unggas
10130-Industri Pengolahan dan Pengawetan Produk Daging dan Daging Unggas
102-Industri Pengolahan dan Pengawetan Ikan dan Biota Air
1021-Industri Pengolahan dan Pengawetan Ikan dan Produk Ikan
10211-Industri Penggaraman/ Pengeringan Ikan
10212-Industri Pengasapan/ Pemanggangan Ikan
10213 -Industri Pembekuan Ikan
10214 -Industri Pemindangan Ikan
10215-Industri Peragian/Fermentasi Ikan
10216 -Industri Berbasis Daging Lumatan dan Surimi
10217-Industri Pendinginan/Pengesan Ikan
10219-Industri Pengolahan dan Pengawetan Lainnya untuk Ikan
1022-Industri Pengolahan dan Pengawetan Ikan dan biota air dalam Kaleng
10221-Industri Pengolahan dan Pengawetan Ikan dan Biota Air (bukan Udang) dalam Kaleng
10222-Industri Pengolahan dan Pengawetan Udang dalam Kaleng
1029-Industri Pengolahan dan Pengawetan Biota Air Lainnya
10291 -Industri Penggaraman/Pengeringan Biota Air Lainnya
10292 -Industri Pengasapan/Pemanggangan Biota Air Lainnya
10293 -Industri Pembekuan Biota Air Lainnya
10294-Industri Pemindangan Biota Air Lainnya
10295-Industri Peragian/Fermentasi Biota Air Lainnya
10296-Industri Berbasis Lumatan Biota Air Lainnya
10297-Industri Pendinginan/Pengesan Biota Air Lainnya
10298-Industri Pengolahan Rumput Laut
10299-Industri Pengolahan dan Pengawetan Lainnya untuk Biota Air Lainnya
103-Industri Pengolahan dan Pengawetan Buah-Buahan dan Sayuran
1031-Industri Pengolahan dan Pengawetan Buah-Buahan dan Sayuran dengan Cara Diasinkan, Dilumatkan, Dikeringkan, dan Dibekukan
10311-Industri Pengasinan/Pemanisan Buah-Buahan dan Sayuran
10312-Industri Pelumatan Buah-Buahan dan Sayuran
10313-Industri Pengeringan Buah-Buahan dan Sayuran
10314-Industri Pembekuan Buah-Buahan dan Sayuran
1032-Industri Pengolahan dan Pengawetan Buah-Buahan dan Sayuran Dalam Kaleng
10320-Industri Pengolahan dan Pengawetan Buah-Buahan dan Sayuran Dalam Kaleng
1033-Industri Pengolahan Sari Buah dan Sayuran
10330-Industri Pengolahan Sari Buah dan Sayuran
1039-Industri Pengolahan dan Pengawetan Lainnya Buah-buahan dan Sayuran
10391-Industri Tempe Kedelai
10392-Industri Tahu Kedelai
10399-Industri Pengolahan dan Pengawetan Lainnya Buah-buahan dan Sayuran
104-Industri Minyak dan Lemak Nabati dan Hewani
1041-Industri Minyak dan Lemak Nabati dan Hewani (bukan Kelapa dan Kelapa Sawit)
10412-Industri Margarine
10411-Industri Minyak Mentah dan Lemak Nabati
10413-Industri Minyak Mentah dan Lemak Hewani Selain Ikan
10414-Industri Minyak Ikan
10415-Industri Minyak Goreng Bukan Minyak Kelapa dan Minyak Kelapa Sawit
1042-Industri Minyak dan Lemak Nabati dan Hewani
10421-Industri Kopra
10422-Industri Minyak Mentah Kelapa
10423-Industri Minyak Goreng Kelapa
10424-Industri Tepung dan Pelet Kelapa
1043-Industri Minyak Mentah/Murni Kelapa Sawit (Crude Palm Oil) dan Minyak Goreng Kelapa Sawit
10431-Industri Minyak Mentah Kelapa Sawit (Crude Palm Oil)
10432-Industri Minyak Mentah Inti Kelapa Sawit (Crude Palm Kernel Oil)
10433-Industri Pemisahan/Fraksinasi Minyak Mentah Kelapa Sawit dan Minyak Mentah Inti Kelapa Sawit
10434-Industri Pemurnian Minyak Mentah Kelapa Sawit dan Minyak Mentah Inti Kelapa Sawit
10435-Industri Pemisahan/Fraksinasi Minyak Murni Kelapa Sawit
10436 -Industri Pemisahan/Fraksinasi Minyak Murni Inti Kelapa Sawit
10437 -Industri Minyak Goreng Kelapa Sawit
1049-Industri Minyak Mentah dan Lemak Nabati dan Hewani Lainnya
10490 -Industri Minyak Mentah dan Lemak Nabati dan Hewani Lainnya
105-Industri Pengolahan Susu, Produk dari Susu, dan Es Krim
1051-Industri Pengolahan Susu Segar dan Krim
10510 -Industri Pengolahan Susu Segar dan Krim
1052-Industri Pengolahan Susu Bubuk dan Susu Kental
10520 -Industri Pengolahan Susu Bubuk dan Susu Kental
1053-Industri Pengolahan Es Krim dan Sejenisnya
10531-Industri Pengolahan Es Krim
10532 -Industri Pengolahan Es Sejenisnya yang Dapat Dimakan (bukan Es Batu dan Es Balok)
1059-Industri Pengolahan Produk dari Susu Lainnya
10590-Industri Pengolahan Produk dari Susu Lainnya
106-Industri Penggilingan Padi-Padian, Tepung dan Pati
1061-Industri Penggilingan Serelia dan Biji-Bijian Lainnya (bukan Beras dan Jagung)
10612 -Industri Penggilingan Aneka Kacang (termasuk Leguminous)
10613 -Industri Penggilingan Aneka Umbi dan Sayuran (termasuk Rhizoma)
10614 -Industri Tepung Campuran dan Adonan Tepung
10615-Industri Makanan Sereal
10616-Industri Tepung Terigu
10611-Industri Penggilingan Gandum dan Serelia Lainnya
1062-Industri Pati dan Produk Pati (bukan Beras dan Jagung)
10621-Industri Pati Ubi Kayu
10622-Industri Berbagai Macam Pati Palma
10623 -Industri Glukosa dan Sejenisnya
10629 -Industri Pati Lainnya
1063-Industri Penggilingan Beras dan Jagung dan Industri Tepung Beras dan Jagung
10631 -Industri Penggilingan Padi dan Penyosohan Beras
10632 -Industri Penggilingan dan Pembersihan Jagung
10633 -Industri Tepung Beras dan Tepung Jagung
10634 -Industri Pati Beras dan Jagung
107-Industri Makanan Lainnya
1071-Industri Produk Roti dan Kue
10710 -Industri Produk Roti dan Kue
1072-Industri Gula
10721 -Industri Gula Pasir
10722 -Industri Gula Merah
10723-Industri Sirop
10729-Industri Pengolahan Gula Lainnya bukan Sirop
1073-Industri Kakao, Cokelat, dan Kembang Gula
10731 -Industri Kakao
10732-Industri Makanan dari Cokelat dan Kembang Gula
10733-Industri Manisan Buah-Buahan dan Sayuran Kering
10739 -Industri Kembang Gula Lainnya
1075-Industri Makanan dan Masakan Olahan
10750-Industri Makanan dan Masakan Olahan
1076-Industri Pengolahan Kopi, Teh dan Herbal (Herb Infusion)
10761 -Industri Pengolahan Kopi
10762-Industri Pengolahan Herbal (Herb Infusion)
10763-Industri Pengolahan Teh
1077-Industri Bumbu-Bumbuan dan Produk Masak Lainnya
10771-Industri Kecap
10772 -Industri Bumbu Masak dan Penyedap Masakan
10773-Industri Produk Masak dari Kelapa
10774-Industri Pengolahan Garam
10779-Industri Produk Masak Lainnya
1079-Industri Produk Makanan Lainnya
10791 -Industri Makanan Bayi
10792-Industri Kue Basah
10793 -Industri Makanan dari Kedele dan Kacang-Kacangan Lainnya bukan Kecap, Tempe dan Tahu
10794 -Industri Kerupuk, Keripik, Peyek dan Sejenisnya
10795 -Industri Krimer Nabati
10799-Industri Produk Makanan Lainnya
1074-Industri Makaroni, Mie dan Produk Sejenisnya
10740-Industri Makaroni, Mie dan Produk Sejenisnya
108-Industri Makanan Hewan
1080-Industri Makanan Hewan
10801-Animal Feed Ration Industry
10802-Industri Konsentrat Makanan Hewan
11-Industri Minuman
110-Industri Minuman
1103-Industri Minuman Beralkohol hasil Fermentasi Malt dan Industri Malt
11032-Industri Malt
1104-Industri Minuman Ringan
11040-Industri Minuman Ringan
1105-Industri Air Kemasan dan Air Minum Isi Ulang
11050-Industri Air Minum dan Air Mineral
1109-Industri Minuman Lainnya
11090-Industri Minuman Lainnya
21-Industri Farmasi, Produk Obat Kimia dan Obat Tradisional
210-Industri Farmasi, Produk Obat Kimia dan Obat Tradisional
2101-Industri Farmasi dan Produk Obat Kimia
21011 -Industri Bahan Farmasi
21012 -Industri Produk Farmasi untuk Manusia
21013-Industri Produk Farmasi untuk Hewan
2102-Industri Obat Tradisional
21021 -Industri Bahan Baku Obat Tradisional
21022 -Industri Produk Obat Tradisional
27-Industri Peralatan Listrik
272-Industri Batu Baterai dan Akumulator Listrik
2720-Industri Batu Baterai dan Akumulator Listrik
27201 -Industri Batu Baterai
Industri Baterai
Industri Teknologi Rendah Karbon untuk Transportasi
27202 -Industri Akumulator Listrik
Industri Baterai
Industri Teknologi Rendah Karbon untuk Transportasi
273-Industri Kabel dan Perlengkapannya
2731-Industri Kabel Serat Optik
27310-Industri Kabel Serat Optik
2732-Industri Kabel Listrik dan Elektronik Lainnya
27320-Industri Kabel Listrik dan Elektronik Lainnya
2733-Industri Perlengkapan Kabel
27330-Industri Perlengkapan Kabel
274-Industri Peralatan Penerangan Listrik (termasuk peralatan penerangan bukan listrik)
2740-Industri Peralatan Penerangan Listrik (termasuk peralatan penerangan bukan listrik)
27401-Industri Bola Lampu Pijar, Lampu Penerangan Terpusat dan Lampu Ultra Violet
Industri Peralatan Listrik dan Elektronik
Industri Peralatan Efisiensi Energi untuk Bangunan
27402-Industri Lampu Tabung Gas (Lampu Pembuang Listrik)
27403-Industri Peralatan Penerangan untuk Alat Transportasi
27404-Industri Lampu LED
Industri Peralatan Listrik dan Elektronik
Industri Peralatan Efisiensi Energi untuk Bangunan
27409-Industri Peralatan Penerangan Lainnya
275-Industri Peralatan Rumah Tangga
2751-Industri Peralatan Listrik Rumah Tangga
27510-Industri Peralatan Listrik Rumah Tangga
Industri Peralatan Listrik dan Elektronik
Industri Peralatan Efisiensi Energi untuk Bangunan
2753-Industri Peralatan Pemanas dan Masak Bukan Listrik Rumah Tangga
27530-Industri Peralatan Pemanas dan Masak Bukan Listrik Rumah Tangga
2752-Industri Peralatan Elektrotermal Rumah Tangga
27520-Industri Peralatan Elektrotermal Rumah Tangga
Industri Peralatan Listrik dan Elektronik
Industri Peralatan Efisiensi Energi untuk Bangunan
279-Industri Peralatan Listrik Lainnya
2790-Industri Peralatan Listrik Lainnya
27900-Industri Peralatan Listrik Lainnya
Industri Peralatan Listrik dan Elektronik
Industri Teknologi Rendah Karbon Lainnya
271-Industri Motor Listrik, Generator, Transformator dan Peralatan Pengontrol dan Pendistribusian Listrik
2711-Industri Motor Listrik, Generator, dan Transformator
27111-Industri Motor Listrik
Industri Teknologi Energi Terbarukan
Industri Teknologi Rendah Karbon Lainnya
27112-Industri Mesin Pembangkit Listrik
Industri Teknologi Energi Terbarukan
Industri Teknologi Rendah Karbon Lainnya
27113-Industri Pengubah Tegangan (Transformator), Pengubah Arus (Rectifier), dan Pengontrol Tegangan (Voltage Stabilizer)
Industri Teknologi Rendah Karbon Lainnya
Industri Teknologi Energi Terbarukan
2712-Industri Peralatan Pengontrol dan Pendistribusian Listrik
27120-Industri Peralatan Pengontrol dan Pendistribusian Listrik
Industri Teknologi Energi Terbarukan
Industri Teknologi Rendah Karbon Lainnya
33-Reparasi dan Pemasangan Mesin dan Peralatan
331-Reparasi Produk Logam Pabrikasi, Mesin dan Peralatan
3314-Reparasi Peralatan Listrik
33142 -Reparasi Baterai dan Akumulator Listrik
33149-Reparasi Peralatan Listrik Lainnya
33141-Reparasi Motor Listrik, Generator dan Transformator
3313-Reparasi Peralatan Elektronik dan Optik
33131-Reparasi Alat Ukur, Alat Uji dan Peralatan Navigasi dan Pengontrol
33132-Reparasi Peralatan Irradiasi, Elektromedis dan Elektrotherapi
33133-Reparasi Peralatan Fotografi dan Optik
3311-Reparasi Produk Logam Pabrikasi
33111-Reparasi Produk Logam Siap Pasang untuk Bangunan, Tangki, Tandon Air dan Generator Uap
Industri Teknologi Energi Terbarukan
Industri Peralatan Efisiensi Energi untuk Bangunan
3312-Reparasi Mesin
33121-Reparasi Mesin untuk Keperluan Umum
33122-Reparasi Mesin untuk Keperluan Khusus
3315-Reparasi Alat Angkutan, bukan Kendaraan Bermotor
33151-Reparasi Kapal, Perahu dan Bangunan Terapung
33152-Reparasi Lokomotif dan Gerbong Kereta
33159-Reparasi Alat Angkutan Lainnya, bukan Kendaraan Bermotor
33153-Reparasi Pesawat Terbang
26-Industri Komputer, Barang Elektronik dan Optik
261-Industri Komponen dan Papan Elektronik
2611-Industri Tabung Elektron dan Konektor Elektronik
26110 -Industri Tabung Elektron dan Konektor Elektronik
2612-Industri Semi Konduktor dan Komponen Elektronik Lainnya
26120-Industri Semi Konduktor dan Komponen Elektronik Lainnya
Industri Peralatan Listrik dan Elektronik
Industri Teknologi Rendah Karbon Lainnya
262-Industri Komputer dan Perlengkapannya
2621-Industri Komputer dan/atau Perakitan Komputer
26210-Industri Komputer dan/atau Perakitan Komputer
2622-Industri Perlengkapan Komputer
26220 -Industri Perlengkapan Komputer
263-Industri Peralatan Komunikasi
2631-Industri Peralatan Telepon dan Faksimili
26310-Industri Peralatan Telepon dan Faksimili
2632-Industri Peralatan Komunikasi tanpa Kabel (Wireless)
26320-Industri Peralatan Komunikasi tanpa Kabel (Wireless)
2639-Industri Peralatan Komunikasi Lainnya
26391-Industri Kartu Cerdas (Smart Card)
26399-Industri Peralatan Komunikasi Lainnya
Industri Teknologi Rendah Karbon Lainnya
Industri Peralatan Listrik dan Elektronik
264-Industri Peralatan Audio dan Video Elektronik
2641-Industri Televisi dan/atau Perakitan Televisi
26410-Industri Televisi dan/atau Perakitan Televisi
2642-Industri Peralatan Perekam, Penerima dan Pengganda Audio dan Video, bukan Industri Televisi
26420-Industri Peralatan Perekam, Penerima, dan Pengganda Audio dan Video, bukan Industri Televisi
2649-Industri Peralatan Audio dan Video Elektronik Lainnya
26490-Industri Peralatan Audio dan Video Elektronik Lainnya
265-Industri Alat Ukur, Alat Uji, Peralatan Navigasi dan Kontrol dan Alat Ukur Waktu
2651-Industri Alat Ukur, Alat Uji, Peralatan Navigasi dan Kontrol
26511-Industri Alat Ukur dan Alat Uji Manual
26512-Industri Alat Ukur dan Alat Uji Elektrik
26513-Industri Alat Ukur dan Alat Uji Elektronik
26514-Industri Alat Uji dalam Proses Industri
2652-Industri Alat Ukur Waktu
26520-Industri Alat Ukur Waktu
266-Industri Peralatan Iradiasi, Elektromedikal dan Elektroterapi
2660-Industri Peralatan Iradiasi, Elektromedikal dan Elektroterapi
26601-Industri Peralatan Iradiasi/Sinar X, Perlengkapan Dan Sejenisnya
26602-Industri Peralatan Elektromedikal dan Elektroterapi
267-Industri Peralatan Fotografi dan Instrumen Optik bukan Kaca Mata
2671-Industri Peralatan Fotografi
26710-Industri Peralatan Fotografi
2679-Industri Peralatan Fotografi dan Instrumen Optik Lainnya
26791-Industri Kamera Cinematografi Proyektor dan Perlengkapannya
26792-Industri Teropong dan Instrumen Optik bukan Kaca Mata
268-Industri Media Magnetik dan Media Optik
2680-Industri Media Magnetik dan Media Optik
26800-Industri Media Magnetik dan Media Optik
25-Industri Barang Logam, bukan Mesin dan Peralatannya
251-Industri Barang Logam Siap Pasang Untuk Bangunan, Tangki, Tandon Air dan Generator Uap
2513-Industri Generator Uap, bukan Ketel Pemanas
25130-Industri Generator Uap, bukan Ketel Pemanas
Industri Teknologi Energi Terbarukan
Industri Teknologi Rendah Karbon Lainnya
2511-Industri Barang dari Logam Siap Pasang untuk Bangunan
25111-Industri Barang dari Logam bukan Aluminium Siap Pasang untuk Bangunan
25112-Industri Barang dari Logam Aluminium Siap Pasang untuk Bangunan
25113-Industri Konstruksi Berat Siap Pasang dari Baja untuk Bangunan
25119-Industri Barang dari Logam Siap Pasang untuk Konstruksi Lainnya
259-Industri Barang Logam Lainnya dan Jasa Pembuatan Barang Logam
2599-Industri Barang Logam Lainnya YTDL
25999-Industri Barang Logam Lainnya YTDL
28-Industri Mesin dan Perlengkapan YTDL
281-Industri Mesin untuk Keperluan Umum
2811-Industri Mesin dan Turbin, bukan Mesin Pesawat Terbang dan Kendaraan Bermotor
28111-Industri Mesin Uap, Turbin, dan Kincir
Industri Teknologi Energi Terbarukan
Industri Teknologi Rendah Karbon Lainnya
28112-Industri Motor Pembakaran Dalam
28113-Industri Komponen dan Suku Cadang Mesin dan Turbin
2812-Industri Peralatan Tenaga Zat Cair dan Gas
28120-Industri Peralatan Tenaga Zat Cair dan Gas
Industri Peralatan Efisiensi Energi untuk Bangunan
Industri Peralatan untuk Produksi dan Penggunaan Hidrogen
Industri Teknologi Rendah Karbon Lainnya
2813-Industri Pompa, Kompresor, Kran dan Klep/Katup
28130-Industri Pompa Lainnya, Kompresor, Kran dan Klep/Katup
Industri Peralatan Efisiensi Energi untuk Bangunan
Industri Teknologi Rendah Karbon untuk Transportasi
2819-Industri Mesin untuk Keperluan Umum Lainnya
28199-Industri Mesin untuk Keperluan Umum Lainnya YTDL
Industri Peralatan untuk Produksi dan Penggunaan Hidrogen
Industri Teknologi Rendah Karbon Lainnya
2814-Industri Bearing, Roda Gigi dan Elemen Penggerak Mesin
28140-Industri Bearing, Roda Gigi dan Elemen Penggerak Mesin
Industri Teknologi Rendah Karbon untuk Transportasi
Industri Teknologi Rendah Karbon Lainnya
282-Industri Mesin untuk Keperluan Khusus
2829-Industri Mesin untuk Keperluan Khusus Lainnya
28299-Industri Mesin Keperluan Khusus Lainnya
29-Industri kendaraan bermotor, trailer dan semi trailer
291-Industri Kendaraan Bermotor Roda Empat atau Lebih
2910-Industri Kendaraan Bermotor Roda Empat atau Lebih
29100-Industri Kendaraan Bermotor Roda Empat atau Lebih
292-Industri Karoseri Kendaraan Bermotor Roda Empat atau Lebih dan Industri Trailer dan Semi Trailer
2920-Industri Karoseri Kendaraan Bermotor Roda Empat atau Lebih dan Industri Trailer dan Semi Trailer
29200-Industri Karoseri Kendaraan Bermotor Roda Empat atau Lebih dan Industri Trailer dan Semi Trailer
293-Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih
2930-Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih
29300-Industri Suku Cadang dan Aksesori Kendaraan Bermotor Roda Empat atau Lebih
30-industri alat angkutan lainnya
301-Industri Pembuatan Kapal dan Perahu
3011-Industri Pembuatan Kapal, Perahu dan Struktur Bangunan Terapung
30111-Industri Kapal dan Perahu
30113-Industri Peralatan, Perlengkapan dan Bagian Kapal
302-Industri Lokomotif dan Gerbong Kereta
3020-Industri Lokomotif dan Gerbong Kereta
30200-Industri Lokomotif dan Gerbong Kereta
309-Industri Alat angkutan Lainnya YTDL
3091-Industri Sepeda Motor
30911-Industri Sepeda Motor Roda Dua dan Tiga
30912-Industri Komponen dan Perlengkapan Sepeda Motor Roda Dua dan Tiga
3092-Industri Sepeda Motor
30921-Industri Sepeda dan Kursi Roda Termasuk Becak
30922-Industri Perlengkapan Sepeda dan Kursi Roda termasuk Becak
3099-Industri Alat Angkutan Lainnya YTDL
30990-Industri Alat Angkutan Lainnya YTDL
303-Industri Lokomotif dan Gerbong Kereta
3030-Industri Lokomotif dan Gerbong Kereta
30300-Industri Pesawat Terbang dan Perlengkapannya`,

  "Profesional, Ilmiah, dan Teknis (PST)": `M-Aktivitas Profesional, Ilmiah dan Teknis
70-Aktivitas Kantor Pusat dan Konsultasi Manajemen
702-Aktivitas Konsultasi Manajemen
7020-Aktivitas Konsultasi Manajemen
70202-Aktivitas Konsultasi Transportasi
70209-Aktivitas Konsultasi Manajemen Lainnya
71-Aktivitas Arsitektur dan Keinsinyuran; Analisis dan Uji Teknis
711-Aktivitas Arsitektur dan Keinsinyuran Serta Konsultasi Teknis YBDI
7110-Aktivitas Arsitektur dan Keinsinyuran Serta Konsultasi Teknis YBDI
71101-Aktivitas Arsitektur
Aktivitas keinsinyuran dan konsultasi teknis terkait untuk jasa terkait lingkungan
Jasa profesional yang terkait dengan kinerja energi perindustrian
71102 -Aktivitas Keinsinyuran Dan Konsultasi Teknis YBDI
Jasa profesional yang terkait dengan kinerja energi perindustrian
Aktivitas keinsinyuran dan konsultasi teknis terkait untuk jasa terkait lingkungan
712-Analisis Dan Uji Teknis
7120-Analisis Dan Uji Teknis
71203-Jasa Inspeksi Periodik
Jasa Profesional Keinsinyuran dan Konsultasi Teknis untuk jasa terkait lingkungan
Jasa Profesional yang terkait Kinerja Energi Perindustrian
71204-Jasa Inspeksi Teknik Instalasi
Jasa Profesional Keinsinyuran dan Konsultasi Teknis untuk jasa terkait lingkungan
Jasa Profesional yang terkait Kinerja Energi Perindustrian
74-Aktivitas Profesional, Ilmiah Dan Teknis Lainnya
741-Aktivitas Perancangan Khusus
7410-Aktivitas Perancangan Khusus
74100-Aktivitas Perancangan Khusus
Jasa Profesional Keinsinyuran dan Konsultasi Teknis untuk jasa terkait lingkungan
72-Penelitian dan Pengembangan Ilmu Pengetahuan
721-Penelitian dan Pengembangan Ilmu Pengetahuan Alam dan Ilmu Teknologi dan Rekayasa
7210-Penelitian dan Pengembangan Ilmu Pengetahuan Alam dan Ilmu Teknologi dan Rekayasa
72101 -Penelitian Dan Pengembangan Ilmu Pengetahuan Alam
Penelitian Pasar, Pengembangan, dan Inovasi
Penelitian, Pengembangan, dan Inovasi untuk Penangkapan Karbon di Udara Langsung
72102-Penelitian Dan Pengembangan Teknologi Dan Rekayasa
Penelitian Pasar, Pengembangan, dan Inovasi
Penelitian, Pengembangan, dan Inovasi untuk Penangkapan Karbon di Udara Langsung
72104 -Penelitian Dan Pengembangan Bioteknologi
Penelitian Pasar, Pengembangan, dan Inovasi
72105 -Penelitian Dan Pengembangan Ilmu Pertanian Dan Peternakan
Penelitian Pasar, Pengembangan, dan Inovasi
72106-Penelitian Dan Pengembangan Ilmu Perikanan Dan Kelautan
Penelitian Pasar, Pengembangan, dan Inovasi
72109 -Penelitian Dan Pengembangan Ilmu Pengetahuan Alam Dan Teknologi Rekayasa Lainnya
Penelitian Pasar, Pengembangan, dan Inovasi
722-Penelitian Dan Pengembangan Ilmu Pengetahuan Sosial Dan Humaniora
7220-Penelitian Dan Pengembangan Ilmu Pengetahuan Sosial Dan Humaniora
72201 -Penelitian Dan Pengembangan Ilmu Pengetahuan Sosial
Penelitian Pasar, Pengembangan, dan Inovasi`,

  "Pengelolaan Air, Pengelolaan Air Limbah, Pengelolaan Sampah, dan Remediasi (WSSWMR)": `E-Treatment Air, Treatment Air Limbah, Treatment dan Pemulihan Material Sampah, dan Aktivitas Remediasi
38-Pengumpulan, Treatment dan Pembuangan Limbah dan Sampah serta Aktivitas Pemulihan Material
383-Pemulihan Material
3830-Pemulihan Material
38302 -Daur Ulang Barang Bukan Logam
Pemulihan Bahan dari Limbah yang Tidak Mengandung Bahan Berbahaya dan Beracun (non-B3)
Penanggulangan Pencemaran dan Pembongkaran Produk Akhir Masa Pakainya
38301-Daur Ulang Barang Logam
Pemulihan Bahan dari Limbah yang Tidak Mengandung Bahan Berbahaya dan Beracun (non-B3)
Penanggulangan Pencemaran dan Pembongkaran Produk Akhir Masa Pakainya
381-Pengumpulan Sampah
3811-Pengumpulan Sampah Tidak Berbahaya
38110 -Pengumpulan Sampah Tidak Berbahaya
Pengumpulan dan Pengangkutan Limbah Tidak Berbahaya (Non-B3) dan Limbah Berbahaya (B3)
3812-Pengumpulan Sampah Berbahaya
38120 -Pengumpulan Sampah Berbahaya
Pengumpulan dan Pengangkutan Limbah Tidak Berbahaya (Non-B3) dan Limbah Berbahaya (B3)
382-Pengelolaan dan Pembuangan Sampah
3821-Pengelolaan dan Pembuangan Sampah Tidak Berbahaya
38211-Pengelolaan dan Pembuangan Sampah Tidak Berbahaya
Penguraian Sampah Organik Secara Anaerobik
Waste-to-Energy
Penangkapan dan Pemanfaatan Gas TPA
Pengomposan Sampah Organik
38212-Produksi Kompos Sampah Organik
Pengomposan Sampah Organik
3822-Pengelolaan dan Pembuangan Sampah Berbahaya
38220-Pengelolaan dan Pembuangan Sampah Berbahaya
Pengolahan Limbah yang Mengandung Bahan Berbahaya dan Beracun (B3)
36-Pengelolaan Air
360-Pengelolaan Air
3600-Pengelolaan Air
36001-Penampungan, Penjernihan dan Penyaluran Air Minum
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Desalinasi
36002 -Penampungan dan Penyaluran Air Baku
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Desalinasi
36003-Aktivitas Penunjang Pengelolaan Air
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan, Pengolahan dan Penyediaan Air
Desalinasi
37-Pengelolaan Air Limbah
370-Pengelolaan Air Limbah
3701-Pengumpulan Air Limbah
37011-Pengumpulan Air Limbah Tidak Berbahaya
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan dan Pengolahan Air Limbah
37012-Pengumpulan Air Limbah Berbahaya
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan dan Pengolahan Air Limbah
3702-Pengelolaan dan Pembuangan Air Limbah
37021 -Pengelolaan dan Pembuangan Air Limbah Tidak Berbahaya
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan dan Pengolahan Air Limbah
37022-Pengelolaan dan Pembuangan Air Limbah Berbahaya
Konstruksi, Perluasan dan Pengoperasian Sistem Pengumpulan dan Pengolahan Air Limbah
39-Aktivitas Remediasi dan Pengelolaan Sampah Lainnya
390-Aktivitas Remediasi dan Pengelolaan Sampah Lainnya
3900- Aktivitas Remediasi dan Pengelolaan Sampah Lainnya
39000-Aktivitas Remediasi dan Pengelolaan Sampah Lainnya
Remediasi Lahan Terkontaminasi
Remediasi Tempat Pemrosesan Akhir (TPA) yang Tidak Sesuai Ketentuan Hukum dan Tempat Pembuangan Sampah Terbengkalai atau Ilegal
Aktivitas pengangkutan CO2
Penyimpanan CO2 geologis permanen bawah tanah
Pemanfaatan CO2 yang ditangkap`
};

/**
 * Parser Otomatis untuk Mengonversi Teks Baris Menjadi Pohon Indentasi Sesuai Gambar OJK
 */
function parseRawKBLI(sektor) {
  const rawText = KBLI_DATA_SEKTOR[sektor] || "";
  const lines = rawText.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    let lvl = 5; // Default: Sub-aktivitas tanpa nomor
    if (/^[A-Z]\s*[-–]/.test(line)) lvl = 0;             // Kategori (D-, F-, B-, dll)
    else if (/^\d{2}\s*[-–]/.test(line)) lvl = 1;        // Golongan Pokok 2-digit (35-, 41-)
    else if (/^\d{3}\s*[-–]/.test(line)) lvl = 2;        // Golongan 3-digit (351-, 410-)
    else if (/^\d{4}\s*[-–]/.test(line)) lvl = 3;        // Sub-golongan 4-digit (3510-, 4101-)
    else if (/^\d{5}\s*[-–]/.test(line)) lvl = 4;        // Kelompok 5-digit (35101-, 41011-)

    result.push({ text: line, level: lvl });
  }

  return result;
}
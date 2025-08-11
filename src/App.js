import React, { useState } from 'react'; // Import useState
import './App.css';
import Header from './components/Header';
import MapSection from './components/MapSection';
import AttractionCards from './components/AttractionCards';
import Footer from './components/Footer';
import AttractionDetailModal from './components/AttractionDetailModal'; // Import komponen modal baru

function App() {
  const attractionsData = [
    {
      id: 1,
      name: 'Jajanan Pasar',
      description: 'Spot kuliner di desa wisata yang menyajikan berbagai makanan tradisional khas Indonesia, dibuat langsung oleh warga desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_160656.jpg',
      coordinates: [-8.138915624551313, 110.6593197409045],
      fullDescription: 'Salah satu spot unggulan yang akan memperkaya pengalaman wisatawan di desa wisata ini adalah “Jajanan Pasar”, sebuah area kuliner khas yang menampilkan ragam cita rasa tradisional Indonesia. Terletak di jantung desa, area ini akan dipenuhi dengan tenda dan lapak-lapak sederhana namun penuh warna, tempat para pelaku UMKM lokal—terutama warga desa sendiri—menawarkan berbagai jenis makanan ringan khas pasar tradisional.'},
    {
      id: 2,
      name: 'Permainan Egrang',
      description: 'Menghadirkan egrang, dakon, dan plintengan sebagai sarana bermain seru bernuansa nostalgia, sekaligus mengenalkan kearifan lokal kepada para pengunjung.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_160649.jpg',
      coordinates: [-8.138966601599844, 110.6594965249901],
      fullDescription: 'Spot Permainan Tradisional menjadi salah satu daya tarik utama di desa wisata ini, menghadirkan nuansa nostalgia sekaligus edukasi budaya bagi para pengunjung dari berbagai kalangan. Di area ini, pengunjung diajak untuk mengenal dan merasakan kembali keseruan permainan khas masa lalu seperti egrang, dakon, dan plintengan, yang dulunya menjadi hiburan utama anak-anak desa sebelum era teknologi modern.'
    },
    {
      id: 3,
      name: 'Kerajinan Perak',
      description: 'Spot Kerajinan Perak menampilkan proses pembuatan perhiasan dan cendera mata dari perak oleh pengrajin lokal, sekaligus membuka ruang edukasi dan pengalaman langsung bagi pengunjung dalam membuat karya perak mereka sendiri.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/WhatsApp%20Image%202025-08-07%20at%2007.22.57_dde23ef3.jpg',
      coordinates: [-8.138856086493336, 110.65954277566878],
      fullDescription: 'Spot Kerajinan Perak di desa wisata ini menjadi jendela bagi para pengunjung untuk menyaksikan secara langsung keindahan dan ketelatenan dalam seni mengolah logam mulia menjadi karya bernilai tinggi. Di area ini, wisatawan dapat menjumpai deretan pengrajin lokal yang dengan cekatan membentuk, memahat, dan mengukir perak menjadi berbagai produk menarik seperti cincin, gelang, bros, miniatur, dan aneka cendera mata khas.'
    },
    {
      id: 4,
      name: 'Permainan Sawah-sawahan',
      description: 'Permainan ini mengadaptasi congklak tradisional menjadi versi raksasa di area persawahan, mengajak pengunjung bermain sambil merasakan sensasi alam pedesaan yang unik dan menyenangkan.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_161313.jpg',
      coordinates: [-8.138496122787766, 110.65969269166504],
      fullDescription: 'menghadirkan sensasi bermain congklak dengan skala yang lebih besar dan suasana alam pedesaan yang asri. Terinspirasi dari permainan tradisional dakon atau congklak, spot ini menggunakan media berupa lubang-lubang besar yang dibuat di tanah sawah atau wadah alami, sementara biji congklak diganti dengan benda-benda khas desa seperti biji-bijian, kerikil sungai, atau buah-buahan kecil.'
    },
    {
      id: 5,
      name: 'UMKM Anyaman',
      description: 'Spot UMKM Anyaman menyajikan kerajinan tradisional berbahan alami karya warga desa, di mana pengunjung bisa membeli hasil anyaman khas atau ikut belajar langsung proses pembuatannya.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_161409.jpg',
      coordinates: [-8.138445090870901, 110.65990306664135],
      fullDescription: 'Spot UMKM Anyaman di desa wisata ini menampilkan kekayaan kreativitas warga dalam mengolah bahan-bahan alami menjadi produk kerajinan tangan yang bernilai seni tinggi. Dari bambu, pandan, rotan, hingga daun kelapa, tangan-tangan terampil para perajin desa mengubahnya menjadi aneka bentuk seperti tas, tikar, keranjang, topi, hiasan dinding, hingga wadah makanan yang ramah lingkungan.'
    },
    {
      id: 6,
      name: 'Telaga Sumur',
      description: 'Telaga Sumur di Desa Trosari menawarkan keseruan bermain layang-layang di tengah hamparan alam yang asri, dengan angin sepoi yang membuat layangan terbang tinggi di langit biru desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_162509.jpg',
      coordinates: [-8.142182032802083, 110.6586708790847],
      fullDescription: 'elaga Sumur di Desa Trosari tidak hanya memikat dengan keindahan alamnya yang tenang, tetapi juga menjadi lokasi favorit untuk menikmati permainan tradisional yang sarat kenangan: menerbangkan layang-layang. Berada di area terbuka yang luas dengan hembusan angin yang stabil, telaga ini menawarkan kondisi ideal bagi layang-layang untuk terbang tinggi menghiasi langit biru desa.'
    }
   ];

  // State untuk mengelola modal
  const [selectedAttraction, setSelectedAttraction] = useState(null); // Menyimpan data daya tarik yang dipilih
  const [isModalOpen, setIsModalOpen] = useState(false); // Mengontrol visibilitas modal

  // Fungsi untuk membuka modal
  const openModal = (attraction) => {
    setSelectedAttraction(attraction);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedAttraction(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <MapSection attractions={attractionsData} />
      {/* Meneruskan fungsi openModal ke AttractionCards */}
      <AttractionCards attractions={attractionsData} openModal={openModal} />
      <Footer />

      {/* Render modal jika isModalOpen true dan ada selectedAttraction */}
      {isModalOpen && selectedAttraction && (
        <AttractionDetailModal
          attraction={selectedAttraction}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
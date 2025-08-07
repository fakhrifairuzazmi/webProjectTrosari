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
      description: 'Air terjun yaefefevefvng memukau dengan suasana asri dan air yang jernih. Lokasi ini sangat cocok untuk relaksasi dan menikmati keindahan alam. Anda bisa berfoto dengan latar belakang air terjun yang megah dan merasakan kesegaran airnya.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_160656.jpg',
      coordinates: [-8.138915624551313, 110.6593197409045],
      fullDescription: 'Air Terjun Indah adalah permata tersembunyi di desa ini. Dengan ketinggian sekitar 30 meter, airnya jatuh deras membentuk kolam alami yang jernih di bawahnya. Area sekitar air terjun dikelilingi oleh pepohonan rindang dan bebatuan alami, menciptakan suasana yang sangat tenang dan sejuk. Pengunjung bisa berenang di kolam, piknik di tepi sungai, atau sekadar duduk bersantai menikmati suara gemericik air. Akses menuju air terjun cukup mudah, dengan jalur setapak yang sudah tertata baik.'
    },
    {
      id: 2,
      name: 'Permainan Egrang',
      description: 'Hamparan sawah terasering yang menyejukkan mata, cocok untuk swafoto.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_160649.jpg',
      coordinates: [-8.138966601599844, 110.6594965249901],
      fullDescription: 'Persawahan Hijau menawarkan pemandangan terasering yang menakjubkan, terutama saat padi mulai menguning atau baru ditanam. Ini adalah spot favorit para fotografer dan pecinta alam. Anda bisa berjalan-jalan di pematang sawah, berinteraksi dengan petani lokal, atau sekadar menikmati udara segar pedesaan. Pemandangan matahari terbit atau terbenam di atas hamparan sawah ini adalah pengalaman yang tak terlupakan.'
    },
    {
      id: 3,
      name: '3',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG-20230529-WA0070.jpg',
      coordinates: [-8.138856086493336, 110.65954277566878],
      fullDescription: 'Pusat Kerajinan Lokal adalah jantung kreativitas desa. Di sini, Anda bisa melihat langsung proses pembuatan berbagai kerajinan tangan tradisional seperti anyaman bambu, ukiran kayu, atau kain tenun. Pengunjung juga bisa membeli produk-produk unik ini sebagai oleh-oleh. Ini adalah kesempatan bagus untuk mendukung ekonomi lokal dan membawa pulang kenang-kenangan otentik dari desa.'
    },
    {
      id: 4,
      name: '4',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_161313.jpg',
      coordinates: [-8.138496122787766, 110.65969269166504],
      fullDescription: 'Pusat Kerajinan Lokal adalah jantung kreativitas desa. Di sini, Anda bisa melihat langsung proses pembuatan berbagai kerajinan tangan tradisional seperti anyaman bambu, ukiran kayu, atau kain tenun. Pengunjung juga bisa membeli produk-produk unik ini sebagai oleh-oleh. Ini adalah kesempatan bagus untuk mendukung ekonomi lokal dan membawa pulang kenang-kenangan otentik dari desa.'
    },
    {
      id: 5,
      name: '5',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_161409.jpg',
      coordinates: [-8.138445090870901, 110.65990306664135],
      fullDescription: 'Pusat Kerajinan Lokal adalah jantung kreativitas desa. Di sini, Anda bisa melihat langsung proses pembuatan berbagai kerajinan tangan tradisional seperti anyaman bambu, ukiran kayu, atau kain tenun. Pengunjung juga bisa membeli produk-produk unik ini sebagai oleh-oleh. Ini adalah kesempatan bagus untuk mendukung ekonomi lokal dan membawa pulang kenang-kenangan otentik dari desa.'
    },
    {
      id: 6,
      name: 'Telaga Sumur',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG_20250730_162509.jpg',
      coordinates: [-8.142182032802083, 110.6586708790847],
      fullDescription: 'Pusat Kerajinan Lokal adalah jantung kreativitas desa. Di sini, Anda bisa melihat langsung proses pembuatan berbagai kerajinan tangan tradisional seperti anyaman bambu, ukiran kayu, atau kain tenun. Pengunjung juga bisa membeli produk-produk unik ini sebagai oleh-oleh. Ini adalah kesempatan bagus untuk mendukung ekonomi lokal dan membawa pulang kenang-kenangan otentik dari desa.'
    },
    {
      id: 7,
      name: '7',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'https://raw.githubusercontent.com/fakhrifairuzazmi/gambar-gambar/refs/heads/main/IMG-20230529-WA0070.jpg',
      coordinates: [-8.138623048575724, 110.65943619745563],
      fullDescription: 'Pusat Kerajinan Lokal adalah jantung kreativitas desa. Di sini, Anda bisa melihat langsung proses pembuatan berbagai kerajinan tangan tradisional seperti anyaman bambu, ukiran kayu, atau kain tenun. Pengunjung juga bisa membeli produk-produk unik ini sebagai oleh-oleh. Ini adalah kesempatan bagus untuk mendukung ekonomi lokal dan membawa pulang kenang-kenangan otentik dari desa.'
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
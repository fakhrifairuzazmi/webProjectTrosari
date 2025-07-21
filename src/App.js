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
      name: 'Air Terjun Indahhhhhhhh',
      description: 'Air terjun yaefefevefvng memukau dengan suasana asri dan air yang jernih. Lokasi ini sangat cocok untuk relaksasi dan menikmati keindahan alam. Anda bisa berfoto dengan latar belakang air terjun yang megah dan merasakan kesegaran airnya.',
      image: 'images/air-terjun.jpg',
      coordinates: [-8.138507488864654, 110.66157532251307],
      fullDescription: 'Air Terjun Indah adalah permata tersembunyi di desa ini. Dengan ketinggian sekitar 30 meter, airnya jatuh deras membentuk kolam alami yang jernih di bawahnya. Area sekitar air terjun dikelilingi oleh pepohonan rindang dan bebatuan alami, menciptakan suasana yang sangat tenang dan sejuk. Pengunjung bisa berenang di kolam, piknik di tepi sungai, atau sekadar duduk bersantai menikmati suara gemericik air. Akses menuju air terjun cukup mudah, dengan jalur setapak yang sudah tertata baik.'
    },
    {
      id: 2,
      name: 'Persawahan Hijau',
      description: 'Hamparan sawah terasering yang menyejukkan mata, cocok untuk swafoto.',
      image: 'images/persawahan.jpg',
      coordinates: [-7.8050, 110.3680],
      fullDescription: 'Persawahan Hijau menawarkan pemandangan terasering yang menakjubkan, terutama saat padi mulai menguning atau baru ditanam. Ini adalah spot favorit para fotografer dan pecinta alam. Anda bisa berjalan-jalan di pematang sawah, berinteraksi dengan petani lokal, atau sekadar menikmati udara segar pedesaan. Pemandangan matahari terbit atau terbenam di atas hamparan sawah ini adalah pengalaman yang tak terlupakan.'
    },
    {
      id: 3,
      name: 'Pusat Kerajinan Lokal',
      description: 'Tempat di mana Anda bisa menemukan berbagai kerajinan tangan khas desa.',
      image: 'images/kerajinan.jpg',
      coordinates: [-7.8030, 110.3660],
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

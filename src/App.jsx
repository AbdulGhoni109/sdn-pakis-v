import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import MediaAR from './pages/MediaAR';
import Berita from './pages/Berita';
import Prestasi from './pages/Prestasi';
import Ekskul from './pages/Ekskul';
import Rekap from './pages/Rekap';
import Perangkat from './pages/Perangkat';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* All sections stacked — navbar highlights active via IntersectionObserver */}
        <Beranda />
        <Profil />
        <MediaAR />
        <Berita />
        <Prestasi />
        <Ekskul />
        <Rekap />
        <Perangkat />
      </main>

      <Footer />
    </div>
  );
}

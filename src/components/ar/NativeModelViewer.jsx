import { useState, useRef } from 'react';
import { Smartphone, Sparkles, Box, QrCode, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';

export default function NativeModelViewer() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [showQr, setShowQr] = useState(false);
  const modelViewerRef = useRef(null);

  // Current page URL for QR Code
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sdnpakis5.sch.id';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-card border border-gray-100">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <Box className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Model 3D & Native WebAR (Google ARCore & Apple ARKit)
            </h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Teknologi WebAR standar industri tanpa install aplikasi. Mendukung penempatan model di atas lantai atau meja nyata siswa.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowQr(!showQr)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold transition-colors"
          >
            <QrCode className="w-4 h-4 text-primary-700" />
            {showQr ? 'Tutup QR HP' : 'Scan di HP Siswa'}
          </button>
        </div>
      </div>

      {/* QR Code Modal / Popup for presentations */}
      {showQr && (
        <div className="mb-6 p-5 rounded-2xl bg-primary-50 border border-primary-200 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={qrCodeUrl}
            alt="QR Code Website SDN Pakis V"
            className="w-36 h-36 rounded-xl bg-white p-2 shadow-md border border-primary-100"
          />
          <div className="text-left">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-700 text-white text-[10px] font-bold uppercase tracking-wider mb-1">
              Khusus Presentasi Sidang & Uji Coba Siswa
            </span>
            <h4 className="text-base font-bold text-primary-900">
              Buka Langsung di Kamera HP Anda
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Scan barcode di atas menggunakan kamera smartphone (iPhone/Android). Buka link di browser Chrome atau Safari, lalu tekan tombol <strong>&quot;Lihat di Ruangan Anda (AR)&quot;</strong> di bawah ini. Objek Garuda akan langsung berdiri di atas meja sidang Anda!
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Model Viewer Container */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl bg-slate-950 overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center">
            {/* Google Model-Viewer Web Component */}
            {/* @ts-ignore */}
            <model-viewer
              ref={modelViewerRef}
              src="/models/garuda.glb"
              alt="Model 3D Medali Garuda Pancasila"
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              touch-action="pan-y"
              auto-rotate={autoRotate ? '' : null}
              shadow-intensity="1.5"
              exposure="1.1"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Native AR Button inside model-viewer */}
              <button
                slot="ar-button"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 border-2 border-white/60"
              >
                <Smartphone className="w-4 h-4 text-slate-950" />
                Lihat di Ruangan Nyata (AR HP)
              </button>
            {/* @ts-ignore */}
            </model-viewer>

            {/* Overlay hint */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-[11px] font-semibold text-amber-300 border border-slate-700">
                <Sparkles className="w-3 h-3" />
                Format Standar .GLB (3D Web Engine)
              </span>
            </div>
          </div>

          {/* Model viewer controls */}
          <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
            <span>Gunakan mouse untuk putar 360° dan scroll untuk zoom</span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="text-primary-700 font-bold hover:underline"
            >
              {autoRotate ? 'Hentikan Putar Otomatis' : 'Aktifkan Putar Otomatis'}
            </button>
          </div>
        </div>

        {/* Technical Explanations for Thesis Defense (Dosen & Mahasiswa) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary-700" />
              Kompatibilitas Perangkat WebAR
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Android:</strong> Didukung otomatis oleh Google Scene Viewer / ARCore via browser Google Chrome.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>iOS (iPhone/iPad):</strong> Didukung otomatis oleh Apple Quick Look via Safari.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Komputer / Laptop:</strong> Tampilan interaktif 3D 360 derajat dengan kontrol mouse dan gesture.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Poin Penting untuk Sidang Tugas Akhir
            </h4>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              Fitur ini membuktikan bahwa website sekolah tidak hanya memuat teks statis, melainkan bertindak sebagai <strong>Laboratorium Virtual (Media Pembelajaran Imersif)</strong> yang menghemat anggaran sekolah karena tidak memerlukan kacamata VR/AR mahal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

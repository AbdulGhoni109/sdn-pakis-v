import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, CheckCircle2, BookOpen, Layers, Shield, Award } from 'lucide-react';
import { pancasilaItems, garudaAnatomy } from '../../data/pancasilaData';

export default function ThreeDExplorer() {
  const [selectedSila, setSelectedSila] = useState(pancasilaItems[0]);
  const [activeTab, setActiveTab] = useState('perisai'); // 'perisai' or 'anatomi'
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rotation, setRotation] = useState({ x: 10, y: -15 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const synthRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Text to speech function
  const speakText = (text) => {
    if (!synthRef.current) {
      alert('Browser Anda belum mendukung fitur audio narasi otomatis.');
      return;
    }

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      return;
    }

    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95; // Sedikit lebih lambat agar jelas untuk anak SD
    utterance.pitch = 1.05;

    // Try finding Indonesian voice if available
    const voices = synthRef.current.getVoices();
    const indonesianVoice = voices.find((v) => v.lang.includes('id') || v.lang.includes('ID'));
    if (indonesianVoice) {
      utterance.voice = indonesianVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  // 3D rotation dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    setRotation((prev) => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.4)),
      y: Math.max(-60, Math.min(60, prev.y + deltaX * 0.4)),
    }));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch rotation
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - lastMousePos.x;
    const deltaY = e.touches[0].clientY - lastMousePos.y;
    setRotation((prev) => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.4)),
      y: Math.max(-60, Math.min(60, prev.y + deltaX * 0.4)),
    }));
    setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const reset3D = () => {
    setRotation({ x: 10, y: -15 });
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-card border border-gray-100">
      {/* Sub-Header Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-100 text-primary-700">
              <Shield className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Eksplorasi 3D & Makna Filosofis Pancasila
            </h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Putar lambang 3D secara bebas, pilih perisai sila untuk mempelajari filosofi dan mendengarkan suara penjelasannya.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('perisai')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'perisai'
                ? 'bg-primary-700 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            5 Sila Pancasila
          </button>
          <button
            onClick={() => setActiveTab('anatomi')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'anatomi'
                ? 'bg-primary-700 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            Filosofi 17-8-1945
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: 3D Visualizer Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-b from-slate-900 via-primary-950 to-slate-900 flex items-center justify-center p-6 shadow-2xl cursor-grab active:cursor-grabbing select-none overflow-hidden border border-slate-700/60"
            style={{ perspective: '1000px', touchAction: 'none' }}
          >
            {/* Subtle radial aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,168,56,0.25)_0%,transparent_70%)] pointer-events-none"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* 3D Transform Container */}
            <div
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className="relative flex items-center justify-center"
            >
              {/* Gold Plaque / Medallion Rim (Back shadow) */}
              <div
                style={{ transform: 'translateZ(-16px)' }}
                className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-300 opacity-90 blur-sm shadow-2xl"
              ></div>

              {/* Main Garuda Vector Emblem */}
              <img
                src="/images/garuda.png"
                alt="Garuda Pancasila 3D Emblem"
                className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter contrast-105 pointer-events-none"
                style={{ transform: 'translateZ(20px)' }}
              />

              {/* Dynamic light glint overlay */}
              <div
                style={{
                  transform: 'translateZ(25px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                }}
                className="absolute inset-0 rounded-full pointer-events-none opacity-40 mix-blend-overlay"
              ></div>
            </div>

            {/* Control hints */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300/80 pointer-events-none">
              <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700/80">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Klik & Geser untuk Memutar 3D
              </span>
              <button
                type="button"
                onClick={reset3D}
                className="pointer-events-auto bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg text-slate-200 border border-slate-600 font-medium transition-colors"
              >
                Reset Sudut
              </button>
            </div>
          </div>

          {/* Sila Selection Buttons */}
          {activeTab === 'perisai' && (
            <div className="mt-5 w-full max-w-[420px]">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 text-center">
                Pilih Sila untuk Membedah Makna:
              </p>
              <div className="grid grid-cols-5 gap-2">
                {pancasilaItems.map((item) => {
                  const isSelected = selectedSila.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedSila(item);
                        if (isSpeaking && synthRef.current) {
                          synthRef.current.cancel();
                          setIsSpeaking(false);
                        }
                      }}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black shadow-lg scale-105 ring-2 ring-amber-400 ring-offset-2'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold'
                      }`}
                      title={item.bunyi}
                    >
                      <span className="text-xs">Sila</span>
                      <span className="text-base font-extrabold">{item.silaKe}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Educational Content & Audio Narration */}
        <div className="lg:col-span-6">
          {activeTab === 'perisai' ? (
            <div className="bg-gradient-to-br from-amber-50/60 to-primary-50/50 p-6 sm:p-7 rounded-3xl border border-amber-200/60">
              {/* Header Sila */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase mb-2">
                    Sila Ke-{selectedSila.silaKe}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-primary-900 leading-snug">
                    &quot;{selectedSila.bunyi}&quot;
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    Simbol: <strong className="text-gray-900">{selectedSila.nama}</strong> ({selectedSila.posisiPerisai})
                  </p>
                </div>

                {/* Voice Narration Button */}
                <button
                  onClick={() => speakText(selectedSila.audioNarasi)}
                  className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                    isSpeaking
                      ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                      : 'bg-primary-700 hover:bg-primary-800 text-white'
                  }`}
                  title="Dengarkan penjelasan suara bahasa Indonesia"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      Hentikan Suara
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-amber-300" />
                      Dengarkan Suara
                    </>
                  )}
                </button>
              </div>

              {/* Makna Filosofis */}
              <div className="mb-5 bg-white/80 backdrop-blur p-4 rounded-2xl border border-amber-200/40">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Makna Filosofis Lambang
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {selectedSila.makna}
                </p>
              </div>

              {/* Pengamalan di Sekolah */}
              <div className="bg-white/80 backdrop-blur p-4 rounded-2xl border border-amber-200/40">
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  Contoh Pengamalan Siswa SDN Pakis V:
                </div>
                <ul className="space-y-2">
                  {selectedSila.pengamalan.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Tab Anatomi & Filosofi Tanggal Kemerdekaan */
            <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-gray-200">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-primary-700 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Sejarah & Filosofi
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Makna Jumlah Bulu Keramat (17-8-1945)
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Jumlah bulu pada tubuh burung Garuda melambangkan tanggal proklamasi kemerdekaan Republik Indonesia:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {garudaAnatomy.map((item, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-primary-800">{item.bagian}</span>
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                        {item.jumlah}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-600 leading-snug">{item.makna}</p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Semboyan Bhinneka Tunggal Ika:</strong> Ditulis pada pita putih yang dicengkeram kuat oleh kedua cakar Garuda, menegaskan bahwa meski berbeda suku, agama, dan adat istiadat, kita tetap satu bangsa Indonesia.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import {
  Sparkles, Camera, Shield, Box, HelpCircle,
  Smartphone, Volume2, CheckCircle2, Lightbulb, Compass
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import ThreeDExplorer from '../components/ar/ThreeDExplorer';
import WebcamARViewer from '../components/ar/WebcamARViewer';
import NativeModelViewer from '../components/ar/NativeModelViewer';
import PancasilaQuiz from '../components/ar/PancasilaQuiz';

export default function MediaAR() {
  const [activeMode, setActiveMode] = useState('3d'); // '3d' | 'camera' | 'arcore' | 'kuis'

  const modes = [
    {
      id: '3d',
      label: 'Eksplorasi 3D & Suara',
      sublabel: 'Bedah Sila & Narasi Audio',
      icon: Shield,
      badge: 'Interaktif',
      badgeColor: 'bg-primary-100 text-primary-800',
    },
    {
      id: 'camera',
      label: 'Kamera WebAR Interaktif',
      sublabel: 'Augmented Reality Meja Siswa',
      icon: Camera,
      badge: 'Webcam AR',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'arcore',
      label: 'Native AR HP (ARCore/Kit)',
      sublabel: 'Letakkan Objek di Lantai/Meja',
      icon: Box,
      badge: 'Scan QR',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'kuis',
      label: 'Kuis Pendidikan Pancasila',
      sublabel: 'Uji Pemahaman Materi Siswa',
      icon: HelpCircle,
      badge: 'Evaluasi',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
  ];

  return (
    <section id="media-ar" className="scroll-mt-16 section-padding bg-slate-50/70 border-t border-b border-gray-100">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Inovasi Teknologi Pembelajaran Digital
            </div>
            <SectionHeader
              title="Media Pembelajaran WebAR: Garuda Pancasila"
              subtitle="Teknologi Augmented Reality interaktif berbasis web untuk menunjang Pendidikan Pancasila & Kewarganegaraan siswa SDN Pakis V Surabaya."
              centered
            />
          </div>
        </ScrollReveal>

        {/* Feature Highlights Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Tanpa Instalasi</h4>
                <p className="text-[11px] text-gray-500">Cukup buka browser web</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Audio Narasi</h4>
                <p className="text-[11px] text-gray-500">Suara bahasa Indonesia</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">3D Manipulasi</h4>
                <p className="text-[11px] text-gray-500">Rotasi, skala, & foto AR</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Kuis Evaluasi</h4>
                <p className="text-[11px] text-gray-500">Uji pemahaman siswa</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mode Selector Navigation Tabs */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border-2 relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-primary-600 shadow-lg ring-2 ring-primary-500/20'
                      : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/10 rounded-bl-full pointer-events-none"></div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-primary-700 text-white shadow-md' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mode.badgeColor}`}>
                      {mode.badge}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-primary-900' : 'text-gray-800'}`}>
                    {mode.label}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {mode.sublabel}
                  </p>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Dynamic Mode Viewer Display */}
        <ScrollReveal delay={200}>
          <div className="mb-10">
            {activeMode === '3d' && <ThreeDExplorer />}
            {activeMode === 'camera' && <WebcamARViewer />}
            {activeMode === 'arcore' && <NativeModelViewer />}
            {activeMode === 'kuis' && <PancasilaQuiz />}
          </div>
        </ScrollReveal>

        {/* Educational Note & Kurikulum Merdeka Guide */}
        <ScrollReveal delay={250}>
          <div className="bg-gradient-to-r from-primary-900 to-primary-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  Implementasi Kurikulum Merdeka (P5)
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                  Mewujudkan Profil Pelajar Pancasila Melalui Teknologi Imersif
                </h3>
                <p className="text-xs sm:text-sm text-primary-200 leading-relaxed">
                  Melalui media WebAR ini, siswa tidak hanya menghafal teks Pancasila di buku paket, namun dapat melihat, berinteraksi, mendengarkan filosofi, serta mengabadikan foto karya nyata pengamalan Pancasila di lingkungan SDN Pakis V Surabaya.
                </p>
              </div>

              <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-xs space-y-1.5 w-full md:w-auto">
                <span className="block font-bold text-amber-300">Target Capaian Pembelajaran:</span>
                <div className="flex items-center gap-2 text-primary-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Mengenal simbol & sila Pancasila
                </div>
                <div className="flex items-center gap-2 text-primary-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Memahami filosofi 17-8-1945
                </div>
                <div className="flex items-center gap-2 text-primary-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Mempraktikkan pengamalan di kelas
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

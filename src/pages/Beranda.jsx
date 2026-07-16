import {
  Users, GraduationCap, Award, Calendar,
  Eye, Target, ChevronDown
} from 'lucide-react';
import { schoolInfo, visiMisi, stats, news } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const iconMap = { Users, GraduationCap, Award, Calendar };

// ── Placeholder image ─────────────────────────────────────────────────────────
function PlaceholderImage({ label = 'Foto Sekolah', className = '', aspectClass = 'aspect-video' }) {
  return (
    <div className={`${aspectClass} ${className} bg-gradient-to-br from-primary-200 to-primary-400
                     flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '12px 12px' }} />
      <span className="relative text-primary-800 text-sm font-semibold bg-white/60 px-3 py-1.5 rounded-lg">
        📷 {label}
      </span>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollNext = () => {
    const el = document.getElementById('profil');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-800">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
        {/* TODO: Ganti div ini dengan <img src="/foto-sekolah.jpg" className="w-full h-full object-cover" /> */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/80" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pt-16">
        <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-400/30
                         text-accent-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm
                         animate-[fadeIn_0.5s_ease-out_forwards]">
          <Award className="w-3.5 h-3.5" /> Akreditasi A · NPSN {schoolInfo.npsn}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4
                       animate-[fadeUp_0.6s_ease-out_0.1s_forwards] opacity-0">
          {schoolInfo.name}
        </h1>

        <p className="text-primary-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-2
                      animate-[fadeUp_0.6s_ease-out_0.25s_forwards] opacity-0">
          {schoolInfo.kecamatan}, {schoolInfo.city}
        </p>

        <p className="italic text-accent-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed
                      animate-[fadeUp_0.6s_ease-out_0.35s_forwards] opacity-0">
          "{visiMisi.visi.split(' ').slice(0, 8).join(' ')}…"
        </p>

        <button
          onClick={scrollNext}
          className="animate-[fadeUp_0.6s_ease-out_0.45s_forwards] opacity-0
                     inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white
                     font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
        >
          Jelajahi Sekolah <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollNext} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </button>
    </div>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-6 sm:p-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                   ${stat.color === 'accent' ? 'bg-accent-100' : 'bg-primary-100'}`}>
                    {Icon && <Icon className={`w-5 h-5 ${stat.color === 'accent' ? 'text-accent-600' : 'text-primary-700'}`} />}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-2xl font-extrabold text-primary-800">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Visi & Misi ───────────────────────────────────────────────────────────────
function VisiMisiSection() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader title="Visi & Misi" subtitle="Landasan arah dan tujuan pendidikan SDN Pakis V Surabaya" centered />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={100}>
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="text-lg font-bold text-primary-700">Visi</h3>
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-accent-400 pl-4">
                "{visiMisi.visi}"
              </blockquote>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold text-primary-700">Misi</h3>
              </div>
              <ol className="space-y-2.5">
                {visiMisi.misi.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-primary-700 text-white text-xs flex items-center
                                     justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

// ── News Preview ──────────────────────────────────────────────────────────────
function NewsPreview() {
  const scrollToBerita = () => {
    // No-op in single page — berita is its own section below
  };
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader title="Berita Terbaru" subtitle="Kegiatan dan informasi terkini dari SDN Pakis V" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.slice(0, 3).map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <div className="card group cursor-pointer">
                <PlaceholderImage label={item.thumbnailAlt} className="w-full" aspectClass="aspect-video" />
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-0.5 rounded-md mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 group-hover:text-primary-700
                                 transition-colors duration-200 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{item.dateFormatted}</span>
                    <span className="text-xs text-primary-700 font-semibold">Baca →</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Exported section ──────────────────────────────────────────────────────────
export default function Beranda() {
  return (
    <section id="beranda">
      <Hero />
      <StatsBar />
      <VisiMisiSection />
    </section>
  );
}

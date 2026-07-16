import { Calendar, Tag } from 'lucide-react';
import { news } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

function PlaceholderImage({ label = 'Thumbnail' }) {
  return (
    <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-400
                    flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '12px 12px' }} />
      <span className="relative text-primary-800 text-xs font-semibold bg-white/60 px-2 py-1 rounded-md">
        📷 {label}
      </span>
    </div>
  );
}

export default function Berita() {
  return (
    <section id="berita" className="scroll-mt-16 section-padding bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            title="Berita Sekolah"
            subtitle="Kegiatan, prestasi, dan informasi terkini dari SDN Pakis V Surabaya"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <article className="card group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <PlaceholderImage label={item.thumbnailAlt} />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold
                                   text-white bg-accent-500 px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" /> {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.dateFormatted}
                  </div>
                  <h2 className="font-bold text-gray-800 leading-snug mb-2 group-hover:text-primary-700
                                 transition-colors duration-200 text-base">{item.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{item.excerpt}</p>
                  <button
                    className="self-start text-xs font-semibold text-primary-700 border border-primary-200
                               px-3 py-1.5 rounded-lg hover:bg-primary-700 hover:text-white transition-all duration-200"
                    onClick={() => alert('Konten lengkap belum tersedia — tambahkan field "content" di data/content.js')}
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Clock, User } from 'lucide-react';
import { extracurricular } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

function PlaceholderImage({ emoji }) {
  return (
    <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-400
                    flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '12px 12px' }} />
      <span className="relative text-5xl">{emoji}</span>
    </div>
  );
}

export default function Ekskul() {
  return (
    <section id="ekskul" className="scroll-mt-16 section-padding bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            title="Ekstrakurikuler"
            subtitle={`${extracurricular.length} kegiatan aktif — mengembangkan bakat, minat, dan karakter siswa`}
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extracurricular.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <div className="card group h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="relative overflow-hidden">
                  <PlaceholderImage emoji={item.emoji} />
                  {/* TODO: Ganti PlaceholderImage dengan <img src={item.thumbnail} /> saat foto tersedia */}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-primary-700 text-base mb-2 group-hover:text-accent-600
                                 transition-colors duration-200">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                      <span>{item.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      <span>Pembina: {item.pembina}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

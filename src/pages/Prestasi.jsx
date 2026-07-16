import { Trophy, Users, Building2 } from 'lucide-react';
import { achievements } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const levelConfig = {
  Kecamatan: { color: 'bg-blue-100 text-blue-700 border-blue-200',    dot: 'bg-blue-500' },
  Kota:      { color: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500' },
  Provinsi:  { color: 'bg-purple-100 text-purple-700 border-purple-200', dot: 'bg-purple-500' },
  Nasional:  { color: 'bg-red-100 text-red-700 border-red-200',       dot: 'bg-red-500' },
};

export default function Prestasi() {
  return (
    <section id="prestasi" className="scroll-mt-16 section-padding bg-gray-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            title="Prestasi Siswa"
            subtitle="Pencapaian terbaik kami dari berbagai kompetisi akademik dan non-akademik"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />

          <div className="space-y-5">
            {achievements.map((item, i) => {
              const lvl = levelConfig[item.level] || levelConfig.Kecamatan;
              return (
                <ScrollReveal key={item.id} delay={i * 100}>
                  <div className="sm:pl-16 relative">
                    {/* Timeline dot */}
                    <div className={`absolute left-3 top-5 w-5 h-5 rounded-full ${lvl.dot}
                                     hidden sm:flex items-center justify-center ring-4 ring-white`}>
                      <Trophy className="w-2.5 h-2.5 text-white" />
                    </div>

                    <div className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-accent-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-800 text-sm leading-snug">{item.title}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${lvl.color}`}>
                            {item.level}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" /> {item.student}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" /> {item.organizer}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="inline-flex flex-col items-center bg-primary-50 border border-primary-100
                                        rounded-lg px-3 py-2 text-center">
                          <span className="text-xs font-bold text-primary-700">{item.month}</span>
                          <span className="text-xs text-gray-400">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <ScrollReveal delay={200}>
          <div className="mt-10 p-4 bg-white rounded-xl border border-gray-100 flex flex-wrap gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-full mb-1">Keterangan Tingkat:</p>
            {Object.entries(levelConfig).map(([key, val]) => (
              <span key={key} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${val.color}`}>
                {key}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

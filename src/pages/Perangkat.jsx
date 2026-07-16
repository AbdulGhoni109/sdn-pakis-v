import {
  BookOpen, Layers, FileText, FilePlus, Sparkles,
  ClipboardCheck, CheckSquare, FileDown, Download, ExternalLink
} from 'lucide-react';
import { learningTools } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const iconMap = {
  BookOpen, Layers, FileText, FilePlus, Sparkles,
  ClipboardCheck, CheckSquare, FileDown,
};

const fileTypeStyle = {
  PDF:  'bg-red-100 text-red-600',
  DOCX: 'bg-blue-100 text-blue-600',
  LINK: 'bg-purple-100 text-purple-600',
};

export default function Perangkat() {
  return (
    <section id="perangkat" className="scroll-mt-16 section-padding bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            title="Perangkat Pembelajaran"
            subtitle="Kumpulan dokumen, template, dan tools untuk mendukung pembelajaran berbasis Kurikulum Merdeka"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {learningTools.map((item, i) => {
            const Icon = iconMap[item.icon] || FileText;
            const isExternal = item.type === 'external';

            return (
              <ScrollReveal key={item.id} delay={i * 60}>
                <div className="card p-5 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center
                                    group-hover:bg-primary-700 transition-colors duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${fileTypeStyle[item.fileType] || 'bg-gray-100 text-gray-600'}`}>
                      {item.fileType}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-primary-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{item.description}</p>

                  <a
                    id={`tool-btn-${item.id}`}
                    href={item.url}
                    target={isExternal ? '_blank' : '_self'}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200
                                active:scale-95 shadow-sm ${isExternal
                                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                                  : 'bg-primary-700 text-white hover:bg-primary-800'}`}
                    onClick={item.url === '#' ? (e) => { e.preventDefault(); alert(`Link "${item.title}" belum tersedia.\nUpdate field "url" di src/data/content.js`); } : undefined}
                  >
                    {isExternal
                      ? <><ExternalLink className="w-3.5 h-3.5" /> Buka Tools</>
                      : <><Download className="w-3.5 h-3.5" /> Unduh</>
                    }
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Info note */}
        <ScrollReveal delay={100}>
          <div className="mt-8 p-4 bg-accent-50 border border-accent-200 rounded-xl flex items-start gap-3">
            <span className="text-accent-500 text-lg flex-shrink-0 mt-0.5">ℹ️</span>
            <p className="text-xs text-accent-800 leading-relaxed">
              <strong>Catatan:</strong> Seluruh link download masih menggunakan placeholder.
              Update URL di{' '}
              <code className="bg-accent-100 px-1 py-0.5 rounded text-xs">src/data/content.js</code>
              {' '}→ bagian <code className="bg-accent-100 px-1 py-0.5 rounded text-xs">learningTools</code>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

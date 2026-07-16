import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/content';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">{schoolInfo.shortName}</p>
                <p className="text-xs text-primary-200">{schoolInfo.city}</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Sekolah Dasar Negeri bermutu di Kecamatan Sawahan, Kota Surabaya.
              Terakreditasi A — mendidik generasi yang unggul dan berkarakter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-accent-400 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-primary-200 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-accent-400 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span>{schoolInfo.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={`tel:${schoolInfo.telp}`} className="hover:text-white transition-colors">
                  {schoolInfo.telp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-800 flex flex-col sm:flex-row justify-between
                        items-center gap-2 text-xs text-primary-300">
          <p>© {year} {schoolInfo.name}. Hak Cipta Dilindungi.</p>
          <p>NPSN: {schoolInfo.npsn}</p>
        </div>
      </div>
    </footer>
  );
}

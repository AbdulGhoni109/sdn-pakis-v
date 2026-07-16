import {
  Hash, MapPin, Star, User2, Phone, Calendar,
  BookOpen, Monitor, Library, Users, Briefcase,
  FileText, Heart, Layout, Dumbbell, Activity,
  Wrench, BookMarked, Image, ArrowLeftRight, Lock,
  ClipboardList, ShoppingBag, Droplets, Package,
  Home, MoreHorizontal
} from 'lucide-react';
import { schoolInfo, facilities } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const iconMap = {
  BookOpen, Monitor, Library, Users, Briefcase,
  FileText, Heart, Star, Layout, Dumbbell, Activity,
  Wrench, BookMarked, Image, ArrowLeftRight, Lock,
  ClipboardList, ShoppingBag, Droplets, Package,
  Home, MoreHorizontal,
};

const schoolFields = [
  { label: 'NPSN',              value: schoolInfo.npsn,            icon: Hash },
  { label: 'Nama Sekolah',      value: schoolInfo.name,            icon: BookOpen },
  { label: 'Alamat',            value: schoolInfo.fullAddress,     icon: MapPin },
  { label: 'Akreditasi',        value: schoolInfo.akreditasi,      icon: Star },
  { label: 'Kepala Sekolah',    value: schoolInfo.kepalaSekolah,   icon: User2 },
  { label: 'Telepon',           value: schoolInfo.telp,            icon: Phone },
  { label: 'Tanggal Pendirian', value: schoolInfo.tanggalPendirian,icon: Calendar },
  { label: 'Status',            value: schoolInfo.statusSekolah,   icon: Briefcase },
  { label: 'Naungan',           value: schoolInfo.naungan,         icon: Layout },
];

export default function Profil() {
  return (
    <section id="profil" className="scroll-mt-16">
      {/* Data Sekolah */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeader title="Profil Sekolah" subtitle="Data dan informasi identitas resmi SDN Pakis V/372 Surabaya" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {schoolFields.map((field, i) => {
              const Icon = field.icon;
              return (
                <ScrollReveal key={field.label} delay={i * 60}>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100
                                   hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 group">
                    <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0
                                    group-hover:bg-primary-700 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-primary-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{field.label}</p>
                      <p className="text-sm font-semibold text-gray-800 mt-0.5">{field.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sarana & Prasarana */}
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeader
              title="Sarana & Prasarana"
              subtitle="Fasilitas yang tersedia di SDN Pakis V untuk mendukung proses belajar mengajar"
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilities.map((item, i) => {
              const Icon = iconMap[item.icon] || BookOpen;
              return (
                <ScrollReveal key={`${item.name}-${i}`} delay={(i % 8) * 60}>
                  <div className="card p-4 flex flex-col items-center text-center gap-2 group hover:-translate-y-1 transition-transform duration-200">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center
                                    group-hover:bg-primary-700 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700 leading-tight">{item.name}</p>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full
                                     bg-accent-100 text-accent-700 text-xs font-bold">{item.count}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

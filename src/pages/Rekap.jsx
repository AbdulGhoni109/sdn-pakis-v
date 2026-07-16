import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { Users, GraduationCap } from 'lucide-react';
import { staffRecap, studentRecap } from '../data/content';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const ACCENT = '#E8A838';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2 text-xs">
        <p className="font-bold text-gray-700">{label}</p>
        <p className="text-primary-700 font-semibold">{payload[0].value} siswa</p>
      </div>
    );
  }
  return null;
}

export default function Rekap() {
  const [tab, setTab] = useState('siswa');

  return (
    <section id="rekap" className="scroll-mt-16 section-padding bg-gray-50">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader title="Rekap Data" subtitle="Ringkasan data guru, pegawai, dan peserta didik SDN Pakis V Surabaya" />
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={60}>
          <div className="flex gap-2 mb-8 bg-white p-1 rounded-xl border border-gray-100 shadow-sm w-fit">
            <button
              id="tab-siswa"
              onClick={() => setTab('siswa')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === 'siswa' ? 'bg-primary-700 text-white shadow-sm' : 'text-gray-500 hover:text-primary-700'
              }`}
            >
              <Users className="w-4 h-4" /> Peserta Didik
            </button>
            <button
              id="tab-guru"
              onClick={() => setTab('guru')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === 'guru' ? 'bg-primary-700 text-white shadow-sm' : 'text-gray-500 hover:text-primary-700'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Guru & Pegawai
            </button>
          </div>
        </ScrollReveal>

        {/* ── TAB: PESERTA DIDIK ─────────────────────────────── */}
        {tab === 'siswa' && (
          <div className="space-y-6">
            {/* Summary cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Total Siswa',       value: studentRecap.total,      color: 'primary' },
                { label: 'Rombongan Belajar', value: studentRecap.perKelas.reduce((a,k)=>a+k.rombel,0), color: 'accent' },
                { label: 'Laki-laki',         value: studentRecap.lakiLaki,   color: 'primary' },
                { label: 'Perempuan',         value: studentRecap.perempuan,  color: 'accent' },
              ].map((s) => (
                <ScrollReveal key={s.label}>
                  <div className={`card p-4 text-center border-t-4 ${s.color === 'accent' ? 'border-accent-500' : 'border-primary-700'}`}>
                    <p className={`text-2xl font-extrabold ${s.color === 'accent' ? 'text-accent-600' : 'text-primary-700'}`}>{s.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{s.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bar Chart */}
            <ScrollReveal delay={80}>
              <div className="card p-5">
                <h3 className="font-bold text-gray-700 text-sm mb-5">Jumlah Siswa per Kelas</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={studentRecap.perKelas} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="kelas" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="siswa" radius={[6, 6, 0, 0]}>
                      {studentRecap.perKelas.map((_, index) => (
                        <Cell key={index} fill={index % 2 === 0 ? '#1B4F72' : ACCENT} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            {/* Table */}
            <ScrollReveal delay={120}>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white text-left">
                        <th className="px-4 py-3 text-xs font-semibold">Kelas</th>
                        <th className="px-4 py-3 text-xs font-semibold">Rombel</th>
                        <th className="px-4 py-3 text-xs font-semibold">Jumlah Siswa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentRecap.perKelas.map((row, i) => (
                        <tr key={row.kelas} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="px-4 py-3 font-medium text-gray-700">{row.kelas}</td>
                          <td className="px-4 py-3 text-gray-500">{row.rombel} rombel</td>
                          <td className="px-4 py-3">
                            <span className="font-bold text-primary-700">{row.siswa}</span>
                            <span className="text-gray-400 text-xs ml-1">siswa</span>
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-primary-50 border-t-2 border-primary-200">
                        <td className="px-4 py-3 font-bold text-primary-700">Total</td>
                        <td className="px-4 py-3 font-bold text-primary-700">{studentRecap.perKelas.reduce((a,k)=>a+k.rombel,0)} rombel</td>
                        <td className="px-4 py-3 font-bold text-primary-700">{studentRecap.total} siswa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* ── TAB: GURU & PEGAWAI ────────────────────────────── */}
        {tab === 'guru' && (
          <div className="space-y-6">
            <ScrollReveal>
              <div className="card p-6 border-l-4 border-primary-700 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Total Tenaga</p>
                  <p className="text-3xl font-extrabold text-primary-700">{staffRecap.total}</p>
                  <p className="text-xs text-gray-500">Guru & Tenaga Kependidikan</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              <ScrollReveal delay={80}>
                <div className="card overflow-hidden">
                  <div className="bg-primary-700 px-4 py-3">
                    <h3 className="text-white text-sm font-bold">Breakdown Status Kepegawaian</h3>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {staffRecap.breakdown.map((row, i) => (
                        <tr key={row.category} className={`border-b border-gray-50 ${i%2===0?'bg-white':'bg-gray-50'}`}>
                          <td className="px-4 py-3 text-gray-700">{row.category}</td>
                          <td className="px-4 py-3 text-right font-bold text-primary-700">{row.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="card overflow-hidden">
                  <div className="bg-accent-500 px-4 py-3">
                    <h3 className="text-white text-sm font-bold">Breakdown Pendidikan Terakhir</h3>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {staffRecap.pendidikan.map((row, i) => (
                        <tr key={row.label} className={`border-b border-gray-50 ${i%2===0?'bg-white':'bg-gray-50'}`}>
                          <td className="px-4 py-3 text-gray-700">{row.label}</td>
                          <td className="px-4 py-3 text-right font-bold text-accent-700">{row.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

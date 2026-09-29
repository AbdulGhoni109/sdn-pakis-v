import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { quizQuestions } from '../../data/pancasilaData';

export default function PancasilaQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const finalPercentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-card border border-gray-100">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Kuis Evaluasi Pemahaman Pancasila
            </h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Uji sejauh mana pemahamanmu mengenai filosofi lambang Garuda Pancasila setelah melakukan eksplorasi 3D dan AR!
          </p>
        </div>

        {!isFinished && (
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200">
            <span className="text-xs font-bold text-emerald-900">Skor Sementara:</span>
            <span className="text-base font-black text-emerald-700">
              {score} / {quizQuestions.length}
            </span>
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-2">
              <span>Pertanyaan ke-{currentIdx + 1} dari {quizQuestions.length}</span>
              <span>{Math.round(((currentIdx + 1) / quizQuestions.length) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-primary-600 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 mb-6">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              let optStyle = 'bg-white hover:bg-gray-50 border-gray-200 text-gray-800';
              if (isAnswered) {
                if (idx === currentQ.correct) {
                  optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
                } else if (idx === selectedOption) {
                  optStyle = 'bg-red-50 border-red-400 text-red-900';
                } else {
                  optStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center justify-between gap-3 ${optStyle} ${
                    !isAnswered ? 'cursor-pointer hover:shadow-sm active:scale-[0.99]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isAnswered && idx === currentQ.correct
                          ? 'bg-emerald-500 text-white'
                          : isAnswered && idx === selectedOption
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && idx === currentQ.correct && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correct && (
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm animate-fadeIn">
              <strong className="block font-bold mb-1 flex items-center gap-1.5 text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Penjelasan Guru:
              </strong>
              {currentQ.explanation}
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
              >
                <span>{currentIdx + 1 === quizQuestions.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Finished Result Screen */
        <div className="max-w-md mx-auto text-center py-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 shadow-inner ring-4 ring-amber-200">
            <Award className="w-10 h-10" />
          </div>

          <h4 className="text-2xl font-black text-gray-900 mb-1">
            {finalPercentage >= 80 ? 'Luar Biasa, Siswa Hebat! 🎉' : 'Kerja Bagus, Terus Belajar! 👍'}
          </h4>
          <p className="text-sm text-gray-600 mb-6">
            Kamu telah menyelesaikan Kuis Pendidikan Pancasila berbasis Media AR SDN Pakis V.
          </p>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mb-6 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
              Skor Perolehan
            </span>
            <div className="text-4xl sm:text-5xl font-black text-primary-700 mb-2">
              {finalPercentage} <span className="text-xl font-bold text-gray-500">/ 100</span>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Menjawab benar <strong>{score}</strong> dari <strong>{quizQuestions.length}</strong> pertanyaan.
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Ulangi Kuis
          </button>
        </div>
      )}
    </div>
  );
}

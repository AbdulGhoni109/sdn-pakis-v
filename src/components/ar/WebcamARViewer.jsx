import { useState, useRef, useEffect } from 'react';
import { Camera, CameraOff, RefreshCw, ZoomIn, ZoomOut, RotateCw, Download, Sparkles, AlertCircle, Info, Image as ImageIcon } from 'lucide-react';

export default function WebcamARViewer() {
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' (back camera) or 'user' (front)
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [glowEffect, setGlowEffect] = useState(true);
  const [targetGuide, setTargetGuide] = useState(false);
  const [simulatedBg, setSimulatedBg] = useState(false);
  const [snapshotTaken, setSnapshotTaken] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const streamRef = useRef(null);

  // Start webcam
  const startCamera = async (mode = facingMode) => {
    setError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      const constraints = {
        video: {
          facingMode: mode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraActive(true);
      setSimulatedBg(false);
    } catch (err) {
      console.error('Camera error:', err);
      setError('Kamera tidak dapat diakses atau izin ditolak. Anda tetap dapat mencoba fitur AR menggunakan simulasi ruang kelas di bawah!');
      setCameraActive(false);
    }
  };

  // Stop webcam
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  // Toggle front / back camera
  const switchCamera = () => {
    const nextMode = facingMode === 'environment' ? 'user' : 'environment';
    setFacingMode(nextMode);
    if (cameraActive) {
      startCamera(nextMode);
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Dragging logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag logic for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Reset position & scale
  const resetTransform = () => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  // Take snapshot (photo)
  const takeSnapshot = () => {
    const canvas = document.createElement('canvas');
    const width = 1280;
    const height = 720;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 1. Draw video background or simulated bg
    if (cameraActive && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, width, height);
    } else {
      // Draw gradient room background
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(1, '#0f172a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillRect(100, 200, width - 200, height - 250);
    }

    // 2. Draw Garuda image
    const garudaImg = new Image();
    garudaImg.crossOrigin = 'anonymous';
    garudaImg.src = '/images/garuda.png';
    garudaImg.onload = () => {
      ctx.save();
      const centerX = width / 2 + position.x * (width / 600);
      const centerY = height / 2 + position.y * (height / 450);
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);
      const imgW = 320 * scale;
      const imgH = 340 * scale;

      // Glow effect on snapshot
      if (glowEffect) {
        ctx.shadowColor = 'rgba(232, 168, 56, 0.8)';
        ctx.shadowBlur = 40;
      }
      ctx.drawImage(garudaImg, -imgW / 2, -imgH / 2, imgW, imgH);
      ctx.restore();

      // 3. Add Watermark / Header
      ctx.fillStyle = 'rgba(27, 79, 114, 0.85)';
      ctx.fillRect(0, height - 60, width, 60);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('SDN PAKIS V/372 SURABAYA • Media Pembelajaran WebAR Garuda Pancasila', 30, height - 24);

      const now = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      ctx.font = '16px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#fbe199';
      ctx.fillText(now, width - 200, height - 24);

      // 4. Download file
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `Foto_AR_Garuda_SDNPakisV_${Date.now()}.png`;
      a.click();

      setSnapshotTaken(true);
      setTimeout(() => setSnapshotTaken(false), 3000);
    };
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 text-white shadow-2xl overflow-hidden border border-slate-700">
      {/* Top Banner / Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="font-bold text-lg sm:text-xl text-white">Mode Kamera WebAR Interaktif</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Arahkan kamera ke meja belajar atau ruangan kelas untuk memunculkan lambang Garuda Pancasila secara nyata.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {!cameraActive ? (
            <button
              onClick={() => startCamera()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-lg transition-transform active:scale-95"
            >
              <Camera className="w-4 h-4 text-slate-950" />
              Nyalakan Kamera AR
            </button>
          ) : (
            <>
              <button
                onClick={switchCamera}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-600"
                title="Ganti Kamera Depan/Belakang"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Ganti Kamera
              </button>
              <button
                onClick={stopCamera}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-xs font-semibold text-white border border-red-500"
              >
                <CameraOff className="w-3.5 h-3.5" />
                Matikan
              </button>
            </>
          )}

          {!cameraActive && (
            <button
              onClick={() => setSimulatedBg(!simulatedBg)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-600"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              {simulatedBg ? 'Tutup Simulasi Ruang' : 'Simulasi Meja Belajar'}
            </button>
          )}
        </div>
      </div>

      {/* Error Notice if any */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-start gap-2.5 text-amber-200 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />
          <div>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* AR Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[440px] sm:h-[520px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center select-none cursor-move border border-slate-800"
        style={{ touchAction: 'none' }}
      >
        {/* Background 1: Live Video Feed */}
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            cameraActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Background 2: Simulated Class Room / Desk when camera is off */}
        {!cameraActive && (
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-300 ${
              simulatedBg ? 'opacity-90' : 'opacity-25'
            }`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          </div>
        )}

        {/* Helper Overlay when Camera is NOT active */}
        {!cameraActive && !simulatedBg && (
          <div className="absolute top-4 left-4 right-4 text-center pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur text-xs font-medium text-amber-300 border border-amber-400/30">
              <Info className="w-3.5 h-3.5" />
              Klik &quot;Nyalakan Kamera AR&quot; di atas untuk menghubungkan kamera HP/Laptop Anda
            </span>
          </div>
        )}

        {/* Target Guide Box (Optional) */}
        {targetGuide && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-64 h-64 border-2 border-dashed border-amber-400/70 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-[11px] font-semibold text-amber-300/80 bg-slate-900/70 px-2 py-1 rounded">
                Arahkan ke Target Meja
              </span>
            </div>
          </div>
        )}

        {/* THE AR OBJECT: Garuda Pancasila with 3D Float, Drag, Scale, Rotate */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="relative z-20 cursor-grab active:cursor-grabbing p-4 group"
        >
          {/* Golden Aura Glow */}
          {glowEffect && (
            <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-3xl -z-10 animate-pulse pointer-events-none"></div>
          )}

          {/* Floating badge */}
          <div className="relative">
            <img
              src="/images/garuda.png"
              alt="Garuda Pancasila AR 3D"
              className="w-48 sm:w-64 md:w-72 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter hover:brightness-110 transition-all pointer-events-none"
            />
            {/* 3D Reflection highlight on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AR 3D Model
            </div>
          </div>
        </div>

        {/* On-screen Watermark badge */}
        <div className="absolute bottom-3 left-3 z-30 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur border border-slate-700/80 text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>SDN Pakis V • WebAR Siswa</span>
          </div>
        </div>

        {/* Snapshot Notification toast */}
        {snapshotTaken && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-2xl flex items-center gap-2 animate-bounce">
            <Download className="w-4 h-4" />
            Foto AR Berhasil Disimpan ke Perangkat!
          </div>
        )}
      </div>

      {/* AR Toolbar & Adjustment Sliders */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950/70 p-3 sm:p-4 rounded-2xl border border-slate-800">
        {/* Scale Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1 font-medium">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              Ukuran Objek: {Math.round(scale * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0.5"
            max="1.8"
            step="0.05"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Rotation Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1 font-medium">
              <RotateCw className="w-3.5 h-3.5 text-amber-400" />
              Putar Objek: {rotation}°
            </span>
          </div>
          <input
            type="range"
            min="-180"
            max="180"
            step="5"
            value={rotation}
            onChange={(e) => setRotation(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        {/* Toggles (Glow & Target) */}
        <div className="flex items-center gap-2 justify-between sm:justify-start">
          <button
            onClick={() => setGlowEffect(!glowEffect)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
              glowEffect
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-inner'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Efek Kilau Emas
          </button>

          <button
            onClick={() => setTargetGuide(!targetGuide)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
              targetGuide
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Target Panduan
          </button>
        </div>

        {/* Action Controls: Reset & Snapshot */}
        <div className="flex items-center gap-2 justify-end">
          <button
            onClick={resetTransform}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700 transition-colors"
          >
            Reset Posisi
          </button>

          <button
            onClick={takeSnapshot}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95"
            title="Ambil foto AR dan simpan ke HP/Laptop"
          >
            <Camera className="w-3.5 h-3.5" />
            Foto Bersama AR
          </button>
        </div>
      </div>

      {/* Guide Note for students & thesis reviewers */}
      <div className="mt-3 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
        <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-200">Tips Pembelajaran untuk Siswa:</strong> Anda dapat menggeser lambang Garuda dengan menyentuh/menarik layar, mengubah sudut dan ukurannya sesuai meja belajar, lalu menekan tombol <strong>&quot;Foto Bersama AR&quot;</strong> sebagai hasil tugas belajar interaktif!
        </p>
      </div>
    </div>
  );
}

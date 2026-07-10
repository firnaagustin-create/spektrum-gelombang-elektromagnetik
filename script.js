/* ================================================================
   SPEKTRUM GELOMBANG ELEKTROMAGNETIK - JAVASCRIPT
   Media Pembelajaran Interaktif Kelas XII SMA
   ================================================================
   
   Struktur JavaScript:
   1. Data Spektrum & Konstanta Fisika
   2. Inisialisasi & Setup
   3. Navigasi & Page Management
   4. Exploration Mode Functions
   5. Learning Mode Functions
   6. Wave Visualization & Canvas
   7. Quiz & Matching Logic
   8. Utility & Helper Functions
   9. Event Listeners
   
   ================================================================ */

/* ================================================================
   1. DATA SPEKTRUM & KONSTANTA FISIKA
   ================================================================ */

// Konstanta fisika
const PLANCK_CONSTANT = 6.626e-34;  // J·s (Konstanta Planck)
const SPEED_OF_LIGHT = 3e8;         // m/s (Kecepatan cahaya)
const EV_TO_JOULE = 1.602e-19;      // Konversi eV ke Joule

// Data spektrum elektromagnetik
const spectrumData = [
    {
        id: 0,
        name: "Radio",
        icon: "📻",
        wavelengthMin: 1,           // dalam meter
        wavelengthMax: 1000,
        frequencyMin: 3e5,          // dalam Hz
        frequencyMax: 3e9,
        energyMin: 1.24e-6,         // dalam eV
        energyMax: 1.24e-3,
        source: "Pemancar radio, antena, objek panas di ruang angkasa",
        application: "Siaran radio, televisi, komunikasi nirkabel",
        benefit: "Memungkinkan komunikasi jarak jauh, broadcasting",
        danger: "Umumnya tidak berbahaya pada intensitas normal"
    },
    {
        id: 1,
        name: "Microwave",
        icon: "🌊",
        wavelengthMin: 1e-3,
        wavelengthMax: 1,
        frequencyMin: 3e8,
        frequencyMax: 3e11,
        energyMin: 1.24e-4,
        energyMax: 1.24e-1,
        source: "Oven microwave, satelit, radar",
        application: "Memasak (oven microwave), komunikasi satelit, radar",
        benefit: "Memasak cepat, deteksi objek, komunikasi satelit",
        danger: "Paparan tinggi dapat merusak jaringan biologis"
    },
    {
        id: 2,
        name: "Inframerah",
        icon: "🔥",
        wavelengthMin: 7e-7,
        wavelengthMax: 1e-3,
        frequencyMin: 3e11,
        frequencyMax: 4.3e14,
        energyMin: 1.24e-1,
        energyMax: 1.77,
        source: "Objek panas, matahari, lampu pijar",
        application: "Remote control, termostat, thermal imaging, pemanas",
        benefit: "Penginderaan suhu, diagnostik medis, pemanasan",
        danger: "Paparan intensitas tinggi dapat merusak jaringan"
    },
    {
        id: 3,
        name: "Cahaya Tampak",
        icon: "👁️",
        wavelengthMin: 4e-7,
        wavelengthMax: 7e-7,
        frequencyMin: 4.3e14,
        frequencyMax: 7.5e14,
        energyMin: 1.8,
        energyMax: 3.1,
        source: "Matahari, bintang, lampu, api",
        application: "Penglihatan manusia, fotografi, iluminasi",
        benefit: "Memungkinkan kita melihat dunia, fotosintesis tumbuhan",
        danger: "Paparan cahaya terlalu terang dapat merusak mata"
    },
    {
        id: 4,
        name: "Ultraviolet",
        icon: "☀️",
        wavelengthMin: 1e-8,
        wavelengthMax: 4e-7,
        frequencyMin: 7.5e14,
        frequencyMax: 3e16,
        energyMin: 3.1,
        energyMax: 124,
        source: "Matahari, lampu UV, bintang",
        application: "Desinfeksi, sterilisasi, deteksi uang palsu, tabir surya",
        benefit: "Pembunuhan bakteri, produksi vitamin D",
        danger: "Dapat menyebabkan kanker kulit, kerusakan mata"
    },
    {
        id: 5,
        name: "Sinar-X",
        icon: "🩻",
        wavelengthMin: 1e-12,
        wavelengthMax: 1e-8,
        frequencyMin: 3e16,
        frequencyMax: 3e19,
        energyMin: 124,
        energyMax: 1.24e5,
        source: "Tabung sinar-X, bintang neutron, ledakan nuklir",
        application: "Pemeriksaan medis (radiologi), kristalografi, analisis material",
        benefit: "Diagnostik penyakit, penelitian material",
        danger: "Radiasi ionisasi, dapat menyebabkan kanker jika paparan tinggi"
    },
    {
        id: 6,
        name: "Sinar Gamma",
        icon: "☢️",
        wavelengthMin: 1e-16,
        wavelengthMax: 1e-12,
        frequencyMin: 3e19,
        frequencyMax: 3e24,
        energyMin: 1.24e5,
        energyMax: 1.24e10,
        source: "Peluruhan radioaktif, ledakan supernova, ledakan nuklir",
        application: "Sterilisasi alat medis, terapi kanker, penelitian nuklir",
        benefit: "Terapi kanker, sterilisasi, penelitian fisika inti",
        danger: "Radiasi ionisasi sangat tinggi, sangat berbahaya untuk manusia"
    }
];

// Data pencocokan aplikasi dengan spektrum
const matchingData = {
    radio: "Siaran Radio & TV",
    microwave: "Memasak (Oven Microwave)",
    infrared: "Termostat & Sensor Suhu",
    visible: "Fotografi & Penglihatan",
    ultraviolet: "Desinfeksi & Tabir Surya",
    xray: "Pemeriksaan Medis (Radiologi)",
    gamma: "Sterilisasi & Terapi Kanker"
};

// State management
let currentSpectrum = 3; // Mulai dari Cahaya Tampak
let currentStep = 1;
let quizScores = {};
let matchingCorrect = 0;
let matchingTotal = 7;

/* ================================================================
   2. INISIALISASI & SETUP
   ================================================================ */

// Jalankan ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM siap, inisialisasi aplikasi...');
    
    // Setup event listeners
    setupEventListeners();
    
    // Inisialisasi eksplorasi mode
    updateSpectrum(3);
    updateLearningSpectrum(3);
    
    // Inisialisasi canvas
    initializeCanvases();
    
    // Animate wave
    animateWave();
    animateLearningWave();
});

/* ================================================================
   3. NAVIGASI & PAGE MANAGEMENT
   ================================================================ */

/**
 * Navigasi ke halaman tertentu
 * @param {string} pageId - ID halaman yang ingin dituju
 */
function navigateTo(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log(`Navigasi ke: ${pageId}`);
        
        // Scroll ke atas
        window.scrollTo(0, 0);
        
        // Update canvas jika perlu
        if (pageId === 'exploration-mode') {
            setTimeout(() => {
                initializeCanvases();
                animateWave();
            }, 100);
        }
    }
}

/* ================================================================
   4. EXPLORATION MODE FUNCTIONS
   ================================================================ */

/**
 * Update spektrum di mode eksplorasi
 * @param {number} index - Index spektrum (0-6)
 */
function updateSpectrum(index) {
    currentSpectrum = parseInt(index);
    const spectrum = spectrumData[currentSpectrum];
    
    // Update slider position indicator
    updateSliderLabel(currentSpectrum, 'spectrum-slider');
    
    // Ambil nilai tengah spektrum untuk visualisasi
    const wavelength = (spectrum.wavelengthMin + spectrum.wavelengthMax) / 2;
    const frequency = SPEED_OF_LIGHT / wavelength;
    const energy = (PLANCK_CONSTANT * frequency) / EV_TO_JOULE;
    
    // Update display
    document.getElementById('spectrum-name').textContent = spectrum.name;
    document.getElementById('spectrum-icon').textContent = spectrum.icon;
    
    document.getElementById('wavelength-display').textContent = formatWavelength(wavelength);
    document.getElementById('frequency-display').textContent = formatFrequency(frequency);
    document.getElementById('energy-display').textContent = formatEnergy(energy);
    
    document.getElementById('info-wavelength').textContent = `${formatWavelength(spectrum.wavelengthMin)}-${formatWavelength(spectrum.wavelengthMax)}`;
    document.getElementById('info-frequency').textContent = formatFrequencyRange(spectrum.frequencyMin, spectrum.frequencyMax);
    document.getElementById('info-energy').textContent = formatEnergyRange(spectrum.energyMin, spectrum.energyMax);
    
    document.getElementById('info-source').textContent = spectrum.source;
    document.getElementById('info-application').textContent = spectrum.application;
    document.getElementById('info-benefit').textContent = spectrum.benefit;
    document.getElementById('info-danger').textContent = spectrum.danger;
    
    // Update warna background
    updateSpectrumColor(currentSpectrum);
    
    // Trigger animasi
    animateWave();
}

/**
 * Update spektrum di mode pembelajaran
 * @param {number} index - Index spektrum (0-6)
 */
function updateLearningSpectrum(index) {
    currentSpectrum = parseInt(index);
    const spectrum = spectrumData[currentSpectrum];
    
    // Update slider position indicator
    updateSliderLabel(currentSpectrum, 'learning-slider');
    
    // Ambil nilai tengah spektrum
    const wavelength = (spectrum.wavelengthMin + spectrum.wavelengthMax) / 2;
    const frequency = SPEED_OF_LIGHT / wavelength;
    const energy = (PLANCK_CONSTANT * frequency) / EV_TO_JOULE;
    
    // Update display
    document.getElementById('learning-spectrum-name').textContent = spectrum.name;
    document.getElementById('learning-spectrum-icon').textContent = spectrum.icon;
    
    document.getElementById('learning-wavelength-display').textContent = formatWavelength(wavelength);
    document.getElementById('learning-frequency-display').textContent = formatFrequency(frequency);
    document.getElementById('learning-energy-display').textContent = formatEnergy(energy);
    
    document.getElementById('learning-info-wavelength').textContent = `${formatWavelength(spectrum.wavelengthMin)}-${formatWavelength(spectrum.wavelengthMax)}`;
    document.getElementById('learning-info-frequency').textContent = formatFrequencyRange(spectrum.frequencyMin, spectrum.frequencyMax);
    document.getElementById('learning-info-energy').textContent = formatEnergyRange(spectrum.energyMin, spectrum.energyMax);
    
    // Trigger animasi
    animateLearningWave();
}

/**
 * Update warna spektrum berdasarkan index
 */
function updateSpectrumColor(index) {
    const colors = [
        '#FF6B6B', // Radio
        '#FFA500', // Microwave
        '#FF8C42', // Inframerah
        '#FFD700', // Cahaya Tampak
        '#9D4EDD', // Ultraviolet
        '#3A86FF', // Sinar-X
        '#00D9FF'  // Sinar Gamma
    ];
    
    const spectrum = spectrumData[index];
    const infoCard = document.querySelector('.spectrum-info-section');
    if (infoCard) {
        infoCard.style.borderTop = `5px solid ${colors[index]}`;
    }
}

/**
 * Update label slider yang aktif
 */
function updateSliderLabel(index, sliderId) {
    const sliders = document.querySelectorAll(`#${sliderId}`).length > 0 
        ? [document.getElementById(sliderId)] 
        : [];
    
    if (sliders[0]) {
        sliders[0].value = index;
    }
}

/* ================================================================
   5. LEARNING MODE FUNCTIONS
   ================================================================ */

/**
 * Lanjut ke langkah berikutnya
 */
function nextStep() {
    if (currentStep < 5) {
        // Sembunyikan step saat ini
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Update step
        currentStep++;
        
        // Tampilkan step berikutnya
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress bar
        updateProgressBar();
        
        // Scroll ke atas
        window.scrollTo(0, 0);
        
        console.log(`Pindah ke step: ${currentStep}`);
    }
}

/**
 * Kembali ke langkah sebelumnya
 */
function previousStep() {
    if (currentStep > 1) {
        // Sembunyikan step saat ini
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Update step
        currentStep--;
        
        // Tampilkan step sebelumnya
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress bar
        updateProgressBar();
        
        // Scroll ke atas
        window.scrollTo(0, 0);
        
        console.log(`Kembali ke step: ${currentStep}`);
    }
}

/**
 * Update progress bar
 */
function updateProgressBar() {
    const progress = (currentStep / 5) * 100;
    const progressFill = document.getElementById('progress-fill');
    const currentStepSpan = document.getElementById('current-step');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (currentStepSpan) {
        currentStepSpan.textContent = `Langkah ${currentStep}`;
    }
}

/**
 * Reset pembelajaran
 */
function resetLearning() {
    // Reset step
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep = 1;
    document.getElementById('step-1').classList.add('active');
    
    // Reset progress
    updateProgressBar();
    
    // Clear form inputs
    document.querySelectorAll('.table-input').forEach(input => input.value = '');
    document.querySelectorAll('.reflection-input').forEach(input => input.value = '');
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    
    // Reset matching
    resetMatching();
    
    // Scroll ke atas
    window.scrollTo(0, 0);
    
    console.log('Pembelajaran direset');
}

/* ================================================================
   6. WAVE VISUALIZATION & CANVAS
   ================================================================ */

let waveAnimationId = null;
let learningWaveAnimationId = null;
let wavePhase = 0;
let learningWavePhase = 0;

/**
 * Inisialisasi canvas
 */
function initializeCanvases() {
    const canvas = document.getElementById('wave-canvas');
    const learningCanvas = document.getElementById('learning-wave-canvas');
    
    if (canvas && canvas.getContext) {
        canvas.width = canvas.offsetWidth;
    }
    
    if (learningCanvas && learningCanvas.getContext) {
        learningCanvas.width = learningCanvas.offsetWidth;
    }
}

/**
 * Animasi gelombang di mode eksplorasi
 */
function animateWave() {
    const canvas = document.getElementById('wave-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Hentikan animasi sebelumnya
    if (waveAnimationId) {
        cancelAnimationFrame(waveAnimationId);
    }
    
    const drawWave = () => {
        // Clear canvas
        ctx.fillStyle = '#F7FAFC';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw wave
        drawWaveform(ctx, canvas, wavePhase, currentSpectrum);
        
        // Update phase
        wavePhase += 0.05;
        
        // Continue animation
        waveAnimationId = requestAnimationFrame(drawWave);
    };
    
    drawWave();
}

/**
 * Animasi gelombang di mode pembelajaran
 */
function animateLearningWave() {
    const canvas = document.getElementById('learning-wave-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Hentikan animasi sebelumnya
    if (learningWaveAnimationId) {
        cancelAnimationFrame(learningWaveAnimationId);
    }
    
    const drawWave = () => {
        // Clear canvas
        ctx.fillStyle = '#F7FAFC';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw wave
        drawWaveform(ctx, canvas, learningWavePhase, currentSpectrum);
        
        // Update phase
        learningWavePhase += 0.05;
        
        // Continue animation
        learningWaveAnimationId = requestAnimationFrame(drawWave);
    };
    
    drawWave();
}

/**
 * Gambar bentuk gelombang
 */
function drawWaveform(ctx, canvas, phase, spectrumIndex) {
    const spectrum = spectrumData[spectrumIndex];
    const colors = [
        '#FF6B6B', // Radio
        '#FFA500', // Microwave
        '#FF8C42', // Inframerah
        '#FFD700', // Cahaya Tampak
        '#9D4EDD', // Ultraviolet
        '#3A86FF', // Sinar-X
        '#00D9FF'  // Sinar Gamma
    ];
    
    const centerY = canvas.height / 2;
    const amplitude = canvas.height / 4;
    
    // Frekuensi gelombang meningkat seiring dengan spektrum
    const frequency = 0.5 + (spectrumIndex * 0.3);
    const wavelength = (canvas.width / (5 + spectrumIndex));
    
    // Draw grid
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    
    for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Draw wave
    ctx.strokeStyle = colors[spectrumIndex];
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
        const y = centerY + amplitude * Math.sin((x / wavelength + phase) * Math.PI * 2);
        
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.stroke();
    
    // Draw center line
    ctx.strokeStyle = '#CBD5E0';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw amplitude indicator
    ctx.strokeStyle = colors[spectrumIndex];
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(20, centerY - amplitude);
    ctx.lineTo(20, centerY + amplitude);
    ctx.stroke();
    ctx.setLineDash([]);
}

/* ================================================================
   7. QUIZ & MATCHING LOGIC
   ================================================================ */

/**
 * Check jawaban kuis
 */
function checkQuiz(quizName, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name="${quizName}"]:checked`);
    if (!selectedAnswer) return;
    
    const selected = selectedAnswer.value;
    const feedbackElement = document.getElementById(`feedback-${quizName}`);
    
    if (!feedbackElement) return;
    
    const isCorrect = selected === correctAnswer;
    
    // Simpan score
    quizScores[quizName] = isCorrect;
    
    // Tampilkan feedback
    feedbackElement.classList.add('show');
    if (isCorrect) {
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
        feedbackElement.textContent = '✓ Jawaban benar! Bagus!';
    } else {
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
        feedbackElement.textContent = '✗ Jawaban salah. Silakan coba lagi atau pelajari materi lebih lanjut.';
    }
    
    console.log(`Quiz ${quizName}: ${isCorrect ? 'Benar' : 'Salah'}`);
}

/**
 * Hitung skor akhir
 */
function calculateScore() {
    // Hitung soal benar
    let correctCount = 0;
    for (let key in quizScores) {
        if (quizScores[key]) correctCount++;
    }
    
    const totalQuestions = Object.keys(quizScores).length || 5;
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    // Hitung matching score
    const matchingPercentage = Math.round((matchingCorrect / matchingTotal) * 100);
    
    // Update hasil
    document.getElementById('score-value').textContent = score + '%';
    document.getElementById('correct-answers').textContent = `${correctCount} / ${totalQuestions}`;
    document.getElementById('wrong-answers').textContent = `${totalQuestions - correctCount} / ${totalQuestions}`;
    document.getElementById('matching-score').textContent = `${matchingPercentage}%`;
    
    // Feedback berdasarkan skor
    const feedbackElement = document.getElementById('performance-feedback');
    let feedback = '';
    
    if (score >= 80) {
        feedback = '🌟 Luar biasa! Anda memiliki pemahaman yang sangat baik tentang spektrum gelombang elektromagnetik!';
    } else if (score >= 60) {
        feedback = '👍 Bagus! Pemahaman Anda sudah cukup baik. Pelajari lebih lanjut untuk meningkatkan pemahaman.';
    } else if (score >= 40) {
        feedback = '📚 Anda sudah membuat kemajuan. Terus belajar dan pelajari kembali materi yang belum dipahami.';
    } else {
        feedback = '💪 Jangan menyerah! Ulangi pembelajaran dan coba lagi untuk hasil yang lebih baik.';
    }
    
    if (feedbackElement) {
        feedbackElement.innerHTML = `<p>${feedback}</p>`;
    }
    
    // Rekomendasi
    updateRecommendations(score, matchingPercentage);
    
    // Lanjut ke step 5
    nextStep();
    
    console.log(`Skor: ${score}%, Matching: ${matchingPercentage}%`);
}

/**
 * Update rekomendasi
 */
function updateRecommendations(score, matchingScore) {
    const recommendationList = document.getElementById('recommendation-list');
    if (!recommendationList) return;
    
    let recommendations = [];
    
    if (score < 60) {
        recommendations.push('Ulangi pembelajaran dari awal, fokus pada hubungan panjang gelombang dan frekuensi');
    }
    
    if (matchingScore < 70) {
        recommendations.push('Perkuat pemahaman tentang aplikasi praktis setiap spektrum');
    }
    
    recommendations.push('Pelajari lebih lanjut tentang efek fotolistrik');
    recommendations.push('Eksplorasi aplikasi sinar-X dalam industri dan kedokteran');
    recommendations.push('Pahami mekanisme radiasi Matahari dan energi alternatif');
    
    recommendationList.innerHTML = recommendations
        .map(rec => `<li>${rec}</li>`)
        .join('');
}

/* ================================================================
   8. DRAG & DROP MATCHING
   ================================================================ */

let draggedElement = null;

/**
 * Setup drag and drop
 */
function setupDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    // Drag events
    dragItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    // Drop events
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    if (e.target === this) {
        this.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    this.classList.remove('drag-over');
    
    if (draggedElement) {
        const correctSpectrum = draggedElement.getAttribute('data-correct');
        const dropZoneSpectrum = this.getAttribute('data-spectrum');
        
        const droppedItems = this.querySelector('.dropped-items');
        
        // Clone element
        const clone = draggedElement.cloneNode(true);
        clone.classList.remove('dragging');
        clone.classList.add('dropped-item');
        clone.draggable = false;
        
        // Add button untuk remove
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.onclick = function() {
            this.parentElement.remove();
            updateMatchingStatus();
        };
        clone.appendChild(removeBtn);
        
        // Add ke drop zone
        droppedItems.appendChild(clone);
        
        // Check if correct
        if (correctSpectrum === dropZoneSpectrum) {
            clone.style.backgroundColor = '#2DCA73'; // Success color
            matchingCorrect++;
            console.log(`✓ Benar! ${draggedElement.textContent} cocok dengan ${this.querySelector('.spectrum-label').textContent}`);
        } else {
            clone.style.backgroundColor = '#F5365C'; // Error color
            console.log(`✗ Salah! ${draggedElement.textContent} tidak cocok dengan ${this.querySelector('.spectrum-label').textContent}`);
        }
        
        // Update status
        updateMatchingStatus();
    }
    
    return false;
}

/**
 * Reset matching
 */
function resetMatching() {
    document.querySelectorAll('.dropped-items').forEach(container => {
        container.innerHTML = '';
    });
    
    matchingCorrect = 0;
    updateMatchingStatus();
}

/**
 * Update status matching
 */
function updateMatchingStatus() {
    const totalDropped = document.querySelectorAll('.dropped-item').length;
    const feedbackElement = document.getElementById('matching-feedback-text');
    
    if (feedbackElement) {
        if (totalDropped === 0) {
            feedbackElement.textContent = '';
        } else if (totalDropped === matchingTotal) {
            const percentage = Math.round((matchingCorrect / matchingTotal) * 100);
            feedbackElement.textContent = `✓ Pencocokan selesai! Anda mendapatkan ${percentage}% benar.`;
            feedbackElement.style.color = '#2DCA73';
        } else {
            feedbackElement.textContent = `Anda telah menempatkan ${totalDropped} item dari ${matchingTotal}`;
        }
    }
}

/* ================================================================
   9. UTILITY & HELPER FUNCTIONS
   ================================================================ */

/**
 * Format panjang gelombang
 */
function formatWavelength(wavelength) {
    if (wavelength >= 1) {
        return wavelength.toFixed(1) + ' m';
    } else if (wavelength >= 1e-3) {
        return (wavelength * 1e3).toFixed(1) + ' mm';
    } else if (wavelength >= 1e-6) {
        return (wavelength * 1e6).toFixed(1) + ' μm';
    } else if (wavelength >= 1e-9) {
        return (wavelength * 1e9).toFixed(1) + ' nm';
    } else if (wavelength >= 1e-12) {
        return (wavelength * 1e12).toFixed(2) + ' pm';
    } else {
        return wavelength.toExponential(2) + ' m';
    }
}

/**
 * Format frekuensi
 */
function formatFrequency(frequency) {
    if (frequency >= 1e9) {
        return (frequency / 1e9).toFixed(2) + ' × 10⁹ Hz';
    } else if (frequency >= 1e6) {
        return (frequency / 1e6).toFixed(2) + ' × 10⁶ Hz';
    } else if (frequency >= 1e3) {
        return (frequency / 1e3).toFixed(2) + ' × 10³ Hz';
    } else {
        return frequency.toFixed(2) + ' Hz';
    }
}

/**
 * Format energi
 */
function formatEnergy(energy) {
    if (Math.abs(energy) < 0.01) {
        return (energy * 1e6).toFixed(2) + ' × 10⁻⁶ eV';
    } else if (Math.abs(energy) < 0.1) {
        return (energy * 1e3).toFixed(2) + ' × 10⁻³ eV';
    } else {
        return energy.toFixed(2) + ' eV';
    }
}

/**
 * Format rentang frekuensi
 */
function formatFrequencyRange(min, max) {
    return `${formatFrequency(min).split('×')[0].trim()} - ${formatFrequency(max).split('×')[0].trim()} × ${formatFrequency(max).split('×')[1]}`;
}

/**
 * Format rentang energi
 */
function formatEnergyRange(min, max) {
    return `${min.toFixed(2)} - ${max.toFixed(2)} eV`;
}

/* ================================================================
   10. EVENT LISTENERS
   ================================================================ */

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Slider change
    const spectrumSlider = document.getElementById('spectrum-slider');
    if (spectrumSlider) {
        spectrumSlider.addEventListener('input', (e) => {
            updateSpectrum(e.target.value);
        });
    }
    
    const learningSlider = document.getElementById('learning-slider');
    if (learningSlider) {
        learningSlider.addEventListener('input', (e) => {
            updateLearningSpectrum(e.target.value);
        });
    }
    
    // Drag and Drop
    setTimeout(setupDragAndDrop, 100);
    
    // Window resize
    window.addEventListener('resize', () => {
        initializeCanvases();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC: Kembali ke home
        if (e.key === 'Escape') {
            navigateTo('home-page');
        }
        
        // Next/Previous dengan arrow keys
        if (e.key === 'ArrowRight' && currentStep < 5) {
            nextStep();
        }
        
        if (e.key === 'ArrowLeft' && currentStep > 1) {
            previousStep();
        }
    });
    
    console.log('Event listeners setup selesai');
}

/* ================================================================
   LIFECYCLE FUNCTIONS
   ================================================================ */

/**
 * Initialize pada halaman tertentu
 */
function onPageChange(pageId) {
    if (pageId === 'learning-mode') {
        updateProgressBar();
        setupDragAndDrop();
    }
}

// Observer untuk perubahan halaman
const pageObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const page = mutation.target;
            if (page.classList.contains('active')) {
                onPageChange(page.id);
            }
        }
    });
});

document.querySelectorAll('.page').forEach(page => {
    pageObserver.observe(page, { attributes: true });
});

console.log('Spektrum Gelombang Elektromagnetik - Script Loaded ✓');

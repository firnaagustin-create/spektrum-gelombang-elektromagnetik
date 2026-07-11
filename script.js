/* ================================================================
   ELECTROMAGNETIC WAVE SPECTRUM - JAVASCRIPT
   Interactive Learning Media - 12th Grade High School
   ================================================================
   
   JavaScript Structure:
   1. Spectrum Data & Physics Constants
   2. Initialization & Setup
   3. Navigation & Page Management
   4. Exploration Mode Functions
   5. Learning Mode Functions
   6. Wave Visualization & Canvas
   7. Quiz & Matching Logic
   8. Utility & Helper Functions
   9. Event Listeners
   
   ================================================================ */

/* ================================================================
   1. SPECTRUM DATA & PHYSICS CONSTANTS
   ================================================================ */

// Physics Constants
const PLANCK_CONSTANT = 6.626e-34;  // J·s (Planck constant)
const SPEED_OF_LIGHT = 3e8;         // m/s (Speed of light)
const EV_TO_JOULE = 1.602e-19;      // eV to Joule conversion

// Electromagnetic Spectrum Data
const spectrumData = [
    {
        id: 0,
        name: "Radio",
        icon: "📻",
        wavelengthMin: 1,           // in meters
        wavelengthMax: 1000,
        frequencyMin: 3e5,          // in Hz
        frequencyMax: 3e9,
        energyMin: 1.24e-6,         // in eV
        energyMax: 1.24e-3,
        source: "Radio transmitters, antennas, warm astronomical objects",
        application: "Radio broadcasts, television, wireless communications",
        benefit: "Enables long-distance communication, broadcasting",
        danger: "Generally harmless at normal intensities"
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
        source: "Microwave ovens, satellites, radar",
        application: "Cooking (microwave ovens), satellite communications, radar",
        benefit: "Fast cooking, object detection, satellite communication",
        danger: "High exposure can cause damage to biological tissues"
    },
    {
        id: 2,
        name: "Infrared",
        icon: "🔥",
        wavelengthMin: 7e-7,
        wavelengthMax: 1e-3,
        frequencyMin: 3e11,
        frequencyMax: 4.3e14,
        energyMin: 1.24e-1,
        energyMax: 1.77,
        source: "Hot objects, the sun, incandescent bulbs",
        application: "Remote controls, thermostats, thermal imaging, heaters",
        benefit: "Temperature sensing, medical diagnostics, heating",
        danger: "High-intensity exposure can damage tissues"
    },
    {
        id: 3,
        name: "Visible Light",
        icon: "👁️",
        wavelengthMin: 4e-7,
        wavelengthMax: 7e-7,
        frequencyMin: 4.3e14,
        frequencyMax: 7.5e14,
        energyMin: 1.8,
        energyMax: 3.1,
        source: "The sun, stars, lamps, fire",
        application: "Human vision, photography, illumination",
        benefit: "Allows us to see the world, plant photosynthesis",
        danger: "Exposure to overly bright light can cause eye damage"
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
        source: "The sun, UV lamps, stars",
        application: "Disinfection, sterilization, counterfeit money detection, sunscreen",
        benefit: "Kills bacteria, stimulates Vitamin D production",
        danger: "Can cause skin cancer, eye damage"
    },
    {
        id: 5,
        name: "X-ray",
        icon: "🩻",
        wavelengthMin: 1e-12,
        wavelengthMax: 1e-8,
        frequencyMin: 3e16,
        frequencyMax: 3e19,
        energyMin: 124,
        energyMax: 1.24e5,
        source: "X-ray tubes, neutron stars, nuclear detonations",
        application: "Medical check-ups (radiology), crystallography, material analysis",
        benefit: "Disease diagnostics, material research",
        danger: "Ionizing radiation, can cause cancer with high exposure"
    },
    {
        id: 6,
        name: "Gamma Rays",
        icon: "☢️",
        wavelengthMin: 1e-16,
        wavelengthMax: 1e-12,
        frequencyMin: 3e19,
        frequencyMax: 3e24,
        energyMin: 1.24e5,
        energyMax: 1.24e10,
        source: "Radioactive decay, supernova explosions, nuclear detonations",
        application: "Medical equipment sterilization, cancer therapy, nuclear research",
        benefit: "Cancer therapy, sterilization, core physics research",
        danger: "Extremely high ionizing radiation, highly dangerous to humans"
    }
];

// Application Mapping Data with Spectrum
const matchingData = {
    radio: "Radio & TV Broadcasts",
    microwave: "Cooking (Microwave Oven)",
    infrared: "Thermostat & Temperature Sensors",
    visible: "Photography & Vision",
    ultraviolet: "Disinfection & Sunscreen",
    xray: "Medical Check-ups (Radiology)",
    gamma: "Sterilization & Cancer Therapy"
};

// State management
let currentSpectrum = 3; // Starts from Visible Light
let currentStep = 1;
let quizScores = {};
let matchingCorrect = 0;
let matchingTotal = 7;

/* ================================================================
   2. INITIALIZATION & SETUP
   ================================================================ */

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initializing application...');
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize exploration mode
    updateSpectrum(3);
    updateLearningSpectrum(3);
    
    // Initialize canvas
    initializeCanvases();
    
    // Animate wave
    animateWave();
    animateLearningWave();
});

/* ================================================================
   3. NAVIGATION & PAGE MANAGEMENT
   ================================================================ */

/**
 * Navigate to a specific page
 * @param {string} pageId - ID of the target page
 */
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Display the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log(`Navigating to: ${pageId}`);
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update canvas if needed
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
 * Update spectrum in exploration mode
 * @param {number} index - Spectrum index (0-6)
 */
function updateSpectrum(index) {
    currentSpectrum = parseInt(index);
    const spectrum = spectrumData[currentSpectrum];
    
    // Update slider position indicator
    updateSliderLabel(currentSpectrum, 'spectrum-slider');
    
    // Take the midpoint value of the spectrum for visualization
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
    
    // Update background color
    updateSpectrumColor(currentSpectrum);
    
    // Trigger animation
    animateWave();
}

/**
 * Update spectrum in learning mode
 * @param {number} index - Spectrum index (0-6)
 */
function updateLearningSpectrum(index) {
    currentSpectrum = parseInt(index);
    const spectrum = spectrumData[currentSpectrum];
    
    // Update slider position indicator
    updateSliderLabel(currentSpectrum, 'learning-slider');
    
    // Take the midpoint value of the spectrum
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
    
    // Trigger animation
    animateLearningWave();
}

/**
 * Update spectrum color based on index
 */
function updateSpectrumColor(index) {
    const colors = [
        '#FF6B6B', // Radio
        '#FFA500', // Microwave
        '#FF8C42', // Infrared
        '#FFD700', // Visible Light
        '#9D4EDD', // Ultraviolet
        '#3A86FF', // X-ray
        '#00D9FF'  // Gamma Rays
    ];
    
    const infoCard = document.querySelector('.spectrum-info-section');
    if (infoCard) {
        infoCard.style.borderTop = `5px solid ${colors[index]}`;
    }
}

/**
 * Update active slider label
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
 * Proceed to the next step
 */
function nextStep() {
    if (currentStep < 5) {
        // Hide the current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Update step
        currentStep++;
        
        // Display the next step
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress bar
        updateProgressBar();
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        console.log(`Moved to step: ${currentStep}`);
    }
}

/**
 * Return to the previous step
 */
function previousStep() {
    if (currentStep > 1) {
        // Hide the current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Update step
        currentStep--;
        
        // Display the previous step
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress bar
        updateProgressBar();
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        console.log(`Returned to step: ${currentStep}`);
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
        currentStepSpan.textContent = `Step ${currentStep}`;
    }
}

/**
 * Reset learning session
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
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    console.log('Learning session reset');
}

/* ================================================================
   6. WAVE VISUALIZATION & CANVAS
   ================================================================ */

let waveAnimationId = null;
let learningWaveAnimationId = null;
let wavePhase = 0;
let learningWavePhase = 0;

/**
 * Initialize canvas elements
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
 * Animate wave in exploration mode
 */
function animateWave() {
    const canvas = document.getElementById('wave-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Stop previous animation
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
 * Animate wave in learning mode
 */
function animateLearningWave() {
    const canvas = document.getElementById('learning-wave-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Stop previous animation
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
 * Draw wave shapes
 */
function drawWaveform(ctx, canvas, phase, spectrumIndex) {
    const spectrum = spectrumData[spectrumIndex];
    const colors = [
        '#FF6B6B', // Radio
        '#FFA500', // Microwave
        '#FF8C42', // Infrared
        '#FFD700', // Visible Light
        '#9D4EDD', // Ultraviolet
        '#3A86FF', // X-ray
        '#00D9FF'  // Gamma Rays
    ];
    
    const centerY = canvas.height / 2;
    const amplitude = canvas.height / 4;
    
    // Wave frequency increases with the spectrum hierarchy
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
 * Verify quiz answer
 */
function checkQuiz(quizName, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name="${quizName}"]:checked`);
    if (!selectedAnswer) return;
    
    const selected = selectedAnswer.value;
    const feedbackElement = document.getElementById(`feedback-${quizName}`);
    
    if (!feedbackElement) return;
    
    const isCorrect = selected === correctAnswer;
    
    // Save score status
    quizScores[quizName] = isCorrect;
    
    // Render feedback
    feedbackElement.classList.add('show');
    if (isCorrect) {
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
        feedbackElement.textContent = '✓ Correct answer! Great job!';
    } else {
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
        feedbackElement.textContent = '✗ Incorrect answer. Please try again or review the study material.';
    }
    
    console.log(`Quiz ${quizName}: ${isCorrect ? 'Correct' : 'Incorrect'}`);
}

/**
 * Calculate final evaluation score
 */
function calculateScore() {
    // Count correctly answered questions
    let correctCount = 0;
    for (let key in quizScores) {
        if (quizScores[key]) correctCount++;
    }
    
    const totalQuestions = Object.keys(quizScores).length || 5;
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    // Calculate matching activity score
    const matchingPercentage = Math.round((matchingCorrect / matchingTotal) * 100);
    
    // Update display stats
    document.getElementById('score-value').textContent = score + '%';
    document.getElementById('correct-answers').textContent = `${correctCount} / ${totalQuestions}`;
    document.getElementById('wrong-answers').textContent = `${totalQuestions - correctCount} / ${totalQuestions}`;
    document.getElementById('matching-score').textContent = `${matchingPercentage}%`;
    
    // Set dynamic performance feedback
    const feedbackElement = document.getElementById('performance-feedback');
    let feedback = '';
    
    if (score >= 80) {
        feedback = '🌟 Outstanding! You have an excellent understanding of the electromagnetic wave spectrum!';
    } else if (score >= 60) {
        feedback = '👍 Good job! Your understanding is quite solid. Keep reviewing to achieve complete mastery.';
    } else if (score >= 40) {
        feedback = '📚 You are making progress. Try reviewing the topics you found challenging once more.';
    } else {
        feedback = '💪 Do not give up! Restart the module and try again for a better outcome next time.';
    }
    
    if (feedbackElement) {
        feedbackElement.innerHTML = `<p>${feedback}</p>`;
    }
    
    // Generate tailored recommendations
    updateRecommendations(score, matchingPercentage);
    
    // Move forward to step 5
    nextStep();
    
    console.log(`Score: ${score}%, Matching: ${matchingPercentage}%`);
}

/**
 * Update recommendations list based on results
 */
function updateRecommendations(score, matchingScore) {
    const recommendationList = document.getElementById('recommendation-list');
    if (!recommendationList) return;
    
    let recommendations = [];
    
    if (score < 60) {
        recommendations.push('Restart the learning section, focusing closely on the mathematical relationships between wavelength and frequency.');
    }
    
    if (matchingScore < 70) {
        recommendations.push('Strengthen your memory regarding the practical applications of each wave spectrum category.');
    }
    
    recommendations.push('Explore the advanced concepts regarding the photoelectric effect.');
    recommendations.push('Research the broader applications of X-rays in fields like industrial analysis and advanced medicine.');
    recommendations.push('Understand the physical dynamics of Solar radiation and its utilization in clean energy.');
    
    recommendationList.innerHTML = recommendations
        .map(rec => `<li>${rec}</li>`)
        .join('');
}

/* ================================================================
   8. DRAG & DROP MATCHING
   ================================================================ */

let draggedElement = null;

/**
 * Setup drag and drop events
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
        
        // Clone item element
        const clone = draggedElement.cloneNode(true);
        clone.classList.remove('dragging');
        clone.classList.add('dropped-item');
        clone.draggable = false;
        
        // Add item remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.onclick = function() {
            this.parentElement.remove();
            updateMatchingStatus();
        };
        clone.appendChild(removeBtn);
        
        // Append to current drop zone
        droppedItems.appendChild(clone);
        
        // Validate matching accuracy
        if (correctSpectrum === dropZoneSpectrum) {
            clone.style.backgroundColor = '#2DCA73'; // Success color
            matchingCorrect++;
            console.log(`✓ Correct! ${draggedElement.textContent} fits inside ${this.querySelector('.spectrum-label').textContent}`);
        } else {
            clone.style.backgroundColor = '#F5365C'; // Error color
            console.log(`✗ Incorrect! ${draggedElement.textContent} does not fit inside ${this.querySelector('.spectrum-label').textContent}`);
        }
        
        // Update total status counter
        updateMatchingStatus();
    }
    
    return false;
}

/**
 * Reset matching challenge activity
 */
function resetMatching() {
    document.querySelectorAll('.dropped-items').forEach(container => {
        container.innerHTML = '';
    });
    
    matchingCorrect = 0;
    updateMatchingStatus();
}

/**
 * Refresh current match state text
 */
function updateMatchingStatus() {
    const totalDropped = document.querySelectorAll('.dropped-item').length;
    const feedbackElement = document.getElementById('matching-feedback-text');
    
    if (feedbackElement) {
        if (totalDropped === 0) {
            feedbackElement.textContent = '';
        } else if (totalDropped === matchingTotal) {
            const percentage = Math.round((matchingCorrect / matchingTotal) * 100);
            feedbackElement.textContent = `✓ Matching complete! You got ${percentage}% right.`;
            feedbackElement.style.color = '#2DCA73';
        } else {
            feedbackElement.textContent = `You have placed ${totalDropped} items out of ${matchingTotal}`;
        }
    }
}

/* ================================================================
   9. UTILITY & HELPER FUNCTIONS
   ================================================================ */

/**
 * Format wavelength numbers cleanly
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
 * Format frequency numbers dynamically
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
 * Format energy values smoothly
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
 * Format string range boundaries for frequencies
 */
function formatFrequencyRange(min, max) {
    return `${formatFrequency(min).split('×')[0].trim()} - ${formatFrequency(max).split('×')[0].trim()} × ${formatFrequency(max).split('×')[1]}`;
}

/**
 * Format string range boundaries for energy
 */
function formatEnergyRange(min, max) {
    return `${min.toFixed(2)} - ${max.toFixed(2)} eV`;
}

/* ================================================================
   10. EVENT LISTENERS
   ================================================================ */

/**
 * Bind action hooks to user interface events
 */
function setupEventListeners() {
    // Slider value changes
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
    
    // Drag and Drop execution delay hook
    setTimeout(setupDragAndDrop, 100);
    
    // Window responsive layout adjustments
    window.addEventListener('resize', () => {
        initializeCanvases();
    });
    
    // Keyboard macro navigation
    document.addEventListener('keydown', (e) => {
        // ESC: Return back to home screen
        if (e.key === 'Escape') {
            navigateTo('home-page');
        }
        
        // Navigation steps using the arrow keys
        if (e.key === 'ArrowRight' && currentStep < 5) {
            nextStep();
        }
        
        if (e.key === 'ArrowLeft' && currentStep > 1) {
            previousStep();
        }
    });
    
    console.log('Event listeners successfully assigned');
}

/* ================================================================
   LIFECYCLE FUNCTIONS
   ================================================================ */

/**
 * Trigger unique operations on individual active page switches
 */
function onPageChange(pageId) {
    if (pageId === 'learning-mode') {
        updateProgressBar();
        setupDragAndDrop();
    }
}

// Global active view layout class mutation tracking hook
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

console.log('Electromagnetic Wave Spectrum - Script Loaded ✓');

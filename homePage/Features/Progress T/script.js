let progressData = JSON.parse(localStorage.getItem('progressData')) || [];
let progressChart;


function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
function initializeChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    if (progressChart) progressChart.destroy();

    const sortedData = progressData.sort((a, b) => new Date(a.date) - new Date(b.date));

    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sortedData.map(entry => new Date(entry.date).toLocaleDateString()),
            datasets: [{
                label: 'Weight (kg)',
                data: sortedData.map(entry => entry.currentWeight),
                borderColor: '#ff4d4d',
                backgroundColor: 'rgba(255, 77, 77, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }, {
                label: 'BMI',
                data: sortedData.map(entry => entry.bmi),
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                x: { 
                    grid: { display: false },
                    title: { display: true, text: 'Date' }
                },
                y: {
                    beginAtZero: false,
                    title: { display: true, text: 'Value' },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            }
        }
    });
}

function calculateBMI(weight, heightCm) {
    const heightM = heightCm / 100;
    return weight / (heightM * heightM);
}

document.getElementById('progressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        currentWeight: parseFloat(document.getElementById('currentWeight').value),
        height: parseFloat(document.getElementById('height').value),
        workoutType: document.getElementById('workoutType').value,
        exercise: document.getElementById('exercise').value,
        duration: parseInt(document.getElementById('duration').value),
        caloriesBurned: parseInt(document.getElementById('caloriesBurned').value),
        intensity: document.getElementById('intensity').value,
        date: document.getElementById('date').value,
        notes: document.getElementById('notes').value,
        bmi: calculateBMI(
            parseFloat(document.getElementById('currentWeight').value),
            parseFloat(document.getElementById('height').value)
        )
    };

    if (formData.workoutType === 'Strength') {
        formData.weight = parseFloat(document.getElementById('weight').value) || 0;
        formData.sets = parseInt(document.getElementById('sets').value) || 0;
        formData.reps = parseInt(document.getElementById('reps').value) || 0;
    }

    progressData.push(formData);
    localStorage.setItem('progressData', JSON.stringify(progressData));
    
    initializeChart();
    updateStats();
    displayProgress();
    
    this.reset();
    document.getElementById('date').value = new Date().toISOString().split('T')[0];
});

function updateStats() {
    const personalBest = Math.max(...progressData.map(entry => entry.weight || 0));
    const totalVolume = progressData.reduce((sum, entry) => sum + (entry.weight || 0) * (entry.sets || 0) * (entry.reps || 0), 0);
    
    document.getElementById('personalBest').textContent = `${personalBest || 0} kg`;
    document.getElementById('totalVolume').textContent = `${totalVolume.toFixed(1)} kg`;
    document.getElementById('totalWorkouts').textContent = progressData.length;
}

function displayProgress() {
    const progressList = document.getElementById('progressList');
    progressList.innerHTML = '';
    
    progressData.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'progress-entry';
        entryElement.innerHTML = `
            <div class="entry-header">
                <h3><i class="fas fa-dumbbell"></i> ${entry.exercise}</h3>
                <span class="date">${new Date(entry.date).toLocaleDateString()}</span>
            </div>
            <div class="entry-details">
                <p><i class="fas fa-weight"></i> Weight: ${entry.currentWeight} kg</p>
                <p><i class="fas fa-running"></i> Duration: ${entry.duration} mins</p>
                <p><i class="fas fa-fire"></i> Calories: ${entry.caloriesBurned}</p>
                ${entry.workoutType === 'Strength' ? `
                    <p><i class="fas fa-dumbbell"></i> Sets: ${entry.sets}</p>
                    <p><i class="fas fa-redo"></i> Reps: ${entry.reps}</p>
                ` : ''}
                <p><i class="fas fa-sticky-note"></i> Notes: ${entry.notes || 'None'}</p>
                <button onclick="deleteEntry(${entry.id})" class="delete-btn">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        progressList.appendChild(entryElement);
    });
}

function deleteEntry(id) {
    progressData = progressData.filter(entry => entry.id !== id);
    localStorage.setItem('progressData', JSON.stringify(progressData));
    initializeChart();
    updateStats();
    displayProgress();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeChart();
    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    updateStats();
    displayProgress();
});
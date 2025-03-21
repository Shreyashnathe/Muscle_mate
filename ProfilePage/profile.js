// Profile Photo Preview
function previewProfilePhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-preview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  if (weight && height) {
    const bmi = weight / (height * height);
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);
    return bmi;
  }
  return 0;
}

// AI Recommendations
function generateRecommendations() {
  const bmi = calculateBMI();
  const workoutSuggestions = {
    underweight: "Focus on strength training 4x/week with protein-rich diet",
    normal: "Maintain cardio 3x/week + strength training 3x/week",
    overweight: "High-intensity cardio 5x/week + balanced nutrition"
  };

  const dietSuggestions = {
    underweight: "Increase calorie intake with healthy fats and proteins",
    normal: "Maintain balanced diet with 40% carbs, 30% protein, 30% fats",
    overweight: "Focus on low-carb diet with high fiber and lean proteins"
  };

  let category = 'normal';
  if (bmi < 18.5) category = 'underweight';
  else if (bmi >= 25) category = 'overweight';

  document.getElementById('workout-suggestion').textContent = workoutSuggestions[category];
  document.getElementById('diet-suggestion').textContent = dietSuggestions[category];
}

// Form Submission
document.getElementById('profile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Save to localStorage
  const profileData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    weight: document.getElementById('weight').value,
    height: document.getElementById('height').value,
    bmi: calculateBMI()
  };
  
  localStorage.setItem('userProfile', JSON.stringify(profileData));
  generateRecommendations();
  alert('Profile saved successfully! 🎉');
});

// Real-time BMI Update
document.getElementById('weight').addEventListener('input', calculateBMI);
document.getElementById('height').addEventListener('input', calculateBMI);

// Initial Recommendations
window.addEventListener('load', function() {
  const savedProfile = localStorage.getItem('userProfile');
  if (savedProfile) {
    const profile = JSON.parse(savedProfile);
    document.getElementById('name').value = profile.name || '';
    document.getElementById('phone').value = profile.phone || '';
    document.getElementById('email').value = profile.email || '';
    document.getElementById('weight').value = profile.weight || '';
    document.getElementById('height').value = profile.height || '';
    calculateBMI();
  }
  generateRecommendations();
});


function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}
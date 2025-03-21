// Features Button 
function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}


// ================================
document.getElementById('workout-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get user inputs
  const goal = document.getElementById('goal').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseInt(document.getElementById('weight').value);
  const experience = document.getElementById('experience').value;

  // Generate workout plan based on inputs
  const workoutPlan = generateWorkoutPlan(goal, age, weight, experience);

  // Display the workout plan with animation
  const outputDiv = document.getElementById('workout-plan-output');
  outputDiv.innerHTML = `<h3>Your Workout Plan:</h3><p>${workoutPlan}</p>`;
  outputDiv.style.animation = 'fadeIn 1s ease-in-out';
});

function generateWorkoutPlan(goal, age, weight, experience) {
  let workoutPlan = '';

  // Basic logic to generate a workout plan
  if (goal === 'weight_loss') {
    workoutPlan += `Focus on cardio exercises like running, cycling, and HIIT. `;
  } else if (goal === 'muscle_gain') {
    workoutPlan += `Focus on strength training with weights. `;
  } else if (goal === 'endurance') {
    workoutPlan += `Focus on endurance exercises like swimming and long-distance running. `;
  } else {
    workoutPlan += `Focus on a balanced mix of cardio and strength training. `;
  }

  if (experience === 'beginner') {
    workoutPlan += `Start with light exercises and gradually increase intensity. `;
  } else if (experience === 'intermediate') {
    workoutPlan += `Incorporate moderate-intensity exercises and progressive overload. `;
  } else {
    workoutPlan += `Challenge yourself with advanced exercises and heavy weights. `;
  }

  workoutPlan += `Based on your age (${age}) and weight (${weight} kg), ensure proper hydration and nutrition.`;

  return workoutPlan;
}
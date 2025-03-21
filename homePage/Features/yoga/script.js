function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }

const yogaSchedule = {
    monday: [
        {
            name: "Crescent Lunge",
            description: "Build strength and stability in this powerful standing pose that opens the hips and chest.",
            image: "crescent lunge.png",
            calories: 15
        },
        {
            name: "Downward Dog Pose",
            description: "A fundamental pose that energizes the body and improves flexibility.",
            image: "downward dog pose.png",
            calories: 12
        },
        {
            name: "Cobra Pose",
            description: "Strengthen spine and chest muscles with this gentle backbend.",
            image: "cobra pose.png",
            calories: 10
        },
        {
            name: "Child's Pose",
            description: "A gentle resting pose that calms the mind and relieves stress.",
            image: "child pose.png",
            calories: 8
        },
        {
            name: "Bridge Pose",
            description: "Strengthen your back and open your chest with this gentle backbend.",
            image: "bridge pose.png",
            calories: 12
        },
        {
            name: "Fish Pose",
            description: "Open chest and throat with this gentle backbend that improves breathing.",
            image: "fish pose.png",
            calories: 10
        }
    ],
    tuesday: [
        {
            name: "Pigeon Pose",
            description: "Deep hip opener that improves flexibility and relieves tension.",
            image: "pigeon pose .png"
        },
        {
            name: "Camel Pose",
            description: "A heart-opening backbend that improves posture and flexibility.",
            image: "camel pose.png"
        },
        {
            name: "Pyramid Pose",
            description: "Strengthen legs and improve balance with this standing pose.",
            image: "pyramind pose.png"
        },
        {
            name: "Legs Up Wall",
            description: "A restorative pose that improves circulation and reduces stress.",
            image: "legs up wall.png"
        },
        {
            name: "Bow Pose",
            description: "A dynamic backbend that energizes the body and improves flexibility.",
            image: "bow pose.png"
        },
        {
            name: "Forward Fold",
            description: "A calming pose that stretches the entire back body.",
            image: "forward fold.png"
        }
    ],
    wednesday: [
        {
            name: "Forward Fold",
            description: "A calming pose that stretches the entire back body.",
            image: "forward fold.png"
        },
        {
            name: "Fish Pose",
            description: "Open chest and throat with this gentle backbend.",
            image: "fish pose.png"
        },
        {
            name: "Crescent Lunge",
            description: "Build strength and stability in this powerful standing pose.",
            image: "crescent lunge.png"
        },
        {
            name: "Plow Pose",
            description: "An inversion that improves flexibility and circulation.",
            image: "plow pose.png"
        },
        {
            name: "Seated Forward Fold",
            description: "A calming pose that stretches the spine and hamstrings.",
            image: "seated fold.png"
        },
        {
            name: "Cow Pose",
            description: "A gentle pose that warms up the spine and improves flexibility.",
            image: "cow pose.png"
        }
    ],
    thursday: [
        {
            name: "Cow Pose",
            description: "A gentle pose that warms up the spine and improves flexibility.",
            image: "cow pose.png"
        },
        {
            name: "Downward Dog Pose",
            description: "A fundamental pose that energizes the body and improves flexibility.",
            image: "downward dog pose.png"
        },
        {
            name: "Cobra Pose",
            description: "Strengthen spine and chest muscles with this gentle backbend.",
            image: "cobra pose.png"
        },
        {
            name: "Child's Pose",
            description: "A gentle resting pose that calms the mind and relieves stress.",
            image: "child pose.png"
        },
        {
            name: "Bridge Pose",
            description: "Strengthen your back and open your chest with this gentle backbend.",
            image: "bridge pose.png"
        },
        {
            name: "Pigeon Pose",
            description: "Deep hip opener that improves flexibility and relieves tension.",
            image: "pigeon pose .png"
        }
    ],
    friday: [
        {
            name: "Pigeon Pose",
            description: "Deep hip opener that improves flexibility and relieves tension.",
            image: "pigeon pose .png"
        },
        {
            name: "Camel Pose",
            description: "A heart-opening backbend that improves posture and flexibility.",
            image: "camel pose.png"
        },
        {
            name: "Pyramid Pose",
            description: "Strengthen legs and improve balance with this standing pose.",
            image: "pyramind pose.png"
        },
        {
            name: "Legs Up Wall",
            description: "A restorative pose that improves circulation and reduces stress.",
            image: "legs up wall.png"
        },
        {
            name: "Bow Pose",
            description: "A dynamic backbend that energizes the body and improves flexibility.",
            image: "bow pose.png"
        },
        {
            name: "Crescent Lunge",
            description: "Build strength and stability in this powerful standing pose.",
            image: "crescent lunge.png"
        }
    ],
    saturday: [
        {
            name: "Forward Fold",
            description: "A calming pose that stretches the entire back body.",
            image: "forward fold.png"
        },
        {
            name: "Fish Pose",
            description: "Open chest and throat with this gentle backbend.",
            image: "fish pose.png"
        },
        {
            name: "Crescent Lunge",
            description: "Build strength and stability in this powerful standing pose.",
            image: "crescent lunge.png"
        },
        {
            name: "Plow Pose",
            description: "An inversion that improves flexibility and circulation.",
            image: "plow pose.png"
        },
        {
            name: "Seated Forward Fold",
            description: "A calming pose that stretches the spine and hamstrings.",
            image: "seated fold.png"
        },
        {
            name: "Downward Dog Pose",
            description: "A fundamental pose that energizes the body and improves flexibility.",
            image: "downward dog pose.png"
        }
    ],
    sunday: [
        {
            name: "Cow Pose",
            description: "A gentle pose that warms up the spine and improves flexibility.",
            image: "cow pose.png"
        },
        {
            name: "Downward Dog Pose",
            description: "A fundamental pose that energizes the body and improves flexibility.",
            image: "downward dog pose.png"
        },
        {
            name: "Cobra Pose",
            description: "Strengthen spine and chest muscles with this gentle backbend.",
            image: "cobra pose.png"
        },
        {
            name: "Child's Pose",
            description: "A gentle resting pose that calms the mind and relieves stress.",
            image: "child pose.png"
        },
        {
            name: "Bridge Pose",
            description: "Strengthen your back and open your chest with this gentle backbend.",
            image: "bridge pose.png"
        },
        {
            name: "Pyramid Pose",
            description: "Strengthen legs and improve balance with this standing pose.",
            image: "pyramind pose.png"
        }
    ]
};

// Add state management
let completedPoses = new Set();
let poseSets = new Map(); // Track sets for each pose

// Initialize all poses with 1 set by default
function initializePoseSets() {
    Object.keys(yogaSchedule).forEach(day => {
        yogaSchedule[day].forEach((_, index) => {
            poseSets.set(`${day}-${index}`, 1);
        });
    });
}

function createDayCard(day, poses) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    dayCard.id = day;

    const dayTitle = document.createElement('h2');
    dayTitle.textContent = day.charAt(0).toUpperCase() + day.slice(1);
    dayCard.appendChild(dayTitle);

    const posesContainer = document.createElement('div');
    posesContainer.className = 'poses';

    poses.forEach((pose, index) => {
        const poseElement = document.createElement('div');
        poseElement.className = 'pose';
        if (completedPoses.has(`${day}-${index}`)) {
            poseElement.classList.add('completed');
        }
        
        const poseId = `${day}-${index}`;
        const currentSets = poseSets.get(poseId) || 1; // Default to 1 if not set
        
        poseElement.innerHTML = `
            <input type="checkbox" class="pose-checkbox" id="${poseId}" 
                ${completedPoses.has(poseId) ? 'checked' : ''}>
            <label for="${poseId}"></label>
            <img src="${pose.image}" alt="${pose.name}" class="pose-image">
            <h3>${pose.name}</h3>
            <p>${pose.description}</p>
            <div class="calories-info">Burns ${pose.calories} calories</div>
            <div class="sets-control">
                <button class="sets-btn minus" data-pose="${poseId}">-</button>
                <span class="sets-count">${currentSets}</span>
                <button class="sets-btn plus" data-pose="${poseId}">+</button>
            </div>
        `;
        
        // Add click event listener to the image
        const poseImage = poseElement.querySelector('.pose-image');
        poseImage.addEventListener('click', () => {
            if (!completedPoses.has(poseId)) {
                completedPoses.add(poseId);
                poseElement.classList.add('completed');
                const checkbox = poseElement.querySelector('.pose-checkbox');
                checkbox.checked = true;
                updateStats();
            }
        });
        
        // Add checkbox event listener
        const checkbox = poseElement.querySelector('.pose-checkbox');
        const setsCount = poseElement.querySelector('.sets-count');
        
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                completedPoses.add(poseId);
                poseElement.classList.add('completed');
                // Keep sets at 1 when checked
                setsCount.textContent = '1';
                poseSets.set(poseId, 1);
            } else {
                completedPoses.delete(poseId);
                poseElement.classList.remove('completed');
                // Keep sets at 1 when unchecked
                setsCount.textContent = '1';
                poseSets.set(poseId, 1);
            }
            updateStats();
        });

        // Add sets button event listeners
        const minusBtn = poseElement.querySelector('.minus');
        const plusBtn = poseElement.querySelector('.plus');

        minusBtn.addEventListener('click', () => {
            const current = parseInt(setsCount.textContent);
            if (current > 1) { // Minimum value is 1
                setsCount.textContent = current - 1;
                poseSets.set(poseId, current - 1);
                updateStats();
            }
        });

        plusBtn.addEventListener('click', () => {
            const current = parseInt(setsCount.textContent);
            setsCount.textContent = current + 1;
            poseSets.set(poseId, current + 1);
            updateStats();
        });
        
        posesContainer.appendChild(poseElement);
    });

    dayCard.appendChild(posesContainer);
    return dayCard;
}

function updateStats() {
    const completedCount = completedPoses.size;
    let totalCalories = 0;
    
    // Calculate calories based on completed poses and their sets
    completedPoses.forEach(poseId => {
        const [day, index] = poseId.split('-');
        const sets = poseSets.get(poseId) || 1;
        const poseCalories = yogaSchedule[day][index].calories || 10; // Default to 10 if not specified
        totalCalories += poseCalories * sets;
    });
    
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('caloriesBurned').textContent = totalCalories;
}

function showDaySchedule(day) {
    const scheduleContainer = document.querySelector('.schedule-container');
    scheduleContainer.innerHTML = ''; // Clear existing content
    
    const dayCard = createDayCard(day, yogaSchedule[day]);
    scheduleContainer.appendChild(dayCard);
    
    // Reset animation
    scheduleContainer.style.animation = 'none';
    scheduleContainer.offsetHeight; // Trigger reflow
    scheduleContainer.style.animation = 'fadeInUp 0.5s ease forwards';
    
    // Update stats
    updateStats();
}

function initializeSchedule() {
    // Initialize all poses with 1 set
    initializePoseSets();
    
    // Show Monday's schedule by default
    showDaySchedule('monday');
    
    // Add click event listeners to day buttons
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            dayButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Show the selected day's schedule
            showDaySchedule(button.dataset.day);
        });
    });
}

// Initialize the schedule when the page loads
document.addEventListener('DOMContentLoaded', initializeSchedule); 
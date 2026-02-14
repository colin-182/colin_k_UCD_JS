// Workout state
let workouts = [];
let weeklyGoal = 3;

// DOM elements
const getStartedBtn = document.getElementById('get-started-btn');

const workoutForm = document.getElementById('workout-form');
const formMessages = document.getElementById('form-messages');

const dateInput = document.getElementById('workout-date');
const typeInput = document.getElementById('workout-type');
const durationInput = document.getElementById('duration');
const intensityInput = document.getElementById('intensity');
const notesInput = document.getElementById('notes');

const dateError = document.getElementById('date-error');
const typeError = document.getElementById('type-error');
const durationError = document.getElementById('duration-error');

const historyBody = document.getElementById('history-body');
const filterButtons = document.getElementById('.filter-btn');

const totalWorkoutsEl = document.getElementById('total-workouts');
const totalMinutesEl = document.getElementById('total-minutes');
const weeklyWorkoutsEl = document.getElementById('weekly-workouts');

const weeklyGoalInput = document.getElementById('weekly-goal');
const saveGoalBtn = document.getElementById('save-goal-btn');

// clearing forms & validations
function clearFormErrors() {
    dateError.textContent = '';
    typeError.textContent = '';
    durationError.textContent = '';
    formMessages.textContent = '';
    formMessages.className = 'form-messages';
}

function showFormMessage(message, type = 'error') {
  formMessages.textContent = message;
  formMessages.className = `form-messages ${type}`;
}

function isValidDate(value) {
    if (!value) return false;
    const inputDate = new Date(value);
    if (Number.isNaN(inputDate.getTime())) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
}

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();       
  const diff = d.getDate() - day;
  const weekStart = new Date(d.setDate(diff));
  weekStart.setHours(0, 0, 0, 0);
  return weekStart;
}

// form validation
function validateForm() {
    clearFormErrors();
    let isValid = true;

    if (!dateInput.value) {
        dateError.textContent = 'Please select a date.';
        isValid = false;
    } else if (!isValidDate(dateInput.value)){
        dateError.textContent = 'Date cannot be in the future.';
        isValid = false;
    }

    if (!typeInput.value) {
        typeError.textContent = 'Please choose a workout type.';
        isValid = false;
    }

    const durationValue = Number(durationInput.value);
    if (!durationInput.value) {
        durationError.textContent = 'Please enter a duration.';
        isValid = false;
    } else if (Number.isNaN(durationValue) || durationValue <= 0) {
        durationError.textContent = 'Duration must be a positive number.';
        isValid = false;
    }

    if (!isValid) {
        showFormMessage('Please fix the errors above and try again.', 'error');
    }

    return isValid;
}

// workout data
function addWorkout(workout) {
  workouts.push(workout);
  renderWorkoutRow(workout);
  updateStatsAndProgress();
}

function renderWorkoutRow(workout) {
  const tr = document.createElement('tr');
  tr.dataset.type = workout.type;

  const dateTd = document.createElement('td');
  dateTd.textContent = workout.date;

  const typeTd = document.createElement('td');
  typeTd.textContent = capitalize(workout.type);

  const durationTd = document.createElement('td');
  durationTd.textContent = workout.duration;

  const intensityTd = document.createElement('td');
  intensityTd.textContent = workout.intensity ? capitalize(workout.intensity) : '-';

  const notesTd = document.createElement('td');
  notesTd.textContent = workout.notes || '-';

  const actionsTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    removeWorkout(workout.id);
  });
  actionsTd.appendChild(deleteBtn);

  tr.appendChild(dateTd);
  tr.appendChild(typeTd);
  tr.appendChild(durationTd);
  tr.appendChild(intensityTd);
  tr.appendChild(notesTd);
  tr.appendChild(actionsTd);

  historyBody.appendChild(tr);
}

function removeWorkout(id) {
  workouts = workouts.filter(w => w.id !== id);
  renderHistoryTable();
  updateStatsAndProgress();
}

function renderHistoryTable() {
  historyBody.innerHTML = '';
  workouts.forEach(renderWorkoutRow);
}

function updateStatsAndProgress() {
  const totalWorkouts = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);

  totalWorkoutsEl.textContent = totalWorkouts;
  totalMinutesEl.textContent = totalMinutes;

  const today = new Date();
  const weekStart = getWeekStart(today);
  const weeklyCount = workouts.filter(w => new Date(w.date) >= weekStart).length;
  weeklyWorkoutsEl.textContent = weeklyCount;

  // Progress bar
  let percent = 0;
  if (weeklyGoal > 0) {
    percent = Math.min(100, Math.round((weeklyCount / weeklyGoal) * 100));
  }

  progressBarInner.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}
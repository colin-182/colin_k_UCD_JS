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
const weeklyWorkoutsEl = documents.getElementById('weekly-workouts');

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


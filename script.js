// Workout state
let workouts = [];
let weeklyGoal = 3;

// DOM elements
const getStartedBtn = documents.getElementById('get-started-btn');

const workoutForm = documents.getElementById('workout-form');
const formMessages = documents.getElementById('form-messages');

const dateInput = documents.getElementById('workout-date');
const typeInput = documents.getElementById('workout-type');
const durationInput = documents.getElementById('duration');
const intensityInput = documents.getElementById('intensity');
const notesInput = documents.getElementById('notes');

const dateError = documents.getElementById('date-error');
const typeError = documents.getElementById('type-error');
const durationError = documents.getElementById('duration-error');

const historyBody = documents.getElementById('history-body');
const filterButtons = documents.getElementById('.filter-btn');

const totalWorkoutsEl = documents.getElementById('total-workouts');
const totalMinutesEl = documents.getElementById('total-minutes');
const weeklyWorkoutsEl = documents.getElementById('weekly-workouts');

const weeklyGoalInput = documents.getElementById('weekly-goal');
const saveGoalBtn = documents.getElementById('save-goal-btn');

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

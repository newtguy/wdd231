const todaySpan = document.getElementById('today');
const tomorrowSpan = document.getElementById('today+1');
const dayAfterTomorrowSpan = document.getElementById('today+2');

const today = new Date();
const tomorrow = new Date(today);
const dayAfterTomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);
dayAfterTomorrow.setDate(today.getDate() + 2);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
todaySpan.textContent = 'Today';
tomorrowSpan.textContent = weekDays[tomorrow.getDay()];
dayAfterTomorrowSpan.textContent = weekDays[dayAfterTomorrow.getDay()];

document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.querySelector('.calendar');
    const monthYearElement = document.getElementById('month-year');
    const daysElement = document.getElementById('days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar(date) {
        daysElement.innerHTML = '';

        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfLastMonth = month === 0 ? new Date(year - 1, 11, 0).getDate() : new Date(year, month, 0).getDate();

        monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Preencher os dias da semana anterior ao primeiro dia do mês
        for (let i = firstDayOfMonth; i > 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('inactive');
            dayElement.textContent = lastDayOfLastMonth - i + 1;
            daysElement.appendChild(dayElement);
        }

        // Preencher os dias do mês atual
        for (let day = 1; day <= lastDateOfMonth; day++) {
            const dayElement = document.createElement('div');
            if (day === date.getDate() && new Date().getMonth() === month && new Date().getFullYear() === year) {
                dayElement.classList.add('today');
            }
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => toggleSelect(dayElement));
            daysElement.appendChild(dayElement);
        }

        // Preencher os dias da semana seguinte ao último dia do mês
        const daysInCalendar = daysElement.childElementCount;
        for (let i = 1; i <= (42 - daysInCalendar); i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('inactive');
            dayElement.textContent = i;
            daysElement.appendChild(dayElement);
        }
    }

    function toggleSelect(dayElement) {
        dayElement.classList.toggle('selected');
    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        renderCalendar(currentDate);
    }

    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    renderCalendar(currentDate);
});

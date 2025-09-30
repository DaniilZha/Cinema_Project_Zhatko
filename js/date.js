document.addEventListener('DOMContentLoaded', function() {
    const dates = document.querySelectorAll('.session-date-item');

    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Удаляем класс active у всех блоков
            dates.forEach(d => d.classList.remove('active'));
            // Присваиваем класс active новому блоку
            this.classList.add('active');
        });
    });
});
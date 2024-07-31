document.addEventListener('DOMContentLoaded', () => {
    // Находим все вкладки и содержимое вкладок
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    // Устанавливаем обработчик событий на каждую вкладку
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(c => c.classList.remove('tab__content_active'));
            tab.classList.add('tab_active');
            // Добавляем активный класс к соответствующему содержимому
            contents[index].classList.add('tab__content_active');
        });
    });
});

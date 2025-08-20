// index-translate.js

const translations = {
    en: {
        status: "Mivio Linux is currently <strong>under active development</strong>. The first stable release is coming soon.",
        contentp: "Follow progress and contribute on GitHub:",
        github: "View on GitHub",
        note: "Stay tuned for early builds and release announcements",
        // btn_telegram: "Join Telegram (RU)",
        // btn_github: "View on GitHub",
        // note: "Check back after the first release — installation guide, known issues, and answers will be here.",
        // copyright: "&copy; 2025 Mivio Linux. Open source and community-driven. Licensed under GPL-3.0."
    },
    ru: {
        status: "Mivio Linux в настоящее время находится <strong>в активной разработке</strong>. Скоро выйдет первая стабильная версия.",
        contentp: "Следите за прогрессом и вносите свой вклад на GitHub:",
        github: "Посмотреть на GitHub",
        note: "Следите за ранними сборками и анонсами выпусков.",
    }
};

function setLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // Меняем заголовок страницы
    document.querySelector('title').textContent = lang === 'ru' ? 'ЧаВо — Mivio Linux' : 'FAQ — Mivio Linux';

    // Переводим все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translation[key]) {
            el.innerHTML = translation[key];
        }
    });
    document.querySelectorAll('.language-switcher .btn').forEach(btn => {
    if (btn.textContent.toLowerCase() === lang) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

    // Сохраняем язык
    localStorage.setItem('mivio-lang', lang);
    document.documentElement.lang = lang;
}

// Автоматическая загрузка при старте
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('mivio-lang') || 'en';
    setLanguage(savedLang);
});

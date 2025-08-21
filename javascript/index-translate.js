// index-translate.js

const translations = {
    en: {
        lead: 'An Arch Linux-based distribution with a <a href="https://calamares.io/"><strong>graphical Calamares installer</strong></a> and KDE Plasma desktop — simple, modern, and user-friendly.',
        featurecontenth2: "Easy Interface",
        featurecontentp:'Enjoy a clean and powerful experience with the <a href="https://kde.org/plasma-desktop/"><strong>KDE Plasma desktop</strong></a> — fully featured, customizable, and intuitive from the first boot.',
        download: "Download Now",
        // btn_telegram: "Join Telegram (RU)",
        // btn_github: "View on GitHub",
        // note: "Check back after the first release — installation guide, known issues, and answers will be here.",
        // copyright: "&copy; 2025 Mivio Linux. Open source and community-driven. Licensed under GPL-3.0."
    },
    ru: {
        lead: 'Дистрибутив на базе Arch Linux с <a href="https://calamares.io/"><strong>графическим установщиком Calamares</strong></a> и рабочим столом KDE Plasma — простой, современный и удобный.',
        featurecontenth2: "Простой интерфейс",
        featurecontentp: 'Наслаждайтесь чистым и мощным опытом работы с <a href="https://kde.org/plasma-desktop/"><strong>рабочим столом KDE Plasma</strong></a> — полнофункциональным, настраиваемым и интуитивно понятным с первой загрузки.',
        download: "Загрузить"
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

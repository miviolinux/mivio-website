// faq-translate.js

const translations = {
    en: {
        h1: "Frequently Asked Questions",
        status: "Mivio Linux is still <strong class='green'>under development</strong>. The first release is coming soon.",
        no_faq: "There are no FAQs yet — but they will appear as soon as the system is ready.",
        follow: "Follow the progress and get early access to information:",
        btn_telegram: "Join Telegram (RU)",
        btn_github: "View on GitHub",
        note: "Check back after the first release — installation guide, known issues, and answers will be here.",
        copyright: "&copy; 2025 Mivio Linux. Open source and community-driven. Licensed under GPL-3.0."
    },
    ru: {
        h1: "Часто задаваемые вопросы",
        status: "Mivio Linux всё ещё <strong class='green'>в разработке</strong>. Первый релиз уже скоро.",
        no_faq: "Пока нет вопросов — но они появятся, когда система будет готова.",
        follow: "Следите за обновлениями и получайте информацию первой:",
        btn_telegram: "Присоединиться к Telegram (RU)",
        btn_github: "Посмотреть на GitHub",
        note: "Загляните позже, после первого релиза — здесь появятся руководство по установке, известные проблемы и ответы.",
        copyright: "&copy; 2025 Mivio Linux. Свободное ПО с открытым исходным кодом. Лицензия: GPL-3.0."
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

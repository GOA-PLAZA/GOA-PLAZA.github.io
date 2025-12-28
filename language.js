const translations = {
    zh: {
        // index.html
        'about-me': '关于我',
        'oc-world': 'OC世界观',
        'ask-guestbook': '提问箱&留言板',
        'commission-paused': '委托相关(暂停中)',
        'random-comics': '杂谈漫画',

        // commission popup
        'commission-title': '委托信息',
        'commission-paused-msg': '📢 目前邮箱委托暂停',
        'commission-drop-msg': '偶尔在以下场所掉落零碎稿件',
        'commission-place-1': '米画师',
        'commission-place-2': 'QQ群🧀1049447151',

        // oc popup
        'oc-not-ready': '目前，该站点的OC页面暂未制作，',
        'oc-notion-prompt': '你愿意跳转到notion制作的简陋版吗？',
        'oc-yes': 'YES',
        'oc-no': 'NO',

        // guestbook.html
        'ask-box-entry': '提问箱入口',
        'return-home': '返回主页',

        // alt texts
        'alt-ask-box': '提问箱',

        // talk-comics.html
        'filter-label': '筛选:',
        'filter-all': '全部',
        'filter-chat': '杂谈',
        'filter-daily': '日常生活',
        'filter-creation': '创作',
        'sort-label': '排序:',
        'sort-desc': '顺序',
        'sort-asc': '倒序',
        'featured-label': '精选',
    },
    en: {
        // index.html
        'about-me': 'About Me',
        'oc-world': 'OC World',
        'ask-guestbook': 'Ask Box & Guestbook',
        'commission-paused': 'Commissions (Paused)',
        'random-comics': 'Random Comics',

        // commission popup
        'commission-title': 'COMMISSION_INFO.txt',
        'commission-paused-msg': '📢 Email commissions are currently paused',
        'commission-drop-msg': 'Occasionally post random sketches at the following places:',
        'commission-place-1': 'Mihuashi',
        'commission-place-2': 'QQ Group 🧀1049447151',

        // oc popup
        'oc-not-ready': 'Currently, the OC page for this site is not yet created,',
        'oc-notion-prompt': 'Would you like to jump to the simple version made with Notion?',
        'oc-yes': 'YES',
        'oc-no': 'NO',

        // guestbook.html
        'ask-box-entry': 'Ask Box Entry',
        'return-home': 'Return Home',

        // alt texts
        'alt-ask-box': 'Ask Box',

        // talk-comics.html
        'filter-label': 'Filter:',
        'filter-all': 'All',
        'filter-chat': 'Random Topic',
        'filter-daily': 'Daily Life',
        'filter-creation': 'Creation',
        'sort-label': 'Sort:',
        'sort-desc': 'Newest',
        'sort-asc': 'Oldest',
        'featured-label': 'Featured',
    }
};

let currentLang = localStorage.getItem('siteLanguage') || 'zh';

function getTranslation(key) {
    return translations[currentLang]?.[key] || translations.zh[key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        element.alt = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = getTranslation(key);
    });

    updateLanguageButton();
}

function updateLanguageButton() {
    const zhBtn = document.getElementById('lang-zh-btn');
    const enBtn = document.getElementById('lang-en-btn');

    if (zhBtn && enBtn) {
        if (currentLang === 'zh') {
            zhBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            zhBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLanguage', currentLang);
    updateLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('siteLanguage', currentLang);
    updateLanguage();
}

function initLanguage() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateLanguage);
    } else {
        updateLanguage();
    }
}

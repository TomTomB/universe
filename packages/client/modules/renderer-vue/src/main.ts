import { createApp } from 'vue';
import App from './App.vue';
import { appRootSelector } from './core/constants';
import './styles/defaults/index.scss';

// import router from './router';
// import store from './store';
// import {
//   loadLocaleMessages,
//   setI18nLanguage,
//   setupI18n,
//   SUPPORT_LOCALES,
//   SupportedLocale,
// } from './i18n';

// const i18n = setupI18n({
//   locale: 'en-US',
//   fallbackLocale: 'en-US',
// });

// router.beforeEach(async (to, from, next) => {
//   const paramsLocale = to.params.locale as SupportedLocale;

//   // use locale if paramsLocale is not in SUPPORT_LOCALES
//   if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//     return next(`/en-US`);
//   }

//   // load locale messages
//   if (!i18n.global.availableLocales.includes(paramsLocale)) {
//     await loadLocaleMessages(i18n, paramsLocale);
//   }

//   // set i18n language
//   setI18nLanguage(i18n, paramsLocale);

//   return next();
// });

createApp(App).mount(appRootSelector);

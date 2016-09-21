import i18n from 'i18next';

i18n.init(
    {
        whitelist: ['en', 'zh'],
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['common', 'counter'],
        defaultNS: 'common',

        interpolation:
        {
            escapeValue: false // not needed for react!!
        }
    });

export default i18n;

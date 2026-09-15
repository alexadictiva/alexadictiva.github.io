import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const targetLanguage = language === 'es' ? 'EN' : 'ES';

    return (
        <motion.button
            type="button"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label={language === 'es' ? t('language.switchEnglish') : t('language.switchSpanish')}
            title={language === 'es' ? t('language.switchEnglish') : t('language.switchSpanish')}
            className="fixed bottom-5 right-5 z-[60] flex h-14 min-w-14 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 font-bold text-gray-800 shadow-xl transition-colors hover:text-accent dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:bottom-7 sm:right-7"
        >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.2-2.46 3.33-5.46 3.4-9C15.33 8.46 14.2 5.46 12 3m0 18c-2.2-2.46-3.33-5.46-3.4-9C8.67 8.46 9.8 5.46 12 3M3.6 9h16.8M3.6 15h16.8" />
            </svg>
            <span>{targetLanguage}</span>
        </motion.button>
    );
};

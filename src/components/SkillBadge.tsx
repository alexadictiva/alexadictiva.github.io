import { motion } from 'framer-motion';
import { Skill } from '../data/profile';
import { TranslationKey, useLanguage } from '../contexts/LanguageContext';

interface SkillBadgeProps {
    skill: Skill;
    index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
    const { t, translateContent } = useLanguage();
    const levelColors = {
        basic: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        learning: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
        basicLearning: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
        basicIntermediate: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
        intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        intermediateAdvanced: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
        advanced: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    };

    const categoryColors = {
        frontend: 'border-blue-500/20 bg-blue-50 dark:bg-blue-950/20',
        backend: 'border-green-500/20 bg-green-50 dark:bg-green-950/20',
        tools: 'border-purple-500/20 bg-purple-50 dark:bg-purple-950/20',
        competencies: 'border-cyan-500/20 bg-cyan-50 dark:bg-cyan-950/20'
    };
    const levelLabels: Record<NonNullable<Skill['level']>, TranslationKey> = {
        basic: 'skills.level.basic',
        learning: 'skills.level.learning',
        basicLearning: 'skills.level.basicLearning',
        basicIntermediate: 'skills.level.basicIntermediate',
        intermediate: 'skills.level.intermediate',
        intermediateAdvanced: 'skills.level.intermediateAdvanced',
        advanced: 'skills.level.advanced',
    };
    const categoryLabels: Record<Skill['category'], TranslationKey> = {
        frontend: 'skills.frontend',
        backend: 'skills.backend',
        tools: 'skills.tools',
        competencies: 'skills.competencies',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`relative p-4 rounded-lg border-2 ${categoryColors[skill.category]} transition-all duration-200`}
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {translateContent(skill.name)}
                </h3>
                {skill.level && (
                    <span className={`ml-2 whitespace-nowrap px-2 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]}`}>
                        {t(levelLabels[skill.level])}
                    </span>
                )}
            </div>

            {skill.level && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${getLevelPercentage(skill.level)}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-2 bg-accent rounded-full"
                    />
                </div>
            )}

            <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 capitalize">
                {t(categoryLabels[skill.category])}
            </div>
        </motion.div>
    );
};

const getLevelPercentage = (level: NonNullable<Skill['level']>): number => {
    switch (level) {
        case 'learning': return 20;
        case 'basic': return 30;
        case 'basicLearning': return 35;
        case 'basicIntermediate': return 45;
        case 'intermediate': return 60;
        case 'intermediateAdvanced': return 72;
        case 'advanced': return 85;
        default: return 0;
    }
};

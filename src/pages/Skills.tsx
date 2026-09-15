import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { SkillBadge } from '../components/SkillBadge';
import { profile } from '../data/profile';
import { Skill } from '../data/profile';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState<Skill['category'] | 'all'>('all');

    const categories = [
        { id: 'all', label: t('skills.all') },
        { id: 'frontend', label: t('skills.frontend') },
        { id: 'backend', label: t('skills.backend') },
        { id: 'tools', label: t('skills.tools') },
        { id: 'competencies', label: t('skills.competencies') }
    ];

    const filteredSkills = selectedCategory === 'all'
        ? profile.skills
        : profile.skills.filter(skill => skill.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-0">
            <Section id="habilidades" title={t('nav.skills')} className="bg-white dark:bg-gray-800">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id as Skill['category'] | 'all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                                ? 'bg-accent text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
                >
                    {filteredSkills.map((skill, index) => (
                        <SkillBadge key={skill.name} skill={skill} index={index} />
                    ))}
                </motion.div>

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid md:grid-cols-3 gap-8"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                            {profile.skills.filter(s => s.category === 'frontend').length}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                            {t('skills.frontendCount')}
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                            {profile.skills.filter(s => s.category === 'backend').length}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                            {t('skills.backendCount')}
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                            {profile.skills.length}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                            {t('skills.total')}
                        </div>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};

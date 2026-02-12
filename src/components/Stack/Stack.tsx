import React, { useState } from 'react';
import styles from './Stack.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface TechItem {
    name: string;
    icon: string;
    level?: 'master' | 'learning';
}

interface StackCategory {
    category: string;
    items: TechItem[];
}

interface StackProps {
    stack: StackCategory[] | TechItem[]; // Support both for backward compatibility or transition
}

const Stack: React.FC<StackProps> = ({ stack }) => {
    // Guard clause: if stack is simple array (legacy), wrap it in "All"
    const normalizedStack: StackCategory[] = Array.isArray(stack) && 'category' in stack[0]
        ? (stack as StackCategory[])
        : [{ category: 'All', items: stack as TechItem[] }];

    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section className={styles['stack-container']}>
            {/* Only show categories if there's more than one (and not just "All" wrapper) */}
            {normalizedStack.length > 1 && (
                <div className={styles['tabs-nav']} role="tablist">
                    {normalizedStack.map((cat, index) => (
                        <button
                            key={index}
                            role="tab"
                            aria-selected={activeCategory === index}
                            className={activeCategory === index ? styles.active : ''}
                            onClick={() => setActiveCategory(index)}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles['grid-wrapper']}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeCategory}
                        className={styles['grid-container']}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {normalizedStack[activeCategory].items.map((tech, index) => (
                            <div key={index} className={`${styles['stack-item']} ${tech.level ? styles[tech.level] : ''}`}>
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Stack;

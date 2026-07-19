import React, { useState } from 'react';
import styles from './Stack.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import type { StackCategory, StackItem } from '../../types/site';

interface StackProps {
  stack: StackCategory[] | StackItem[];
}

const Stack: React.FC<StackProps> = ({ stack }) => {
  const normalizedStack: StackCategory[] =
    Array.isArray(stack) && stack.length > 0 && 'category' in stack[0]
      ? (stack as StackCategory[])
      : [{ category: 'All', items: stack as StackItem[] }];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className={styles['stack-container']}>
      {normalizedStack.length > 1 && (
        <div className={styles['tabs-nav']} role="tablist">
          {normalizedStack.map((cat, index) => (
            <button
              key={index}
              role="tab"
              id={`stack-tab-${index}`}
              aria-controls={`stack-panel-${index}`}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`stack-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`stack-tab-${activeCategory}`}
            className={styles['grid-container']}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {normalizedStack[activeCategory].items.map((tech, index) => (
              <div
                key={index}
                className={`${styles['stack-item']} ${tech.level ? styles[tech.level] : ''}`}
              >
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

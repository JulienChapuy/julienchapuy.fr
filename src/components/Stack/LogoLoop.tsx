import React from 'react';
import styles from './LogoLoop.module.scss';
import type { StackCategory, StackItem } from '../../types/site';

interface LogoLoopProps {
  stack: StackCategory[] | StackItem[];
}

const LogoLoop: React.FC<LogoLoopProps> = ({ stack }) => {
  // 1. Flatten the stack if it has categories
  let allItems: StackItem[] = [];
  if (Array.isArray(stack) && stack.length > 0 && 'category' in stack[0]) {
    (stack as StackCategory[]).forEach((cat) => {
      allItems = [...allItems, ...cat.items];
    });
  } else {
    allItems = stack as StackItem[];
  }

  // 2. Duplicate items to ensure seamless loop
  // We need enough width to scroll. If we have a lot of items, double is enough.
  const loopItems = [...allItems, ...allItems];

  return (
    <div className={styles['logo-loop-container']}>
      <div className={styles['loop-track']}>
        {loopItems.map((item, index) => (
          <div key={index} className={styles['logo-item']}>
            {item.icon.startsWith('/') ? (
              <img src={item.icon} alt={item.name} />
            ) : (
              <i className={item.icon}></i>
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;

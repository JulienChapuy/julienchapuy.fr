import React from 'react';
import styles from './Timeline.module.scss';

export interface TimelineItemProps {
  title: string;
  period: string;
  description: string | string[];
  stack?: { name: string; icon: string }[];
  isActive?: boolean;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  period,
  description,
  stack,
  isActive,
  isLast,
}) => {
  return (
    <li
      className={`${styles['timeline-item']} ${isLast ? styles['is-last'] : ''} ${isActive ? styles['is-active'] : ''}`}
    >
      <div className={styles['timeline-bullet']} />
      <div className={styles['timeline-content']}>
        <h4 className={styles['timeline-title']}>{title}</h4>
        <div className={styles['timeline-period']}>{period}</div>
        <div className={styles['timeline-desc']}>
          {Array.isArray(description) ? (
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
        {stack && stack.length > 0 && (
          <div className={styles['timeline-stack']}>
            {stack.map((tech, i) => (
              <span key={i} className={styles['tech-badge']} title={tech.name}>
                {tech.icon.startsWith('/') ? (
                  <img src={tech.icon} alt={tech.name} />
                ) : (
                  <i className={tech.icon}></i>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export interface TimelineProps {
  items: TimelineItemProps[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ul className={styles['timeline-list']}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
};

export default Timeline;

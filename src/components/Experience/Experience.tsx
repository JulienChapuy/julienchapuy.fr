import React, { useState } from 'react';
import styles from './Experience.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from './Timeline';

interface Role {
  role: string;
  period: string;
  desc: string[];
  stack?: { name: string; icon: string }[];
}

interface Job {
  company: string;
  url: string;
  roles: Role[];
}

interface ExperienceProps {
  title: string;
  jobs: Job[];
  limit?: number;
  seeMoreLink?: string;
  seeMoreLabel?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  jobs,
  limit,
  seeMoreLink,
  seeMoreLabel,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const displayedJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <section id="experience" className={styles['experience-container']}>
      <h2 className={styles['section-title']}>{title}</h2>
      <div className={styles['experience-content']}>
        <div className={styles['tabs-list']} role="tablist">
          {displayedJobs.map((job, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              className={activeTab === index ? styles.active : ''}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles['tab-label-wrapper']}>
                <span>{job.company}</span>
                <span
                  className={`${styles['active-dot']} ${index === 0 ? styles['is-active'] : ''}`}
                />
              </div>
            </button>
          ))}
          {seeMoreLink && seeMoreLabel && (
            <div style={{ marginTop: '1rem', padding: '0 0.5rem' }}>
              <a
                href={seeMoreLink}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                {seeMoreLabel}{' '}
                <i
                  className="fa fa-arrow-right"
                  style={{ marginLeft: '0.5rem' }}
                ></i>
              </a>
            </div>
          )}
        </div>

        <div className={styles['tab-content']}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles['company-header']}>
                <h3>
                  <a
                    href={displayedJobs[activeTab].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['company-link']}
                  >
                    {displayedJobs[activeTab].company}
                  </a>
                </h3>
              </div>

              <div className={styles['timeline-wrapper']}>
                <Timeline
                  items={displayedJobs[activeTab].roles.map((role, index) => ({
                    title: role.role,
                    period: role.period,
                    description: role.desc,
                    stack: role.stack,
                    isActive: activeTab === 0 && index === 0,
                  }))}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;

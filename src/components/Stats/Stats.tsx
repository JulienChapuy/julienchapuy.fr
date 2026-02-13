import React from 'react';
import * as ReactCountUpModule from 'react-countup';

// Handle CJS/ESM interop
const CountUp = (ReactCountUpModule as any).default || ReactCountUpModule;

import styles from './Stats.module.scss';

interface StatsProps {
  content: {
    experience: string;
    projects: string;
    articles: string;
    papers: string;
  };
}

const Stats: React.FC<StatsProps> = ({ content }) => {
  return (
    <div className={`${styles['stats-counter']} paralax-mf section-overly`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div
              className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}
            >
              <div className={styles['counter-ico']}>
                <i
                  className="ion-ios-briefcase-outline"
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                ></i>
              </div>
              <p className={styles.counter}>
                <CountUp
                  end={4}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <span className={styles['counter-text']}>
                {content.experience}
              </span>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div
              className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}
            >
              <div className={styles['counter-ico']}>
                <i
                  className="ion-ios-checkmark-outline"
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                ></i>
              </div>
              <p className={styles.counter}>
                <CountUp
                  end={15}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <span className={styles['counter-text']}>{content.projects}</span>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div
              className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}
            >
              <div className={styles['counter-ico']}>
                <i
                  className="ion-ios-paper-outline"
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                ></i>
              </div>
              <p className={styles.counter}>
                <CountUp
                  end={8}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <span className={styles['counter-text']}>{content.articles}</span>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div
              className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}
            >
              <div className={styles['counter-ico']}>
                <i
                  className="ion-ios-people-outline"
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                ></i>
              </div>
              <p className={styles.counter}>
                <CountUp
                  end={2}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <span className={styles['counter-text']}>{content.papers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

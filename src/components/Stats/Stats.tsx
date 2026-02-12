import React from 'react';
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
                        <div className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}>
                            <p className={styles.counter}>4</p>
                            <span className={styles['counter-text']}>{content.experience}</span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}>
                            <p className={styles.counter}>15</p>
                            <span className={styles['counter-text']}>{content.projects}</span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}>
                            <p className={styles.counter}>8</p>
                            <span className={styles['counter-text']}>{content.articles}</span>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className={`${styles['counter-box']} pt-4 pt-md-0 text-center`}>
                            <p className={styles.counter}>2</p>
                            <span className={styles['counter-text']}>{content.papers}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

import React from 'react';
import styles from './Intro.module.scss';
import { motion } from "framer-motion";
import { SplineScene } from '../ui/SplineScene';
import LogoLoop from '../Stack/LogoLoop';

interface IntroProps {
    content: {
        greeting: string;
        name: string;
        roles: string;
        subRoles?: string;
        btn: string;
    };
    stack: any[]; // Using any[] for now to avoid extensive type imports, but should ideally be typed
}

const Intro: React.FC<IntroProps> = ({ content, stack }) => {
    return (
        <section id="home" className={styles.intro}>
            <div className={styles.spline}>
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className={styles.splineScene} />
            </div>
            <div className={styles.content}>
                <span className={styles.greeting}>{content.greeting}</span>
                <h1 className={styles['intro-title']}>{content.name}.</h1>
                <h2 className={styles['intro-role']}>{content.roles}</h2>
                <p className={styles['intro-subtitle']}>{content.subRoles}</p>
                <div>
                    <a href="#work" className={styles['btn-intro']}>{content.btn}</a>
                </div>
            </div>
            <div className={styles.stackLoopWrapper}>
                <LogoLoop stack={stack} />
            </div>
        </section>
    );
};

export default Intro;

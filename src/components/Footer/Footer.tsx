import React from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
    content: {
        subtitle: string;
        desc: string;
        address: string;
        phone: string;
        email: string;
    };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles['footer-content']}>
                    <div className={styles['footer-info']}>
                        <h3>{content.subtitle}</h3>
                        <p>{content.desc}</p>

                        <ul className={styles['footer-links']}>
                            <li>
                                <span className="ion-ios-location"></span> {content.address}
                            </li>
                            <li>
                                <span className="ion-email"></span> {content.email}
                            </li>
                            <li>
                                <span className="ion-social-linkedin"></span>
                                <a href="https://linkedin.com/in/julien-chapuy/">{content.phone}</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles['footer-social']}>
                        <a href="https://linkedin.com/in/julien-chapuy/" aria-label="LinkedIn">
                            <i className="ion-social-linkedin"></i>
                        </a>
                        <a href="https://github.com/JulienChapuy" aria-label="GitHub">
                            <i className="ion-social-github"></i>
                        </a>
                    </div>
                </div>

                <div className={styles['footer-bottom']}>
                    <p>&copy; {new Date().getFullYear()} Julien Chapuy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

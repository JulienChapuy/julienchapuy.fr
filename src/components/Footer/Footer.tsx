import React from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
  content: {
    subtitle: string;
    desc: string;
    address: string;
    phone: string;
    email: string;
    rights: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer-content']}>
          <div className={styles['footer-info']}>
            <h3 id="footer-subtitle">{content.subtitle}</h3>
            <p id="footer-desc">{content.desc}</p>

            <ul className={styles['footer-links']}>
              <li>
                <span className="ion-ios-location"></span>{' '}
                <span id="footer-address">{content.address}</span>
              </li>
              <li>
                <span className="ion-email"></span>{' '}
                <span id="footer-email">{content.email}</span>
              </li>
              <li>
                <span className="ion-social-linkedin"></span>
                <a href="https://linkedin.com/in/julien-chapuy/">
                  <span id="footer-phone">{content.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['footer-social']}>
            <a
              href="https://linkedin.com/in/julien-chapuy/"
              aria-label="LinkedIn"
            >
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/JulienChapuy" aria-label="GitHub">
              <i className="ion-social-github"></i>
            </a>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>
            &copy; {new Date().getFullYear()} Julien Chapuy. {content.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

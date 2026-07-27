import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.scss';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      aria-label="Retour en haut"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`${styles['back-to-top']} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;

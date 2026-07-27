import React from 'react';
import styles from './Navbar.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ContactModal from '../Contact/ContactModal';
import type { ContactContent } from '../../types/site';

interface NavbarProps {
  initialLang: 'fr' | 'en';
  initialPath: string;
  allLabels: {
    fr: {
      brand: string;
      home: string;
      about: string;
      blog: string;
      resume: string;
      contact: string;
    };
    en: {
      brand: string;
      home: string;
      about: string;
      blog: string;
      resume: string;
      contact: string;
    };
  };
  allContact: Record<'fr' | 'en', ContactContent>;
}

const Navbar: React.FC<NavbarProps> = ({
  initialLang,
  initialPath,
  allLabels,
  allContact,
}) => {
  const [currentPath, setCurrentPath] = React.useState(initialPath);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const getLangFromPath = (path: string): 'fr' | 'en' => {
    return /^\/en(?:\/|$)/.test(path) ? 'en' : 'fr';
  };

  const [lang, setLang] = React.useState<'fr' | 'en'>(
    initialLang || getLangFromPath(initialPath)
  );

  React.useEffect(() => {
    const updatePath = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      setLang(getLangFromPath(path));
      setIsMobileMenuOpen(false);
    };

    updatePath();

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('astro:after-navigation', updatePath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('astro:after-navigation', updatePath);
    };
  }, []);

  const labels = allLabels[lang];
  const contactContent = allContact[lang];

  const isActive = (path: string) => {
    const normalize = (p: string) => p.replace(/\/$/, '') || '/';
    const current = normalize(currentPath);
    const target = normalize(path);
    if (target === '/') return current === '/' || current === '/en';
    return target !== '#' && current === target;
  };

  const basePath = lang === 'fr' ? '' : '/en';

  const homeLink = lang === 'fr' ? '/' : '/en';
  const aboutLink = `${basePath}/about`;
  const blogLink = `${basePath}/blog`;
  const resumeLink = `${basePath}/resume`;

  const toggleLangLink =
    lang === 'en'
      ? currentPath.replace(/^\/en(?=\/|$)/, '') || '/'
      : `/en${currentPath === '/' ? '' : currentPath}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        id="mainNav"
      >
        <div className={styles['nav-container']}>
          <div className={styles['nav-left']}>
            <a className={styles.logo} href={homeLink} aria-label="Accueil">
              <svg
                width="28"
                height="28"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M30 13 H83 V56"
                  stroke="var(--primary)"
                  strokeWidth="7"
                  strokeLinejoin="miter"
                />
                <path
                  d="M66 83 H13 V40"
                  stroke="var(--accent)"
                  strokeWidth="7"
                  strokeLinejoin="miter"
                />
                <path
                  d="M68 36 V30 H50 V66 H68 V60"
                  stroke="var(--text)"
                  strokeWidth="7"
                  strokeLinejoin="miter"
                />
                <path
                  d="M40 30 V56 H28 V48"
                  stroke="var(--text)"
                  strokeWidth="7"
                  strokeLinejoin="miter"
                />
              </svg>
            </a>
          </div>

          <div className={styles['nav-center']}>
            <ul className={styles['nav-links']}>
              <li>
                <a
                  className={`${isActive('/') ? styles.active : ''}`}
                  href={homeLink}
                >
                  {labels.home}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive(aboutLink) ? styles.active : ''}`}
                  href={aboutLink}
                >
                  {labels.about}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive(blogLink) ? styles.active : ''}`}
                  href={blogLink}
                >
                  {labels.blog}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive(resumeLink) ? styles.active : ''}`}
                  href={resumeLink}
                >
                  {labels.resume}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['nav-right']}>
            <button
              className={styles['btn-contact']}
              onClick={() => setIsModalOpen(true)}
            >
              {labels.contact}
            </button>
            <a
              className={styles['lang-toggle']}
              href={toggleLangLink}
              onClick={() =>
                localStorage.setItem('lang-pref', lang === 'fr' ? 'en' : 'fr')
              }
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </a>
            <ThemeToggle />
            <button
              className={styles['mobile-toggle']}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <i
                className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`${styles['mobile-menu-overlay']} ${isMobileMenuOpen ? styles.open : ''}`}
      >
        <div className={styles['mobile-menu-content']}>
          <ul className={styles['mobile-nav-links']}>
            <li>
              <a
                className={`${isActive('/') ? styles.active : ''}`}
                href={homeLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.home}
              </a>
            </li>
            <li>
              <a
                className={`${isActive(aboutLink) ? styles.active : ''}`}
                href={aboutLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.about}
              </a>
            </li>
            <li>
              <a
                className={`${isActive(blogLink) ? styles.active : ''}`}
                href={blogLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.blog}
              </a>
            </li>
            <li>
              <a
                className={`${isActive(resumeLink) ? styles.active : ''}`}
                href={resumeLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.resume}
              </a>
            </li>
            <li>
              <button
                className={styles['mobile-contact-btn']}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                {labels.contact}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={contactContent}
      />
    </>
  );
};

export default Navbar;

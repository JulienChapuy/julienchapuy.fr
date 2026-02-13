import React from 'react';
import styles from './Navbar.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ContactModal from '../Contact/ContactModal';

interface NavbarProps {
  initialLang: 'fr' | 'en';
  initialPath: string;
  allLabels: {
    fr: {
      brand: string;
      home: string;
      about: string;
      services: string;
      work: string;
      blog: string;
      resume: string;
      contact: string;
    };
    en: {
      brand: string;
      home: string;
      about: string;
      services: string;
      work: string;
      blog: string;
      resume: string;
      contact: string;
    };
  };
  allContact: {
    fr: any;
    en: any;
  };
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

  // Derived language from path
  const getLangFromPath = (path: string): 'fr' | 'en' => {
    return path.startsWith('/en') ? 'en' : 'fr';
  };

  const [lang, setLang] = React.useState<'fr' | 'en'>(
    getLangFromPath(initialPath)
  );

  React.useEffect(() => {
    const updatePath = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      setLang(getLangFromPath(path));
    };

    // Initial sync in case initialPath from props was slightly different or stale
    updatePath();

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Astro View Transitions event
    document.addEventListener('astro:after-navigation', updatePath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('astro:after-navigation', updatePath);
    };
  }, []);

  const labels = allLabels[lang];
  const contactContent = allContact[lang];

  // Helper to determine active state
  const isActive = (path: string) => {
    if (
      path === '/' &&
      (currentPath === '/' || currentPath === '/en' || currentPath === '/en/')
    )
      return true;
    if (path !== '/' && path !== '#' && currentPath.includes(path)) return true;
    return false;
  };

  const basePath = lang === 'fr' ? '' : '/en';

  // Navigation Links
  const homeLink = lang === 'fr' ? '/' : '/en';
  const aboutLink = `${basePath}/about`;
  const projectsLink = `${basePath}/projects`;
  const blogLink = `${basePath}/blog`;
  const resumeLink = `${basePath}/resume`;

  // Language Toggle Logic - removed window dependency for stable SSR
  const toggleLangLink =
    lang === 'en'
      ? currentPath.replace('/en', '') || '/'
      : `/en${currentPath === '/' ? '' : currentPath}`;

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        id="mainNav"
      >
        <div className={styles['nav-container']}>
          <div className={styles['nav-left']}>
            <a className={styles.logo} href={homeLink}>
              <img src="/favicon.svg" alt="Logo" width="24" height="24" />
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
                  className={`${isActive('about') ? styles.active : ''}`}
                  href={aboutLink}
                >
                  {labels.about}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive('projects') ? styles.active : ''}`}
                  href={projectsLink}
                >
                  {labels.work}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive('blog') ? styles.active : ''}`}
                  href={blogLink}
                >
                  {labels.blog}
                </a>
              </li>
              <li>
                <a
                  className={`${isActive('resume') ? styles.active : ''}`}
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
            <a className={styles['lang-toggle']} href={toggleLangLink}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={contactContent}
      />
    </>
  );
};

export default Navbar;

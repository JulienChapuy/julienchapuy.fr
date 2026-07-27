import React from 'react';
import styles from './About.module.scss';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  'devicon-linkedin-plain': (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  'devicon-github-original': (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5.01 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.79-4.58 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
};

interface AboutProps {
  content: {
    title: string;
    profileImage: string;
    description: string;
    socials: {
      name: string;
      url: string;
      icon: string;
    }[];
    aboutMe: string[];
  };
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className={`${styles['about-mf']} sect-pt4 route`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-4">
                  <div className={styles['about-profile']}>
                    <div className={styles['about-img']}>
                      <img
                        src={content.profileImage}
                        className="img-fluid rounded-circle"
                        alt="Profile"
                        width={1600}
                        height={1067}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className={styles['about-info']}>
                      <span className={styles['name']}>Julien Chapuy</span>
                      <span className={styles['title']}>
                        {content.description}
                      </span>
                    </div>
                    <div className={styles['social-badges']}>
                      {content.socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles['social-badge']}
                          aria-label={social.name}
                        >
                          {SOCIAL_ICONS[social.icon] ?? (
                            <i className={social.icon}></i>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className={styles['about-me']}>
                    <div className={styles['title-box-2']}>
                      <h5 className={styles['title-left']}>{content.title}</h5>
                    </div>
                    {content.aboutMe.map((paragraph, index) => (
                      <p
                        key={index}
                        className={styles['bio-text']}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

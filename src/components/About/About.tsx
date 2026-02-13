import React from 'react';
import styles from './About.module.scss';

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
                        src="/assets/img/photo.jpg"
                        className="img-fluid rounded-circle"
                        alt="Profile"
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
                          <i className={social.icon}></i>
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

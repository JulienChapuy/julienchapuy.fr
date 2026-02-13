import React from 'react';
import styles from './Services.module.scss';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="service" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3
                className="title-a"
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                {content.title}
              </h3>
              <p className="subtitle-a">{content.subtitle}</p>
              <div className="line-mf" style={{ marginTop: '1rem' }}></div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '4rem' }}>
          {content.items.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className={styles['service-box']}>
                <div className={styles['service-ico']}>
                  <span className={styles['ico-circle']}>
                    <i className={item.icon}></i>
                  </span>
                </div>
                <div className={styles['service-content']}>
                  <h2 className={styles['s-title']}>{item.title}</h2>
                  <p className={styles['s-description']}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

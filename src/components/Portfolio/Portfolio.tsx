import React from 'react';
import styles from './Portfolio.module.scss';

interface PortfolioItem {
  link: string;
  img: string;
  title: string;
  category: string;
  tech: string;
}

interface PortfolioProps {
  content: {
    title: string;
    subtitle: string;
    seeMore?: string; // Add optional seeMore label
    items: PortfolioItem[];
  };
  limit?: number; // Add optional limit prop
  lang?: 'fr' | 'en'; // Add optional lang prop to redirect correctly
}

const Portfolio: React.FC<PortfolioProps> = ({
  content,
  limit,
  lang = 'fr',
}) => {
  const displayedItems = limit ? content.items.slice(0, limit) : content.items;
  const seeMoreLink = lang === 'fr' ? '/projects' : '/en/projects';
  const colClass = limit ? 'col-12' : 'col-md-4';
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
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
          {displayedItems.map((item, index) => (
            <div key={index} className={colClass}>
              <div className={styles['work-box']}>
                <a href={item.link}>
                  <div className={styles['work-img']}>
                    <img src={item.img} alt="" className="img-fluid" />
                  </div>
                  <div className={styles['work-content']}>
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className={styles['w-title']}>{item.title}</h2>
                        <div className={styles['w-more']}>
                          <span className={styles['w-ctegory']}>
                            {item.category}
                          </span>
                          <p className={styles['w-tech']}>{item.tech}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        {limit && content.items.length > limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a
              href={seeMoreLink}
              className="btn btn-primary btn-lg"
              style={{
                background: 'var(--primary)',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              {content.seeMore || 'See More'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import styles from './Blog.module.scss';

interface BlogItem {
  category: string;
  title: string;
  link: string;
  desc: string;
}

interface BlogProps {
  content: {
    title: string;
    subtitle: string;
    items: BlogItem[];
  };
  isDedicatedPage?: boolean;
  limit?: number;
  lang?: 'fr' | 'en';
}

const Blog: React.FC<BlogProps> = ({
  content,
  isDedicatedPage = false,
  limit,
  lang = 'fr',
}) => {
  const displayedItems = limit ? content.items.slice(0, limit) : content.items;
  const seeMoreLink = lang === 'fr' ? '/blog' : '/en/blog';
  const colClass = limit ? 'col-12' : 'col-md-4';
  return (
    <section
      id="blog"
      className={`blog-mf sect-pt4 route ${isDedicatedPage ? 'pt-5' : ''}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              className={`title-box text-center ${isDedicatedPage ? 'mb-5' : ''}`}
            >
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
        <div
          className="row"
          style={{ marginTop: isDedicatedPage ? '0' : '4rem' }}
        >
          {displayedItems.map((item, index) => (
            <div key={index} className={`${colClass} mb-4`}>
              <div className={styles['card-blog']}>
                <div className={styles['card-body']}>
                  <div className={styles['card-category-box']}>
                    <div className={styles['card-category']}>
                      <h6 className={styles.category}>{item.category}</h6>
                    </div>
                  </div>
                  <h3 className={styles['card-title']}>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className={styles['card-description']}>{item.desc}</p>
                </div>
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
              {lang === 'fr' ? "Voir plus d'articles" : 'See more posts'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

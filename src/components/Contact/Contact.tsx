import React from 'react';
import styles from './Contact.module.scss';

interface ContactProps {
    content: {
        send: string;
        subtitle: string;
        desc: string;
        address: string;
        phone: string;
        email: string;
        form: {
            name: string;
            email: string;
            subject: string;
            message: string;
            btn: string;
        };
    };
}

const Contact: React.FC<ContactProps> = ({ content }) => {
    return (
        <section id="contact" className="paralax-mf footer-paralax sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className={styles['box-shadow-full']}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles['title-box-2']}>
                                            <h5 className={styles['title-left']}>
                                                {content.send}
                                            </h5>
                                        </div>
                                        <div>
                                            <form action="" method="post" role="form" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" name="name" className={styles['form-control']} id="name" placeholder={content.form.name} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="email" className={styles['form-control']} name="email" id="email" placeholder={content.form.email} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" className={styles['form-control']} name="subject" id="subject" placeholder={content.form.subject} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <textarea className={styles['form-control']} name="message" rows={5} placeholder={content.form.message} required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontWeight: 600, borderRadius: '8px' }}>{content.form.btn}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles['contact-info-wrapper']}>
                                            <div className={styles['title-box-2']}>
                                                <h5 className={styles['title-left']}>
                                                    {content.subtitle}
                                                </h5>
                                            </div>
                                            <p className={styles['contact-description']}>
                                                {content.desc}
                                            </p>
                                            <ul className={styles['list-ico']}>
                                                <li><span className="ion-ios-location"></span> {content.address}</li>
                                                <li><span className="ion-email"></span> {content.email}</li>
                                                <li><span className="ion-social-linkedin"></span> <a href="https://linkedin.com/in/julien-chapuy/" style={{ color: 'inherit', fontWeight: 500 }}>{content.phone}</a></li>
                                            </ul>
                                        </div>
                                        <div className={styles.socials}>
                                            <ul>
                                                <li><a href="https://linkedin.com/in/julien-chapuy/" className={styles['social-link']}><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                                <li><a href="https://github.com/JulienChapuy" className={styles['social-link']}><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                                            </ul>
                                        </div>
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

export default Contact;

import React from 'react';
import styles from './ContactModal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: {
        send: string;
        form: {
            name: string;
            email: string;
            subject: string;
            message: string;
            btn: string;
        };
    };
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className={styles['modal-overlay']} onClick={onClose}>
                <motion.div
                    className={styles['modal-content']}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles['close-btn']} onClick={onClose}>&times;</button>

                    <div className={styles['modal-header']}>
                        <h2>{content.send}</h2>
                    </div>

                    <form className={styles['contact-form']}>
                        <div className={styles['form-group']}>
                            <label htmlFor="modal-name">{content.form.name}</label>
                            <input type="text" id="modal-name" placeholder={content.form.name} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="modal-email">{content.form.email}</label>
                            <input type="email" id="modal-email" placeholder={content.form.email} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="modal-subject">{content.form.subject}</label>
                            <input type="text" id="modal-subject" placeholder={content.form.subject} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="modal-message">{content.form.message}</label>
                            <textarea id="modal-message" rows={4} placeholder={content.form.message} required></textarea>
                        </div>
                        <button type="submit" className={styles['submit-btn']}>
                            {content.form.btn}
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ContactModal;

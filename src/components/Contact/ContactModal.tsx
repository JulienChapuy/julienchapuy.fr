import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactModal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    send: string;
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

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  const [status, setStatus] = useState('');
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    firstFieldRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = String(values.get('subject') || 'Contact depuis le site');
    const body = [
      `Nom : ${values.get('name') || ''}`,
      `Email : ${values.get('email') || ''}`,
      '',
      String(values.get('message') || ''),
    ].join('\n');
    setStatus('Ouverture de votre client email…');
    window.location.href = `mailto:${content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={styles['modal-overlay']} onClick={onClose}>
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className={styles['modal-content']}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles['close-btn']}
            onClick={onClose}
            aria-label="Fermer"
          >
            &times;
          </button>

          <div className={styles['modal-header']}>
            <h2 id="contact-modal-title">{content.send}</h2>
          </div>

          <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="modal-name">{content.form.name}</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                ref={firstFieldRef}
                placeholder={content.form.name}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="modal-email">{content.form.email}</label>
              <input
                type="email"
                id="modal-email"
                name="email"
                placeholder={content.form.email}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="modal-subject">{content.form.subject}</label>
              <input
                type="text"
                id="modal-subject"
                name="subject"
                placeholder={content.form.subject}
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="modal-message">{content.form.message}</label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                placeholder={content.form.message}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles['submit-btn']}>
              {content.form.btn}
            </button>
            <p role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;

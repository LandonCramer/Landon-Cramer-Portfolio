import { useEffect } from 'react';
import styles from './ResumeModal.module.css';

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Resume</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className={styles.pdfContainer}>
          <object
            data={resumeUrl}
            type="application/pdf"
            className={styles.pdfViewer}
          >
            <embed
              src={resumeUrl}
              type="application/pdf"
              className={styles.pdfViewer}
            />
          </object>
        </div>
        <div className={styles.modalFooter}>
          <a href={resumeUrl} download className={styles.downloadButton}>
            Download Resume
          </a>
          <button className={styles.cancelButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;


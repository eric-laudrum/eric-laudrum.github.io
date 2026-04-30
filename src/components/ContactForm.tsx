import React from 'react';
import styles from '../app/contact/contact.module.css';

const ContactForm = () => {
    return (
        <div className={styles.contactContainer}>
            <form 
                className={styles.contactForm} 
                action="https://formspree.io/f/mzdjlavk" 
                method="POST"
            >
            
                <div className={styles.formRow}>
                    <div className={styles.formCol}>
                        <label className={styles.label}>First name</label>
                        <input className={styles.formField} name="first-name" placeholder='First name' required />
                    </div>
                    <div className={styles.formCol}>
                        <label className={styles.label}>Last name</label>
                        <input className={styles.formField} name="last-name" placeholder='Last name' required />
                    </div>
                </div>

                <div className={styles.formCol}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.formField} name="email" type="email" placeholder='Email' required />
                </div>

                <div className={styles.formCol}>
                    <label className={styles.label}>Comment</label>
                    <textarea
                        className={`${styles.formField} ${styles.commentField}`}
                        name="comment"
                        placeholder='Comments'
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
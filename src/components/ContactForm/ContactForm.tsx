import React from 'react';
import styles from '../../app/contact/page.module.css';

const ContactForm = () => {
    return (
        <div className={styles.contactContainer}>
            <form 
                className={styles.contactForm} 
                action="https://formspree.io/f/mzdjlavk" 
                method="POST"
            >

                <div className={styles.formCol}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.formField} name="name" placeholder='Name' required />
                </div>

                <div className={styles.formCol}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.formField} name="email" type="email" placeholder='Email' required />
                </div>
                <div className={styles.formCol}>
                    <label className={styles.label}>Message</label>
                    <textarea
                        className={`${styles.formField} ${styles.commentField}`}
                        name="comment"
                        placeholder='Message'
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>

            </form>
        </div>
    );
};

export default ContactForm;
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <main className={styles.sectionContainer} id="contact-page">
            {/* Left Column: Heading & Links */}
            <div className={styles.leftContact}>
                <h1 className={styles.sectionTitle}>Contact</h1>

                <div className={styles.linkGroup}>
                    <a
                        href="https://www.linkedin.com/in/ericlaudrum/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeLink}
                    >
                        LinkedIn →
                    </a>

                    <a
                        href="https://github.com/eric-laudrum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeLink}
                    >
                        GitHub →
                    </a>
                </div>
            </div>

            {/* Right Column: Form Card */}
            <div className={styles.rightContact}>
                <form
                    className={styles.contactForm}
                    action="https://formspree.io/f/mzdjlavk"
                    method="POST"
                >
                    <div className={styles.formCol}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            id="name"
                            className={styles.formField}
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div className={styles.formCol}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            id="email"
                            className={styles.formField}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className={styles.formCol}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea
                            id="message"
                            className={`${styles.formField} ${styles.commentField}`}
                            name="comment"
                            placeholder="Message"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}
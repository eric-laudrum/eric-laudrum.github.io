import ContactForm from '@/components/ContactForm'

export default function ContactPage(){

     return(
        <main className="section-container">
            <h1 className="section-title">Contact</h1>


            <div style={{ marginBottom: '2rem', marginTop: '-1rem' }}>
                <a 
                    href="https://github.com/eric-laudrum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resume-link" // Reusing your existing hover styles
                    style={{ fontWeight: 'bold', color: '#2a769c', fontSize: '0.9rem' }}
                >
                    GitHub Profile →
                </a>
            </div>
            <ContactForm />

        </main>
    )
}

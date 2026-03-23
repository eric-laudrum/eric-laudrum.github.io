const ContactForm = () => {
    return (
        <div className="contact-container">

            <form 
                className="contact-form" 
                action="https://formspree.io/f/mzdjlavk" 
                method="POST"
            >
                <div className='form-col'>
                    <label>First name</label>
                    <input className='form-field' name="first-name" placeholder='First name' required />
                </div>
                <div className='form-col'>
                    <label>Last name</label>
                    <input className='form-field' name="last-name" placeholder='Last name' required />
                </div>
                <div className='form-col'>
                    <label>Email</label>
                    <input className='form-field' name="email" type="email" placeholder='Email' required />
                </div>
                <div className='form-col'>
                    <label id='comment-label'>Comment</label>
                    <textarea
                        className='form-field'
                        id='comment-field'
                        name="comment"
                        placeholder='Comments'
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;
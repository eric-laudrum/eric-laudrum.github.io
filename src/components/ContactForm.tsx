import Form from 'next/form'


const ContactForm = () => {
    return(
        <>
        <div>
            <div>
                <Form className="contact-form" action="/submit">
                    <div className='form-col'>
                        <label>First name</label>
                        <input className='form-field' name="first-name" placeholder='First name'/>
                    </div>
                    <div className='form-col'>
                        <label>Last name</label>
                        <input className='form-field' name="last-name" placeholder='Last name'/>
                    </div>
                    <div className='form-col'>
                        <label>Email</label>
                        <input className='form-field' name="email" placeholder='Email'/>
                    </div>
                    <div className='form-col'>
                        <label id='comment-label'>Comment</label>
                        <textarea
                            className='form-field'
                            id='comment-field'
                            name="comment"
                            placeholder='Comments'
                        />
                    </div>

                    <button className="submit-button">Submit</button>
                </Form>


            </div>
            
        </div>
        </>
    )
}


export default ContactForm;
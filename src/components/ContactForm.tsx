import Form from 'next/form'


const ContactForm = () => {
    return(
        <>
        <div>
            <h1>Contact Form</h1>
            <div>
                <Form className="contact-form" action="/submit">
                    <div className='form-row'>
                        <h4>First name</h4>
                        <input className='form-field' name="first-name" placeholder=' First name'/>
                    </div>
                    <div className='form-row'>
                        <h4>Last name</h4>
                        <input className='form-field' name="last-name" placeholder=' Last name'/>
                    </div>
                    <div className='form-row'>
                        <h4>Email</h4>
                        <input className='form-field' name="email" placeholder=' Email'/>
                    </div>
                    <div className='form-row'>
                        <h4>Comment</h4>
                        <input className='form-field' name="comment" placeholder=' Comments'/>
                    </div>
                    
                    <button className="submit-button">Submit</button>
                </Form>



            </div>
            
        </div>
        </>
    )
}


export default ContactForm;
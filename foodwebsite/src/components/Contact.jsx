import React from 'react'

function Contact() {
    return (
        <div className='query-box'>
            <h4>Provide your details:</h4>
            <input type="text" placeholder='Name' /><br />
            <input type="text" placeholder='Email' /><br />
            <input type="text" placeholder='Your Query' /><br />
            <button type="submit">Submit</button>

        </div>
    )
}

export default Contact

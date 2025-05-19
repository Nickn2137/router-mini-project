import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <form>
                <label>Name:</label><br />
                <input type="text" name="name" /><br />

                <label>Email:</label><br />
                <input type="email" name="email" /><br />

                <label>Message:</label><br />
                <textarea name="message" /><br />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact
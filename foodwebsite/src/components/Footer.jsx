import React from 'react'

function Footer() {

    let date = new Date();
    let currentYear = date.getFullYear();


    return (
        <footer>
            <div>
                @copyright {currentYear}
            </div>
        </footer>

    )
}

export default Footer

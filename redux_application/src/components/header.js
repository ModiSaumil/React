import React from 'react'

function Header(props) {
    console.warn("header", props.carddata)

    return (
        <div>
            <div>
                <h1>{props.carddata.length}</h1>
            </div>
        </div>
    )
}

export default Header;
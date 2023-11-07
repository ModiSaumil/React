import React from 'react'

function Home(props) {
    console.warn("home", props.carddata)

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <div>
                    <img src='./logo512.png' height="100px" width="100px" />
                </div>
                <div>
                    <span>
                        I-phone
                    </span>
                </div>
                <div>
                    <span>
                        Price 1000$
                    </span>
                </div>
                <div>
                    <span>
                        <button
                            onClick={() =>
                                props.addToCart({ price: 2000, name: "i_phone" })}
                        >
                            Add to cart
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home;
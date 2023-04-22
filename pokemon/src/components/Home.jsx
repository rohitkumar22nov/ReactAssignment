import React, { useEffect, useState } from "react";
import axios from "axios";


function Home() {

    const [card, setCard] = useState([{}])


    const data = () => {

        for (let i = 1; i < 21; i++) {

            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
                (response) => {


                    setCard([{
                        name: response.data.species.name,
                        id: response.data.id,
                        img: response.data.sprites.front_default
                    }])

                }
            )
        }
    }

    useEffect(() => {
        data()
    }, [])

    return (
        <div className="all-card">
            <div className="card">
                {card.map((item, index) => {
                    return <>
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <h3>{item.id}</h3>
                            <img src={item.img} alt="" />
                        </div>

                    </>

                })}

            </div>

        </div>
    )
}

export default Home





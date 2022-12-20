import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const InformacionSalame = () => {

    const { salame } = useParams()
    const [infoPizzaSalame, setInfoPizzaSalame] = useState({})

    useEffect(() => {
        fetch('/pizzas.json')
            .then(resp => resp.json())
            .then(data => {
                const userDataInformacion = {
                    desc: data.pizzas[2].desc,
                    img: data.pizzas[2].img,
                    ingredients: data.pizzas[2].ingredients[0],
                    ingredients1: data.pizzas[2].ingredients[1],
                    ingredients2: data.pizzas[2].ingredients[2],
                    ingredients3: data.pizzas[2].ingredients[3],
                    name: data.pizzas[2].name,
                    price: data.pizzas[2].price,
                };
                setInfoPizzaSalame(userDataInformacion)
                console.log(setInfoPizzaSalame)
            })
    }, [salame])

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '50px', marginTop: '50px', marginRight: '50px' }}>
                <img src={infoPizzaSalame.img} alt="imagen" />
            </div>
            <div className="text-start" style={{ marginLeft: '50px', marginTop: '50px', marginRight: '50px' }}>
                <h1>{infoPizzaSalame.name}</h1>
                <p>{infoPizzaSalame.desc}</p>
                <h4>Ingredientes</h4>
                <li>🍕 {infoPizzaSalame.ingredients}</li>
                <li>🍕 {infoPizzaSalame.ingredients1}</li>
                <li>🍕 {infoPizzaSalame.ingredients2}</li>
                <li>🍕 {infoPizzaSalame.ingredients3}</li>

                <h3>Precio : {infoPizzaSalame.price}</h3>
            </div>
        </div>
    )
}

export default InformacionSalame;
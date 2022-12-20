import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const InformacionEspanola = () => {

    const { id } = useParams()
    const [InfoPizzaEspanola, setInfoPizzaEspanola] = useState({})

    useEffect(() => {
        fetch('/pizzas.json')
            .then(resp => resp.json())
            .then(data => {
                const userDataInformacion = {
                    desc: data.pizzas[1].desc,
                    img: data.pizzas[1].img,
                    ingredients: data.pizzas[1].ingredients[0],
                    ingredients1: data.pizzas[1].ingredients[1],
                    ingredients2: data.pizzas[1].ingredients[2],
                    ingredients3: data.pizzas[1].ingredients[3],
                    name: data.pizzas[1].name,
                    price: data.pizzas[1].price,
                };
                setInfoPizzaEspanola(userDataInformacion)
                console.log(setInfoPizzaEspanola)
            })
    },[id])

    return (
        <div style={{display: 'flex'}}>
            <div style={{marginLeft: '50px', marginTop: '50px', marginRight:'50px' }}>
                <img src={InfoPizzaEspanola.img} alt="imagen" />
            </div>
            <div className="text-start" style={{marginLeft: '50px', marginTop: '50px', marginRight: '50px'}}>
                <h1>{InfoPizzaEspanola.name}</h1>
                <p>{InfoPizzaEspanola.desc}</p>
                <h4>Ingredientes</h4>
                <li>🍕 {InfoPizzaEspanola.ingredients}</li>
                <li>🍕 {InfoPizzaEspanola.ingredients1}</li>
                <li>🍕 {InfoPizzaEspanola.ingredients2}</li>
                <li>🍕 {InfoPizzaEspanola.ingredients3}</li>

                <h3>Precio : {InfoPizzaEspanola.price}</h3>
            </div>
        </div>
    )
}

export default InformacionEspanola;
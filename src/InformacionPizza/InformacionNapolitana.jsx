import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const InformacionNapolitana = () => {

    //const endPoint = '/pizzas.json'
    const { id } = useParams()
    const [InfoPizzaNapolitana, setInfoPizzaNapolitana] = useState({})

    useEffect(() => {
        fetch('/pizzas.json')
            .then(resp => resp.json())
            .then(data => {

                const userDataInformacion = {
                    desc: data.pizzas[0].desc,
                    img: data.pizzas[0].img,
                    ingredients: data.pizzas[0].ingredients[0],
                    ingredients1: data.pizzas[0].ingredients[1],
                    ingredients2: data.pizzas[0].ingredients[2],
                    ingredients3: data.pizzas[0].ingredients[3],
                    name: data.pizzas[0].name,
                    price: data.pizzas[0].price,
                };
                setInfoPizzaNapolitana(userDataInformacion)
                console.log(setInfoPizzaNapolitana)
            })
    }, [id])
    return (
        <div style={{display: 'flex'}}>
            <div style={{marginLeft: '50px', marginTop: '50px', marginRight:'50px' }}>
                <img src={InfoPizzaNapolitana.img} alt="imagen" />
            </div>
            <div className="text-start" style={{marginLeft: '50px', marginTop: '50px', marginRight: '50px'}}>
                <h1>{InfoPizzaNapolitana.name}</h1>
                <p>{InfoPizzaNapolitana.desc}</p>
                <h4>Ingredientes</h4>
                <li>🍕 {InfoPizzaNapolitana.ingredients}</li>
                <li>🍕 {InfoPizzaNapolitana.ingredients1}</li>
                <li>🍕 {InfoPizzaNapolitana.ingredients2}</li>
                <li>🍕 {InfoPizzaNapolitana.ingredients3}</li>

                <h3>Precio : {InfoPizzaNapolitana.price}</h3>
            </div>
        </div>
    )

}

export default InformacionNapolitana;
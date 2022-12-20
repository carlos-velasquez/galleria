import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const InformacionCuatroEstaciones = () => {

    const { cuatroEstaciones } = useParams
    const [infoPizzaCuatroEstaciones, setInfoPizzaCuatroEstaciones] = useState({})

    useEffect(() => {
        fetch('/pizzas.json')
            .then(resp => resp.json())
            .then(data => {
                const userDataInformacion = {
                    desc: data.pizzas[3].desc,
                    img: data.pizzas[3].img,
                    ingredients: data.pizzas[3].ingredients[0],
                    ingredients1: data.pizzas[3].ingredients[1],
                    ingredients2: data.pizzas[3].ingredients[2],
                    ingredients3: data.pizzas[3].ingredients[3],
                    name: data.pizzas[3].name,
                    price: data.pizzas[3].price,
                };
                setInfoPizzaCuatroEstaciones(userDataInformacion)
                console.log(setInfoPizzaCuatroEstaciones)
            })
    }, [cuatroEstaciones])

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '50px', marginTop: '50px', marginRight: '50px' }}>
                <img src={infoPizzaCuatroEstaciones.img} alt="imagen" />
            </div>
            <div className="text-start" style={{ marginLeft: '50px', marginTop: '50px', marginRight: '50px' }}>
                <h1>{infoPizzaCuatroEstaciones.name}</h1>
                <p>{infoPizzaCuatroEstaciones.desc}</p>
                <h4>Ingredientes</h4>
                <li>🍕 {infoPizzaCuatroEstaciones.ingredients}</li>
                <li>🍕 {infoPizzaCuatroEstaciones.ingredients1}</li>
                <li>🍕 {infoPizzaCuatroEstaciones.ingredients2}</li>
                <li>🍕 {infoPizzaCuatroEstaciones.ingredients3}</li>

                <h3>Precio : {infoPizzaCuatroEstaciones.price}</h3>
            </div>
        </div>
    )
}

export default InformacionCuatroEstaciones;
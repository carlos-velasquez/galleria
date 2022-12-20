import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MyContext from "../My_context";
import { useContext } from "react";
import ContadorMas from "./contadorMas";

const Carrito = () => {
    
    const [AnadirCarrito, setAñadirCarrito] = useState({})

    useEffect(() => {
        fetch('/pizzas.json')
            .then(resp => resp.json())
            .then(data => {
                const userDataCarrito = {
                    img: data.pizzas[0].img,
                    name: data.pizzas[0].name,
                    price: data.pizzas[0].price,

                };
                setAñadirCarrito(userDataCarrito)
                console.log(userDataCarrito)
            })
    }, [])
    return (
        <div className="text-start" >
            <h3 style={{ marginLeft: '200px' }}>Detalles</h3>
            <div className="text-start" style={{ display: 'flex', gap: '10px' }}>
                <img src={AnadirCarrito.img} style={{ height: '50px', width: '100px', marginLeft: '200px' }} alt="imagen" />
                <h5 className="text-center" style={{ marginTop: '10px' }}>{AnadirCarrito.name}</h5>

            </div>
        </div>
    )
}

export default Carrito;
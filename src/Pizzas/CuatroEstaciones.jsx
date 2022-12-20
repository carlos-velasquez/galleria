import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";



const PizzaCuatroEstaciones = () => {

    const [infoCuatroEstaciones, setInfoCuatroEstaciones] = useState([])
    const [infoVerMas, setInfoVerMas] = useState('')

    const navigate = useNavigate()
    const irAPizza = () => {
        navigate(`/Ver Mas${infoVerMas}`)
    }
    useEffect(() => {
        fetch('/pizzas.json')
            .then(response => response.json())
            .then((data) => {
                console.log(data);

                const userDataVerMas = {
                    desc: data.pizzas[0].desc,


                }
                const userData = {
                    desc: data.pizzas[3].desc,
                    img: data.pizzas[3].img,
                    ingredients: data.pizzas[3].ingredients[0],
                    ingredients1: data.pizzas[3].ingredients[1],
                    ingredients2: data.pizzas[3].ingredients[2],
                    ingredients3: data.pizzas[3].ingredients[3],
                    name: data.pizzas[3].name,
                    price: data.pizzas[3].price,
                };

                setInfoCuatroEstaciones(userData);
                setInfoVerMas(userDataVerMas);
            });
    }, []);
    return (
        <>
            <Container className="galeria grid-columns-4 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={infoCuatroEstaciones.img} />
                    <Card.Body>
                        <Card.Title> <p>{infoCuatroEstaciones.name} </p></Card.Title>
                        <Card.Text className="text-start">
                            <h5>Ingredientes</h5>
                            <li> 🍕 {infoCuatroEstaciones.ingredients}</li>
                            <li> 🍕 {infoCuatroEstaciones.ingredients1}</li>
                            <li> 🍕 {infoCuatroEstaciones.ingredients2}</li>
                            <li> 🍕 {infoCuatroEstaciones.ingredients3}</li>

                        </Card.Text>
                        <Card.Text>
                            <h3> ${infoCuatroEstaciones.price} </h3>
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="Ver CuatroEstaciones">
                                <Button variant="primary" onClick={irAPizza}>Ver Mas 👀</Button>
                            </Link>
                            <Link to="Añadir CuatroEstaciones">
                                <Button variant="primary">Añadir 🛒</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default PizzaCuatroEstaciones;
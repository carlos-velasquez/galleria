import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const PizzaEspanola = () => {

    const [infoEspanola, setInfoEspanola] = useState([])
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
                    desc: data.pizzas[1].desc,
                    img: data.pizzas[1].img,
                    ingredients: data.pizzas[1].ingredients[0],
                    ingredients1: data.pizzas[1].ingredients[1],
                    ingredients2: data.pizzas[1].ingredients[2],
                    ingredients3: data.pizzas[1].ingredients[3],
                    name: data.pizzas[1].name,
                    price: data.pizzas[1].price,
                };

                setInfoEspanola(userData);
                setInfoVerMas(userDataVerMas);
            });
    }, []);
    return (
        <>
            <Container className="galeria grid-columns-4 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={infoEspanola.img} />
                    <Card.Body>
                        <Card.Title> <p>{infoEspanola.name} </p></Card.Title>
                        <Card.Text className="text-start">
                            <h5>Ingredientes</h5>
                            <li> 🍕 {infoEspanola.ingredients}</li>
                            <li> 🍕 {infoEspanola.ingredients1}</li>
                            <li> 🍕 {infoEspanola.ingredients2}</li>
                            <li> 🍕 {infoEspanola.ingredients3}</li>

                        </Card.Text>
                        <Card.Text>
                            <h3> ${infoEspanola.price} </h3>
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="Ver Espanola">
                                <Button variant="primary" onClick={irAPizza}>Ver Mas 👀</Button>
                            </Link>
                            <Link to="Añadir Espanola">
                                <Button variant="primary">Añadir 🛒</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default PizzaEspanola;
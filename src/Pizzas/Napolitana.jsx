import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";



const PizzaNapolitana = () => {

    const [infoNapolitana, setInfoNapolitana] = useState([])
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
                    desc: data.pizzas[0].desc,
                    img: data.pizzas[0].img,
                    ingredients: data.pizzas[0].ingredients[0],
                    ingredients1: data.pizzas[0].ingredients[1],
                    ingredients2: data.pizzas[0].ingredients[2],
                    ingredients3: data.pizzas[0].ingredients[3],
                    name: data.pizzas[0].name,
                    price: data.pizzas[0].price,
                };

                setInfoNapolitana(userData);
                setInfoVerMas(userDataVerMas);
            });
    }, []);
    return (
        <>
            <Container className="galeria grid-columns-4 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={infoNapolitana.img} alt="foto" />
                    <Card.Body>
                        <Card.Title> <p>{infoNapolitana.name} </p></Card.Title>
                        <Card.Text className="text-start ">
                            <h5>Ingredientes</h5>
                            <li> 🍕 {infoNapolitana.ingredients}</li>
                            <li> 🍕 {infoNapolitana.ingredients1}</li>
                            <li> 🍕 {infoNapolitana.ingredients2}</li>
                            <li> 🍕 {infoNapolitana.ingredients3}</li>

                        </Card.Text>
                        <Card.Text>
                            <h3> ${infoNapolitana.price} </h3>
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="Ver Mas">
                                <Button variant="primary" onClick={irAPizza}>Ver Mas 👀</Button>
                            </Link>
                            <Link to="Añadir">
                                <Button variant="primary">Añadir 🛒</Button>
                            </Link>

                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default PizzaNapolitana;
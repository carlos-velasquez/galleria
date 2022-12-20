import React from "react";
/*import { useState } from "react";
import { useEffect } from "react";*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaNapolitana from "../Pizzas/Napolitana";
import PizzaEspanola from "../Pizzas/Espanola";
import PizzaSalame from "../Pizzas/Salame";
import PizzaCuatroEstaciones from "../Pizzas/CuatroEstaciones";



const Navigation = () => {

    /*const [, setInfo] = useState([])

    useEffect(() => {
        fetch('/pizzas.json')
            .then(response => response.json())
            .then((data) => {
                console.log(data);

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

                setInfo(userData);
            });
    }, []);*/

    /*const foto = () => {
        fetch('/pizzas.json')
            .then(response => response.json())
            .then(data => {
                setInfo(data.pizzas.map(info => info.desc))

                //setInfoPiza(data)
                //console.log(`${[0].name}`)
                //data.forEacch(pizza => console.log(pizza))
                /*data.forEach(function (x) { Card += `
                <li>${x.name}</li>;
                ` })*/
    /*data.forEach(function(x, index) {
        console.log(x.name)
    })*/
    /*setInfoPiza(data.map(function (x) {
        return x

    }))*/
    /*setInfoPiza(data.map((infoPizza) =>
    <li>{infoPizza}</li>
    ))*/

    /*});

}

/*useEffect(() => {
foto()
}, [])*/


    return (
        <div>

           
                <div style={{ backgroundImage: `url("https://i.blogs.es/fff4ca/pizzas/1366_2000.jpg")`, height: '250px', maxWidth: '100%' }}>
                    <h1 style={{ color: 'white' }}>¡ Pizzeria Mama Mia!</h1>
                    <h4 style={{ color: 'white' }}>¡ Tenemos las Mejores Pizzas!</h4>
                </div>
            

            <Container>
                <Row>
                    <Col><PizzaNapolitana /></Col>
                    <Col><PizzaEspanola /></Col>
                    <Col><PizzaSalame /></Col>
                    <Col><PizzaCuatroEstaciones /></Col>
                </Row>
            </Container>

        </div>
    )
}
export default Navigation;
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const Navegador = () => {

    return (
        <>
            
                <Navbar expand="lg" variant="light" bg="primary">
                    <Container>
                        <Link to="/" className="text-black  text-decoration-none text-start">
                            🍕 Pizzeria Mama Mia!
                        </Link>
                        <Link to="carrito" className="text-black ms-3 text-decoration-none">
                            🛒 $
                        </Link>

                    </Container>
                </Navbar>

          
        </>
    )

};
export default Navegador;



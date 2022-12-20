import Navegador from './components/Navbar';
import Navigation from './components/Pizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PizzaNapolitana from './Pizzas/Napolitana';
import InformacionNapolitana from './InformacionPizza/InformacionNapolitana';
import PizzaEspanola from './Pizzas/Espanola';
import InformacionEspanola from './InformacionPizza/InformacionEspanola';
import PizzaSalame from './Pizzas/Salame';
import InformacionSalame from './InformacionPizza/InformacionSalame';
import PizzaCuatroEstaciones from './Pizzas/CuatroEstaciones';
import InformacionCuatroEstaciones from './InformacionPizza/InformacionCuatroEstaciones';
import Carrito from './components/Carrito';
import MyContext from './My_context';
import { useState } from 'react';


function App() {

  const [data, setData] = useState(0)
  const sharedState = { data, setData }

  return (
    <div className="App">
      <MyContext.Provider value={ sharedState } >
        <BrowserRouter>
          <Navegador />
          <Routes>
            <Route path='/' element={<Navigation />} />

            <Route path='/Ver Mas' element={<PizzaNapolitana />} />
            <Route path='/Ver Mas/:id' element={<InformacionNapolitana />} />
            <Route path='/Añadir' element={<Carrito />} />
            <Route path='/Ver Espanola' element={<PizzaEspanola />} />
            <Route path='/Ver Espanola/:id' element={<InformacionEspanola />} />
            <Route path='/Añadir' element={<Carrito />} />
            <Route path='/Ver Salame' element={<PizzaSalame />} />
            <Route path='/Ver Salame/:Salame' element={<InformacionSalame />} />
            <Route path='/Añadir' element={<Carrito />} />
            <Route path='/Ver CuatroEstaciones' element={<PizzaCuatroEstaciones />} />
            <Route path='/Ver CuatroEstaciones/:CuatroEstaciones' element={<InformacionCuatroEstaciones />} />
            <Route path='/Añadir' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div >
  );
}

export default App;

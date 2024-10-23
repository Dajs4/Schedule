import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Programar from './paginas/Programar';
import Agregar from './paginas/Agregar';
import Informes from './paginas/Informes';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Inicio' element={<Home />}></Route>
        <Route path='/Horarios' element={<Programar />}></Route>
        <Route path='/Agregar' element={<Agregar />}></Route>
        <Route path='/Informes' element={<Informes />}></Route>
      </Routes>
          
    </BrowserRouter>
  );
}

export default App;

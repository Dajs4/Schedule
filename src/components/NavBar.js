import '../App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon ,PlusCircledIcon, CalendarIcon, BarChartIcon } from "@radix-ui/react-icons"
import Home from './Home';
import Programar from './Programar';
import Buscar from './Buscar';
import Agregar from './Agregar';
import Informes from './Informes';

export default function NavBar(){
    return (
        <BrowserRouter>
    
          <header>
            <div className='contNavBar'>

                <Link to='/'>
                    <HomeIcon className='icono'/>
                </Link>

                <Link to='/Horarios'>
                    <CalendarIcon className='icono'/>
                </Link>

                <Link to='/Buscar'>
                <MagnifyingGlassIcon className='icono'/>
                </Link>

                <Link to='/Agregar'>
                <PlusCircledIcon className='icono'/>
                </Link>

                <Link to='/Informes'>
                <BarChartIcon className='icono'/>
                </Link>
            </div>
            
          </header>
    
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Horarios' element={<Programar />}></Route>
            <Route path='/Buscar' element={<Buscar />}></Route>
            <Route path='/Agregar' element={<Agregar />}></Route>
            <Route path='/Informes' element={<Informes />}></Route>
          </Routes>
          
        </BrowserRouter>
    )  
}
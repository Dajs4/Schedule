import '../App.css';
import { Link } from 'react-router-dom';
import { HomeIcon,PlusCircledIcon, CalendarIcon, BarChartIcon } from "@radix-ui/react-icons";
import '../stylesheet/NavBar.css';


export default function NavBar(){
    return (
          <header>
            <div className='contNavBar'>

                <Link to='/Inicio'>
                    <HomeIcon className='icono' />
                </Link>

                <Link to='/Horarios'>
                    <CalendarIcon className='icono' />
                </Link>

                <Link to='/Agregar'>
                    <PlusCircledIcon className='icono' />
                </Link>

                <Link to='/Informes'>
                    <BarChartIcon className='icono' />
                </Link>
            </div>
            
          </header>
    )  
}
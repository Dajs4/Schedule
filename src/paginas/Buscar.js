import SearchBar from "../componentes/SearchBar";

function Buscar() {
    return (
      <section className='contenido'>
          <section className="contForm">
            <div className="filterBuscar">
              <SearchBar tamaño={"Small"} />
            </div>
          </section>
      </section>
    )
  }
  
  export default Buscar;
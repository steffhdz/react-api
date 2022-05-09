import { Crear } from "./components/Crear";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { useState } from "react";


function App() {
    const [listState, setListState] = useState([]);
return (
    <div class="layout">
    {/*Cabecera*/}
    <header class="header">
        <div class="logo">
            <div class="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación*/}
    <nav class="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/*Contenido principal*/}
    <section id="content" className="content">

        {/*aqui van las peliculas*/}
        <Listado listState ={listState}  setListState = {setListState} / >

    </section>

    {/*Barra lateral*/}
    <aside class="lateral">
        <Buscador listState ={listState}  setListState = {setListState}/>
        
        <Crear setListState={setListState} />

    </aside>

    {/*Pie de página*/}
    <footer class="footer">
        &copy; Steff Hernandez- aplicaciones web
    </footer>

</div>


  );
}

export default App;

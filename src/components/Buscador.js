import React, { useState } from "react";


export const Buscador = ({ listState, setListState  }) =>{
    const [search, setSearchState] = useState('');
    const searchMov = (e) => {
        //crear estado
        setSearchState(e.target.value);

        //filtrarlo 
        let foundMov = listState.filter(mov => {
            return mov.title.toLowerCase().includes(search.toLowerCase)
        });

        //comprobar el resutlado 
        if(search.length <=1 ){
            foundMov= JSON.parse(localStorage.getItem("movs"))
        } 


        //actualizar con filtro 
        setListState (foundMov)
    }
    return(
        <div class="search">
        <h3 class="title">Buscador: {search}</h3>
        <form>
            <input type="text" 
            id="search_field"
            name="search"
            autoComplete="off" 
            value={search}
            onChange = {searchMov}
            />
            <button id="search">Buscar</button>
        </form>
    </div>

    )
}
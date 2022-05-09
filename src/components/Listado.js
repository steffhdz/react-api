import React, {useEffect, useState} from "react";
import { Editar } from "./Editar";

export const Listado = ({listState, setListState}) =>{

    //const [listState, setListState] = useState([]);

    const[edit, setEdit] = useState(0);

    useEffect(() =>{
        console.log("componentes del listado de pelicuals cargando!!")
        getMovies();
    }, []);

    const getMovies = () =>{
        let movies = JSON.parse(localStorage.getItem("movs"));

        setListState(movies);

        return movies;
    }

    const deleteMovie = (id) =>{
        //conseguir esas pelicuals para que elimine del array
        let movsStored =getMovies();

        //filtrar esas peliculas para que elimine de array
        let new_array_movies = movsStored.filter(mov => mov.id!== parseInt(id));
        
        //actualizar estado del listado
        setListState(new_array_movies);

        //actualizar los datos en el local storage
        localStorage.setItem('movs', JSON.stringify(new_array_movies))
    }

    return(
        <>
        {listState !=null ?
            listState.map(mov =>{
            return(
                <article key={mov.id} className="peli-item">
            <h3 className="title">{mov.title}</h3>
            <p className="description">{mov.description}</p>

            <button className="edit" onClick={ () => {
                setEdit(mov.id)
            }}>Editar</button>

            <button className="delete" onClick={ () => deleteMovie(mov.id)}>Borrar</button>
                {/*aparece formulario de editar*/}
                {edit === mov.id &&(

                    <Editar mov={mov}
                        getMoviest = {getMovies}
                        setEdit = {setEdit}
                        setListState = {setListState}
                    />
                )}
                </article>
            );
        })
        : <h2> No hay peliculas </h2>
    }

        </>
    )
}
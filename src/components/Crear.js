import React, {useState} from "react";
import { SaveStorage } from "../helpers/SaveStorage";

export const Crear = ({setListState}) =>{
    const titleComp = "Añadir Pelicula";
    const [ movState, setMovState ] = useState({
        title: '',
        description: ''
    });

    const { title, description} = movState

    const getDataForm = e =>{
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target
        let title = target.title.value;
        let description = target.description.value;
        alert(title + "- " +description);
        //crear objeto de la pelicula
        let mov = {
            id: new Date().getTime(),
            title,
            description
        };
        //guardar estado
        setMovState(mov);
        

        //actualizar el listado principal
        setListState(items =>{
            return[...items,mov ];
        });
        
        //guardar en el almacenamiento local
        //localStorage.setItem('movs', JSON.stringify([mov]));
        SaveStorage("movs", mov);

        //console.log(movState);
        
    }


    return(
        <div class="add">
            <h3 class="title">{titleComp}</h3>
        <strong>
            {(title && description)&& "Has creado la pelicula: "+movState.title};
        </strong>

            <form onSubmit={getDataForm}>
                <input type="text"
                id="title"
                name="title"
                placeholder="Titulo" />
                <textarea id="description"
                name="description"
                placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>

    )
}

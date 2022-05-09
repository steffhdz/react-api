import React from "react";

export const Editar = ({mov, getMovies, setEdit, setListState}) =>{
    const title_component = "editar peliula"

    const saveEdition = (e, id)=>{
        e.preventDefault();
        //conseguir el target
        let target = e.target;
        //buscar el objeto 
        const movies_stored = getMovies();
        const index = movies_stored.findIndex(mov => mov.id === id);
        //crear objeto con ese indice 
        let mov_update = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        //actualizar el elemento 
        movies_stored[index] = mov_update;
        //guardar el nuevo array
        localStorage.setItem("movs",  JSON.stringify(movies_stored));
        //actualizar estados
        setListState = {movies_stored};
        setEdit=(0);

    }
        return(
        <div className="edit_form">
            <h3 className="title">{}</h3>
            <form onSubmit={ e => saveEdition(e,mov.id)}>
                <input type="text"
                        name="title"
                        className="title_edit"
                        defaultValue={mov.title}/>
                <textarea
                    name="description"
                    defaultValue={mov.description}
                    className="description_edit"/>
                <input type="submit" className="edit" value="Actualizar" />
            </form>
        </div>
    )
}
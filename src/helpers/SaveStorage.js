export const SaveStorage = (key, item) => {
    //conseguir los elementos que ya tenemos en el local storage
    let items = JSON.parse(localStorage.getItem(key));
    
    console.log(items);
    //comprobar si es un array
    if(Array.isArray(items)){
        //guardar un eleemnto nuevo
        items.push(item);

    }else{
        //crear el array con la peli nueva
        items = [item];
    }
    
    //guardar en el local storge
    localStorage.setItem(key, JSON.stringify(items));
    //devolver objeto
    return item;

    
}
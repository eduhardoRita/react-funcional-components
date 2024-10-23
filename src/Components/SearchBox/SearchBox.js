import React from "react"
import "./styles.css"

function SearchBox ( { onSearchChange } ) {
    const handleInputChange = ( event ) => {
        onSearchChange(event.target.value);
    };

    return (
        <form>
            <label>Buscar Equipo </label>
            <input type="text" placeholder="Escribir nombre del equipo" onChange={handleInputChange}/>
        </form>
        
    );
}

export default SearchBox;
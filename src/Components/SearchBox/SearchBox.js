import React from "react"

function SearchBox ( { onSearchChange } ) {
    const handleInputChange = ( event ) => {
        onSearchChange(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Buscar equipo"
            onChange={handleInputChange}
        />
    );
}

export default SearchBox;
import { useState } from "react"
import FilteredList from "./FilteredList"
import SearchBox from "./SearchBox"
import Equipos from "./Equipos"

function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [equiposData, setEquiposData] = useState(Equipos);

    const handleSearchChange = (newQuery) => {
        setSearchQuery(newQuery);
        const filteredEquipos = Equipos.filter((equipo) => {
            return equipo.name.toLowerCase().includes(newQuery.toLowerCase()) 
        });
        setEquiposData(filteredEquipos)
    }

    return (
        <>
            <h1>Inicio de actividad</h1>
            <p>Listas de equipos</p>
            <SearchBox onSearchChange={handleSearchChange} />
            <FilteredList equipos={equiposData} searchQuery={searchQuery}/>
        </>
    )
}

export default App
import { useState } from "react"
import FilteredList from "../Filter/FilteredList"
import SearchBox from "../SearchBox/SearchBox"
import Equipos from "../Equipos"
import Logo from "../../assets/main-logo.png"
import "./styles.css"

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
            <article className="main-container">
                <section className="container-title">
                    <img src={Logo} alt="logo-principal"/>
                        <h1 className="title">Liga de Campeones de la UEFA <br /> 2024-25</h1>
                    <SearchBox onSearchChange={handleSearchChange} />
                </section>
                <section className="container-text">
                    <p>La Liga de Campeones de la UEFA 2024-25 es la 70.º edición de la competición y la 33.ª temporada desde que se renombró a Liga de Campeones de la UEFA. Asimismo, es la 1.ª edición que contempla un nuevo formato de competición.1​
                        <br /><br />
                        La final se jugará en el Allianz Arena de Múnich, Alemania. El equipo ganador de la Liga de Campeones 2024-25 se clasificará automáticamente para la fase de liga de la Liga de Campeones de la UEFA 2025-26 y jugará la Supercopa de la UEFA 2025 contra el campeón de la Liga Europa de la UEFA 2024-25, y además se clasificará directamente para la final de la Copa Intercontinental de la FIFA 2025 y para la Copa Mundial de Clubes de la FIFA 2029.
                        <br /><br />
                        La presente edición estrena formato: tras una ronda preliminar y una fase clasificatoria similar a las de las últimas temporadas, tiene lugar una fase de liga de 8 jornadas con 36 equipos en lugar de la tradicional fase de grupos de 6 jornadas con 32 equipos; los enfrentamientos de esta fase no se dilucidan por el sistema de todos contra todos, sino que cada club se enfrentará a ocho rivales diferentes;3​ cada club juega 4 partidos en casa y 4 fuera. Los 8 primeros se clasifican directamente para octavos de final, los 16 siguientes (puestos 9.º a 24.º) disputan una eliminatoria a doble partido para ocupar los 8 puestos restantes de la eliminatoria de octavos de final y los 12 últimos quedan eliminados. A partir de octavos de final se desarrolla la competición como en las ediciones anteriores.
                    </p>
                </section>
                <section className="container-list">
                    <h2 className="subtitle">Listas de equipos</h2>
                    <FilteredList equipos={equiposData} searchQuery={searchQuery}/>

                </section>
            </article>            
        </>
    )
}

export default App
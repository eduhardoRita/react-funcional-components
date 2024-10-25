import React from "react";

function FilteredList({equipos, searchQuery}) {

    console.log(equipos);

    return (
        
        <ul>
            <h2>lol</h2>
            {equipos.map((equipo) => (
                <li key={equipo.name}>
                    <h2>{equipo.name}</h2>
                    <p>{equipo.contry}</p>
                    <p>Entrenador: {equipo.coach}</p>
                    <p>numero de jugadores: {equipo.memberNumber}</p>
                    <h3>Porteros:</h3>
                    <ul>
                        {equipo.goalkeepers.map((portero) => (
                            <li key={portero}>{portero}</li>
                        ))}
                    </ul>
                    <h3>Defensas:</h3>
                    <ul>
                        {equipo.defenses.map((defensa) => (
                            <li key={defensa}>{defensa}</li>
                        ))}
                    </ul>
                    <h3>Centrocsmpistas:</h3>
                    <ul>
                        {equipo.midfielders.map((mediocampista) => (
                            <li key={mediocampista}>{mediocampista}</li>
                        ))}
                    </ul>
                    <h3>Delanteros:</h3>
                    <ul>
                        {equipo.fronts.map((delantero) => (
                            <li key={delantero}>{delantero}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default FilteredList
import React from "react";
import "./styles.css"

function FilteredList({equipos, searchQuery}) {

    console.log(equipos);

    return (
        <section className="container-filtered-list">
            <ul className="lists-team">
                {equipos.map((equipo) => (
                    <li className="list-team" key={equipo.name}>
                        <div className="main-div">
                            <h3 className="name-team">{equipo.name}</h3>
                            <p><b>Pais:</b> {equipo.contry}</p>
                            <p><b>Entrenador:</b> {equipo.coach}</p>
                            <p><b>Numero de jugadores:</b> {equipo.memberNumber}</p>
                        </div>
                        <div className="goalkeepers-div">
                            <h4 className="subtitle-div">Porteros:</h4>
                            <ul>
                                {equipo.goalkeepers.map((portero) => (
                                    <li key={portero}>{portero}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="defenses-div">
                            <h4 className="subtitle-two-div">Defensas:</h4>
                            <ul>
                                {equipo.defenses.map((defensa) => (
                                    <li key={defensa}>{defensa}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="midfielders-div">
                            <h4 className="subtitle-three-div">Centrocsmpistas:</h4>
                            <ul>
                                {equipo.midfielders.map((mediocampista) => (
                                    <li key={mediocampista}>{mediocampista}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="fronts-div">
                            <h4 className="subtitle-four-div">Delanteros:</h4>
                            <ul>
                                {equipo.fronts.map((delantero) => (
                                    <li key={delantero}>{delantero}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>             
    )
}

export default FilteredList
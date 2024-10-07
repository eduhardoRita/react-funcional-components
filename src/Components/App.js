function App() {

    const equipos = [
        {
            name: "Arsenal",
            contry: "England",
            memberNumber: "23",
            coach: "Mikel Arteta",
            goalkeepers: ["David Raya", "Neto", "Tommy Setford", "Alexei Rojas Fedorushchenko", "Jack Porter"],
            defenses: ["William Saliba", "Ben White", "Jurriën Timber", "Oleksandr Zinchenko", "Riccardo Calafiori", "Josh Nichols", "Ayden Heaven", "Kieran Tierney", "Gabriel Magalhães", "Jakub Kiwior", "Takehiro Tomiyasu", "Maldini Kacurri", "Josh Robinson"],
            midfielders: ["Thomas Partey", "Jorginho", "Jorginho", "Myles Lewis-Skelly", "Salah-Eddine Oulad M'hand", "Martin Ødegaard", "Mikel Merino", "Declan Rice", "Ethan Nwaneri"],
            fronts: ["Bukayo Saka", "Gabriel Martinelli", "Raheem Sterling", "Ismeal Kabia", "Gabriel Jesus", "Leandro Trossard", "Nathan Butler-Oyedeji"],                                                                                  
        },
        {
            name: "Aston Villa",
            contry: "England",
            memberNumber: "35",
            coach: "Unai Emery",
            goalkeepers: ["Joe Gauci", "Emiliano Martínez", "Robin Olsen", "Oliwier Zych"],
            defenses: ["Tyrone Mings", "Diego Carlos", "Lucas Digne", "Kosta Nedeljkovic", "Lamare Bogarde", "Triston Rowe", "Thierry Katsukunya", "Matty Cash", "Ezri Konsa", "Pau Torres", "Ian Maatsen", "Kortney Hause", "Sil Swinkels"],                                 
            midfielders: ["Ross Barkley","Youri Tielemans", "Amadou Onana", "Jacob Ramsey", "Aidan Borland", "Travis Patterson", "John McGinn", "Emiliano Buendía", "Leon Bailey", "Boubacar Kamara", "Jamaldeen Jimoh", "Ben Broggio"],
            fronts: ["Jhon Durán", "Jaden Philogene", "Kadan Young", "Ollie Watkins", "Morgan Rogers", "Kobei Moore"],                                                                                  
        },
        {
            name: "Atalanta",
            contry: "Italy",
            memberNumber: "32",
            coach: "Gian Piero Gasperini",
            goalkeepers: ["Rui Patrício", "Francesco Rossi", "Marco Carnesecchi"],
            defenses: ["Rafael Tolói", "Isak Hien", "Berat Djimsiti", "Pietro Comi", "Giorgio Scalvini", "Tommaso Del Lungo", "Odilon Kossounou", "Ben Godfrey", "Sead Kolasinac", "Pietro Tornaghi", "Lorenzo Bernasconi", "Brandon Soppy"],                                 
            midfielders: ["Ibrahim Sulemana", "Mario Pasalic", "Marten de Roon", "Matteo Ruggeri", "Federico Cassa", "Lorenzo Riccio", "Dominic Vavassori", "Davide Zappacosta", "Juan Cuadrado", "Éderson", "Raoul Bellanova", "Lazar Samardzic", "Marco Palestra", "Marco Brescianini", "Alberto Manzoni"],
            fronts: ["Gianluca Scamacca", "Ademola Lookman", "Mateo Retegui", "Nicolò Zaniolo", "Charles De Ketelaere", "Vanja Vlahovic"],                                                                                  
        },
        {
            name: "Atlético de Madrid",
            contry: "Spain",
            memberNumber: "35",
            coach: "Diego Simeone",
            goalkeepers: ["Juan Musso","Antonio Gomis", "Jan Oblak", "Alejandro Iturbe"],
            defenses: ["José Giménez", "Clément Lenglet", "Axel Witsel", "Reinildo", "Ilias Kostis", "Gerónimo Spina", "César Azpilicueta", "Nahuel Molina", "Javi Galán", "Robin Le Normand", "Carlos Giménez"],                                 
            midfielders: ["Conor Gallagher", "Koke", "Thomas Lemar", "Marcos Llorente", "Javi Serrano", "Rodrigo De Paul", "Pablo Barrios", "Samuel Lino", "Rodrigo Riquelme", "Jano Monserrate"],
            fronts: ["Antoine Griezmann", "Ángel Correa", "Giuliano Simeone", "Alexander Sørloth", "Julián Alvarez"],                                                                                  
        },
        {
            name: "Barcelona",
            contry: "Spain",
            memberNumber: "38",
            coach: "Hans-Dieter Flick",
            goalkeepers: ["Wojciech Szczesny", "Iñaki Peña", "Diego Kochen", "Marc-André ter Stegen", "Ander Astralaga", "Áron Yaakobishvili"],
            defenses: ["Pau Cubarsí", "Ronald Araujo", "Andreas Christensen", "Eric García", "Gerard Martín", "Andrés Cuenca", "Alejandro Balde", "Iñigo Martínez", "Jules Koundé", "Héctor Fort", "Sergi Domínguez"],                                 
            midfielders: ["Gavi","Pablo Torre", "Marc Casadó", "Frenkie de Jong", "Guille Fernández", "Pedri", "Fermín López", "Dani Olmo", "Marc Bernal"],
            fronts: ["Ferran Torres", "Ansu Fati", "Pau Víctor", "Toni Fernández", "Robert Lewandowski", "Raphinha", "Lamine Yamal"],                                                                                  
        },
        {
            name: "Bayer Leverkusen",
            contry: "Germany",
            memberNumber: "32",
            coach: "Xabi Alonso",
            goalkeepers: ["Lukás Hrádecky", "Niklas Lomb", "Matej Kovár"],
            defenses: ["Piero Hincapié", "Edmond Tapsoba", "Álex Grimaldo", "Jeremie Frimpong", "Jonathan Tah", "Arthur", "Nordi Mukiele", "Jeanuël Belocian"],                                 
            midfielders: ["Jonas Hofmann", "Florian Wirtz", "Aleix García", "Othniël Raterink","Sadik Fofana", "Robert Andrich", "Nathan Tella", "Exequiel Palacios", "Granit Xhaka"],
            fronts: ["Martin Terrier", "Amine Adli", "Artem Stepanov", "Patrik Schick", "Victor Boniface", "Francis Onyeka"],                                                                                  
        },
        {
            name: "Benfica",
            contry: "Portugal",
            memberNumber: "34",
            coach: "Bruno Miguel Silva do Nascimento",
            goalkeepers: ["Anatolii Trubin", "André Gomes", "Samuel Soares"],
            defenses: ["Álvaro Carreras", "Alexander Bah", "Nicolás Otamendi", "Tomás Araújo", "António Silva", "Issa Kaboré", "Jan-Niklas Beste", "Adrian Bajrami"],                                 
            midfielders: ["Fredrik Aursnes", "Ángel Di María", "Florentino", "Renato Sanches", "Orkun Kökçü", "Leandro Barreiro", "João Rêgo"],
            fronts: ["Zeki Amdouni", "Vangelis Pavlidis", "Andreas Schjelderup", "Benjamín Rollheiser", "Arthur Cabral", "Kerem Aktürkoglu", "Gianluca Prestianni", "Tiago Gouveia"],                                                                                  
        },
    ]
    const listsOfTeams = equipos;
    console.log(listsOfTeams);

    return (
        <>
            <h1>Inicio de actividad</h1>
            <p>Listas de equipos</p>
        </>
    )
}

export default App
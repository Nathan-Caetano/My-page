import { useEffect, useState } from 'react';
import '../../App.css'
import './style.css'

const Disciplinas = () => {
    const [disciplinas, setDisciplinas] = useState({});

    useEffect(() => {
        fetch("/disciplinas.json")
        .then((response) => response.json())
        .then((data) => setDisciplinas(data));

}, []);

return(
    <div>
        {Object.entries(disciplinas).map(([ano, dados]) => (
        <section key={ano} className="curso container">
            <div className="section-title">
            <h1>{dados.titulo}</h1>
            <p>{dados.descricao}</p>
            </div>
            {dados.materias.map((materia, index) => (
            <article key={index}>
                <h2>{materia.nome}</h2>
                <p>{materia.descricao}</p>
            </article>
            ))}
        </section>
        ))}
    </div>
    );
};

export default Disciplinas;
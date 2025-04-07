import { useState, useEffect } from 'react';
import '../../App.css';
import './style.css'

function Sobre() {

    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalo = setInterval(() => {
          setAnoAtual(new Date().getFullYear());
        }, 1000 * 60 * 60 * 24);
    
        return () => clearInterval(intervalo);
      }, []);

      const calcularTempo = (ano) => anoAtual - ano;

return (

<section id="sobre-container" className='container'>
<div className="section-title">
  <h1>📌 Sobre Mim</h1>
</div>
<p>
  Me chamo Nathan, tenho {calcularTempo(2009)} anos. Comecei a estudar programação há {calcularTempo(2022)} anos.
  Sou apaixonado por desenvolvimento e estou sempre tentando ampliar meus conhecimentos e melhorar minhas habilidades.
  Estou cursando Análise e Desenvolvimento de Sistemas desde 2024, com previsão de conclusão para 2026.
</p>
</section>

)}

export default Sobre;
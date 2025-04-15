import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import './style.css'
import { faCss3, faHtml5, faJs, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

//const HtmlIcon = () => <FontAwesomeIcon icon={faHtml5} style={{color: "#E0E0E0"}}/>
//const CssIcon = () => <FontAwesomeIcon icon={faCss3} style={{color: "#E0E0E0"}} />
//const JsIcon = () => <FontAwesomeIcon icon={faJs} style={{color: "#E0E0E0"}}/>
//const NodeIcon = () => <FontAwesomeIcon icon={faNodeJs} style={{color: "#E0E0E0"}}/>
//const PyIcon = () => <FontAwesomeIcon icon={faPython} style={{color: "#E0E0E0"}}/>
//const DbIcon = () => <FontAwesomeIcon icon={faDatabase} style={{color: "#E0E0E0"}}/>

const selectIcon = (icon) => {
  return <FontAwesomeIcon icon={icon} style={{color: "#E0E0E0"}}/>
}
 
function Habilidades() {

return (

    <section id="habilidades-container" className='container'>
    <div class="section-title">
      <h1>🏅 Habilidades</h1>
    </div>
    <ul>
      <li>
        <i>{selectIcon(faHtml5)}</i>
        <h2>HTML</h2>
      </li>
      <li>
        <i>{selectIcon(faCss3)}</i>
        <h2>CSS</h2>
      </li>
      <li>
        <i>{selectIcon(faJs)}</i>
        <h2>JavaScript</h2>
      </li>
      <li>
        <i>{selectIcon(faNodeJs)}</i>
        <h2>Node.js</h2>
      </li>
      <li>
        <i>{selectIcon(faPython)}</i>
        <h2>Python</h2>
      </li>
      <li>
        <h2>MongoDB</h2>
      </li>
      <li>
        <h2>Git</h2>
      </li>
      <li>
        <h2>GitHub</h2>
      </li>
    </ul>
  </section>

)}

export default Habilidades;
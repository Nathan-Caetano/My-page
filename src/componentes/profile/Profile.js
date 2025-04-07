import '../../App.css';
import './style.css'

function Profile() {

return (

<section id="profile-container" className='container'>
  <div id="profile">
    <img src="https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png" alt="Foto de perfil" />
    <h2>Nathan Caetano</h2>
  </div>
  <div className="info">
    <ul>
      <li><span>Email:</span> nathancaetano71@gmail.com</li>
      <li><span>Curso:</span> Análise e Desenvolvimento de Sistemas 2° Ano</li>
      <li><span>Colégio:</span> Santa Maria Goretti</li>
      <li><span>Telefone:</span> 44 98839-3774</li>
      <li><span>GitHub: </span><a href="https://github.com/Nathan-Caetano">Meu GitHub</a></li>
    </ul>
  </div>
</section>

)}

export default Profile;
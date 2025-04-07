import { useState, useEffect } from 'react';
import Profile from './componentes/profile/Profile';
import './App.css';
import Sobre from './componentes/sobre/Sobre';
import Habilidades from './componentes/habilidades/Habilidades';
import Disciplinas from './componentes/disciplinas/Disciplinas';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';

function App() {
  
  return (
    <div className="App">
      <Header/>

      <main>
        <Profile/>

        <Sobre/>

        <Habilidades/>

        <Disciplinas/>
        
      </main>

      <Footer/>

    </div>
  );
}

export default App;
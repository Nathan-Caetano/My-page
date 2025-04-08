import { useState, useEffect } from 'react';
import './style.css'
import '../../App.css'

function Header() {
  
    const [modoEscuro, setModoEscuro] = useState(() => {
      return localStorage.getItem('modoEscuro') === 'true';
    });

    useEffect(() => {
      document.body.classList.toggle('dark-mode', modoEscuro);
      localStorage.setItem('modoEscuro', modoEscuro);
    }, [modoEscuro]);

  return (
      <header>
        <div id="header-inner-content">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="#606060" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zM473.4 121.3c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>
          <div className="title">
            <h1>Nathan Caetano</h1>
          </div>
          <div className="buttons">
            <label className="switch">
              <input type="checkbox" checked={modoEscuro} onChange={() => setModoEscuro(!modoEscuro)}/>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>
  );
}

export default Header;
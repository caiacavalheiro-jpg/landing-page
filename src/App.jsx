import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
   
     <div className="first">

        <h1>DESI</h1>

        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#redesSociais">Contato e Projetos</a>
        

      </div>


      <div class="center">

     <div class="behind">
      QUE FALTE TUDO MENOS DEUS
    </div>

    <h1 class="name">Cavalheiro</h1>

    </div>

    <div class="rule"></div>

      <p class="intro">
        Desenvolvedor que transforma ideias em código
      </p>

        <div class="social-buttons" id='redesSociais'>

          <a href="https://wa.me/5548988779779" target="_blank" class="social-btn">
            <span class="social-icon whatsapp-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.43zM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.48 6.62 2.05 12.08 2.05c2.64 0 5.12 1.03 6.98 2.89a9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
              </svg>
            </span>

            <div class="social-info">
              <strong>WhatsApp</strong>
              <small>(48) 98877-9779</small>
            </div>

            <span class="arrow">→</span>
          </a>


          <a href="https://www.instagram.com/goulart._c/" target="_blank" class="social-btn">
            <span class="social-icon instagram-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="17.5" cy="6.5" r="1"></circle>
              </svg>
            </span>

            <div class="social-info">
              <strong>Instagram</strong>
              <small>goulart._c</small>
            </div>

            <span class="arrow">→</span>
          </a>


          <a href="https://github.com/caiacavalheiro-jpg" target="_blank" class="social-btn">
            <span class="social-icon github-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.18c-3.23.7-3.91-1.56-3.91-1.56-.52-1.3-1.26-1.65-1.26-1.65-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.73 1.26 3.4.96.1-.75.41-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.11 0 4.46-2.71 5.44-5.3 5.73.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </span>

            <div class="social-info"> 
              <strong>GitHub</strong>
              <small>caiacavalheiro-jpg</small>
            </div>

            <span class="arrow">→</span>
          </a>

          <a href="https://cavalheirog-dev.vercel.app/" target="_blank" class="social-btn vercel-btn">

            <span class="social-icon vercel-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L22 20H2L12 2Z"></path>
              </svg>
            </span>

            <div class="social-info">
              <strong>Vercel</strong>
              <small>cavalheirog-dev.vercel.app</small>
            </div>

            <span class="arrow">→</span>

        </a>

      </div>

              
    </>
  )
}

export default App

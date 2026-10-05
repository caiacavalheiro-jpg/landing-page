import './App.css'
import desenvolvimento from './assets/desenvolvimento.png'
import imagem02 from './assets/imagem02.png'
import imagem03 from './assets/imagem03.png'

function App() {
  return (
    <>
     
      <div className="first">
        <h1>DESI</h1>

        <a href="#">Início</a>
        <a href="#curso">Sobre</a>
        <a href="#redesSociais">Contato e Projetos</a>
      </div>


    
      <div className="center">
        <div className="behind">
          QUE FALTE TUDO MENOS DEUS
        </div>

        <h1 className="name">Cavalheiro</h1>
      </div>

      <div className="rule"></div>

      <p className="intro">
        Desenvolvedor que transforma ideias em código
      </p>


   
      <section className="course-section" id="curso">

        <div className="section-title">
          <h2>Sobre o curso</h2>
        </div>

        <div className="course-row">
          <div className="course-visual">
            <img src={desenvolvimento} alt="Ilustração de código, site e aplicativo" />
          </div>

          <div className="course-text">
            <h3>O que é Desenvolvimento de Sistemas?</h3>

            <p>
              Desenvolvimento de Sistemas é a área responsável por criar
              programas, sites, aplicativos e sistemas que ajudam a resolver
              problemas do dia a dia.
            </p>

            <p>
              Durante o curso, a gente aprende desde a lógica para pensar
              em soluções até a criação de sistemas funcionando de verdade.
            </p>
          </div>
        </div>

        <div className="course-row reverse">
          <div className="course-visual">
            <img src={imagem02} alt="Ilustração de aprender, criar e evoluir" />
          </div>

          <div className="course-text">
            <h3>Qual o objetivo do curso?</h3>

            <p>
              O objetivo do curso é preparar o aluno para entender como
              funciona o desenvolvimento de sistemas e aprender a criar
              soluções utilizando diferentes tecnologias.
            </p>

            <p>
              Eu faço o curso Técnico em Desenvolvimento de Sistemas no
              <strong> SENAI de São José, na Fazenda do Max</strong>.
            </p>
          </div>
        </div>

        <div className="course-row">
          <div className="course-visual">
            <img src={imagem03} alt="Ilustração de um profissional de sistemas" />
          </div>

          <div className="course-text">
            <h3>O que um profissional da área faz?</h3>

            <p>
              O profissional de Desenvolvimento de Sistemas pode criar,
              testar, atualizar e dar manutenção em sistemas, sites,
              aplicativos e bancos de dados.
            </p>

            <p>
              Ele também pode trabalhar com programação, desenvolvimento
              web, APIs, banco de dados e várias outras áreas da tecnologia.
            </p>
          </div>
        </div>

      </section>



          <section className="highlight">
            <div className="highlight-content">
              <span>TECNOLOGIA</span>

              <h2>
                Aprender a programar é aprender
                <br />
                a transformar ideias em soluções.
              </h2>

              <p>
                Cada projeto é uma oportunidade para aprender alguma coisa nova.
              </p>
            </div>
          </section>


      
          <section className="learning-section">

            <div className="section-title">
          
              <h2>O que eu aprendo</h2>
            </div>

            <p className="section-description">
              Durante o curso, já tive contato com várias áreas importantes
              para começar a desenvolver sistemas.
            </p>


            <div className="learning-grid">

              <div className="learning-card">

                <h3>Lógica de programação</h3>
                <p>
                  Aprender a pensar nos problemas e criar uma sequência
                  de passos para chegar em uma solução.
                </p>
              </div>

              <div className="learning-card">
                
                <h3>Desenvolvimento web</h3>
                <p>
                  Criar páginas e sistemas que funcionam através da internet.
                </p>
              </div>

              <div className="learning-card">
           
                <h3>Frontend</h3>
                <p>
                  Trabalhar com a parte visual e com a interação que o usuário
                  tem com o sistema.
                </p>
              </div>

              <div className="learning-card">
              
                <h3>Backend</h3>
                <p>
                  Desenvolver a parte que fica por trás do sistema e que
                  controla seus dados e funcionalidades.
                </p>
              </div>

            </div>

          </section>


    
      <section className="technologies-section">

        <div className="section-title">
          
          <h2>Tecnologias</h2>
        </div>

        <p className="section-description">
          Essas são algumas das tecnologias que já aprendi ou estou
          aprendendo durante minha formação.
        </p>

        <div className="technologies-grid">

          <div className="tech-card">
            <strong>&lt;/&gt;</strong>
            <span>HTML</span>
          </div>

          <div className="tech-card">
            <strong>#</strong>
            <span>CSS</span>
          </div>

          <div className="tech-card">
            <strong>JS</strong>
            <span>JavaScript</span>
          </div>

          <div className="tech-card">
            <strong>⚛</strong>
            <span>React</span>
          </div>

          <div className="tech-card">
            <strong>JS</strong>
            <span>Node.js</span>
          </div>

          <div className="tech-card">
            <strong>GH</strong>
            <span>GitHub</span>
          </div>

        </div>

        <p className="technology-note">
          Por enquanto, essas são algumas das tecnologias que já aprendi.
          Ainda tenho muito para aprender e quero continuar evoluindo
          cada vez mais na área.
        </p>

      </section>


  
      <section className="areas-section">

        <div className="section-title">
          
          <h2>Áreas de atuação</h2>
        </div>

        <div className="areas-grid">

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Desenvolvimento Frontend</h3>
            <p>
              Criação da parte visual dos sites e sistemas,
              trabalhando com a experiência do usuário.
            </p>
          </div>

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Desenvolvimento Backend</h3>
            <p>
              Desenvolvimento da parte interna do sistema,
              regras, dados e funcionalidades.
            </p>
          </div>

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Desenvolvimento Full Stack</h3>
            <p>
              Trabalho envolvendo tanto o frontend quanto
              o backend de uma aplicação.
            </p>
          </div>

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Aplicações</h3>
            <p>
              Criação de aplicações para facilitar tarefas
              e resolver problemas.
            </p>
          </div>

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Banco de dados</h3>
            <p>
              Organização, armazenamento e gerenciamento
              das informações de um sistema.
            </p>
          </div>

          <div className="area-card">
            <div className="area-number"></div>
            <h3>Suporte e manutenção</h3>
            <p>
              Corrigir problemas, atualizar sistemas e manter
              as aplicações funcionando corretamente.
            </p>
          </div>

        </div>

      </section>


    
      <section className="projects-section">

        <div className="section-title">
          
          <h2>Exemplos de projetos</h2>
        </div>

        <p className="section-description">
          Um desenvolvedor pode criar vários tipos de sistemas.
          Alguns exemplos são:
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <span>01</span>
            <div>
              <h3>Sistema de cadastro de clientes</h3>
              <p>
                Sistema para cadastrar, consultar, alterar e excluir
                informações de clientes.
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>02</span>
            <div>
              <h3>Sistema de estoque</h3>
              <p>
                Sistema para controlar produtos, quantidades,
                entradas e saídas.
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>03</span>
            <div>
              <h3>Aplicação de agendamentos</h3>
              <p>
                Sistema para marcar horários e organizar compromissos.
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>04</span>
            <div>
              <h3>Loja virtual</h3>
              <p>
                Site onde usuários podem visualizar produtos e realizar
                compras pela internet.
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>05</span>
            <div>
              <h3>Dashboard administrativo</h3>
              <p>
                Tela com informações e gráficos para acompanhar
                os dados de uma empresa ou sistema.
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>06</span>
            <div>
              <h3>Aplicativo de tarefas</h3>
              <p>
                Aplicativo para organizar tarefas, compromissos
                e atividades do dia.
              </p>
            </div>
          </div>

        </div>

      </section>


  
      <section className="cta-section">

        <div className="cta-overlay">

          <span>SEU PRÓXIMO PASSO</span>

          <h2>
            Seu futuro na tecnologia
            <br />
            pode começar aqui.
          </h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas
            e comece a aprender como transformar ideias em tecnologia.
          </p>

          <a href="#curso" className="cta-button">
            Conheça o curso →
          </a>

        </div>

      </section>


      <div className="social-buttons" id="redesSociais">

        <a
          href="https://wa.me/5548988779779"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <span className="social-icon whatsapp-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.43zM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.48 6.62 2.05 12.08 2.05c2.64 0 5.12 1.03 6.98 2.89a9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
            </svg>
          </span>

          <div className="social-info">
            <strong>WhatsApp</strong>
            <small>(48) 98877-9779</small>
          </div>

          <span className="arrow">→</span>
        </a>


        <a
          href="https://www.instagram.com/goulart._c/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <span className="social-icon instagram-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1"></circle>
            </svg>
          </span>

          <div className="social-info">
            <strong>Instagram</strong>
            <small>goulart._c</small>
          </div>

          <span className="arrow">→</span>
        </a>


        <a
          href="https://github.com/caiacavalheiro-jpg"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <span className="social-icon github-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.18c-3.23.7-3.91-1.56-3.91-1.56-.52-1.3-1.26-1.65-1.26-1.65-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.73 1.26 3.4.96.1-.75.41-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.11 0 4.46-2.71 5.44-5.3 5.73.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>
            </svg>
          </span>

          <div className="social-info">
            <strong>GitHub</strong>
            <small>caiacavalheiro-jpg</small>
          </div>

          <span className="arrow">→</span>
        </a>


        <a
          href="https://cavalheirog-dev.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="social-btn vercel-btn"
        >
          <span className="social-icon vercel-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L22 20H2L12 2Z"></path>
            </svg>
          </span>

          <div className="social-info">
            <strong>Vercel</strong>
            <small>cavalheirog-dev.vercel.app</small>
          </div>

          <span className="arrow">→</span>
        </a>

      </div>


      
      <footer className="footer">

        <div className="footer-name">
          <h2>Desenvolvimento de Sistemas</h2>
          <p>SENAI</p>
        </div>

        <div className="footer-info">
          <p>2026</p>
          <p>Caiã Goulart Cavalheiro</p>
        </div>

      </footer>

    </>
  )
}

export default App
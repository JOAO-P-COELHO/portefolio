import {Link} from 'react-scroll';
import Date from './date';


// Falta meter Local "Lisboa, Portugal", quando se faz hover no icon do local
// Icons também saem do sitio, quando a moldura do viewport muda
// Footer não está no fundo

export default function Fourth() {
  return (
    <div id="div4" className="content">
      <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center ">
            <div class="d-flex justify-content-center">
              {/* <a class="navbar-brand" href="#">João P. Coelho</a> */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li id="home" class="nav-item">
                    <a class="nav-link" aria-current="page" href="#div1">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#div2">.myProjects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#div3">About Me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#div4">Contacts</a>
                  </li>

                </ul>
              </div>
            </div>
      </nav>
      <div id="contacts_talk" className='text-center'>
        <h1>Do you like what you see?</h1>
        <i class="bi bi-linkedin"></i>
        <h2> To be honest, I'm all about a good challenge.</h2>
        <h1>Get in touch with me.</h1>
        
      </div>
      <div id="body_contacts">
        <div id="socials" >
          <ul className='ul_Social container'>
          <li>
              <a href="mailto: joaocoelho.sp@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i></a>
            </li>
                    
            <li>
              <a href="https://www.linkedin.com/in/jp-coelho/" target="_blank">
              <i class="fa-brands fa-linkedin"></i></a>
            </li>

            <li>
              <a href="https://github.com/JOAO-P-COELHO" target="_blank">
              <i class="fa-brands fa-square-github"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/joao_ppsc/" target="_blank">
              <i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
            <a target="_blank">
              <i class="fas fa-map-marker-alt"></i></a>
              
            </li>
            
          </ul>
          {/* <span className="hide">Lisboa, Portugal</span> */}
        </div>

        
        
      </div>
      <div className="container left align-self-center">
        <h1 id="talk" datatext="Hi. I'm João P. Coelho.">I'm João P. Coelho. And this is myPortefolio.</h1>
        </div>


     < Date />
     {/* <Link to="3">--------------------------Clicking will go to ID=3</Link> */}
     </div>
  );
}
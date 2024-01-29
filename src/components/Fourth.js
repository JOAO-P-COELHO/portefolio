import Date from './date';


// Falta meter Local "Lisboa, Portugal", quando se faz hover no icon do local
// Icons também saem do sitio, quando a moldura do viewport muda
// Footer não está no fundo

export default function Fourth() {
  return (
    <div id="div4" className="content">

    <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
      <div className="d-flex justify-content-center">

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg id="icon_nav" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li id="home" className="nav-item">
              <a className="nav-link" aria-current="page" href="#div1">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#div2">.myProjects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#div3">About</a>
            </li>
            <li className="nav-item current_div">
              <a className="nav-link" href="#div4">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

      <div  id="all_end_page">
      <div  id="contacts_talk" className='text-center'>
        <h1 className='main_text_h2'>Get in touch.</h1>
        <h2 className='main_text_h3' style={{"color":"white"}}>I'm all about a good challenge.</h2>
      </div>

      <div id="direct_contact">
        <div id="email" >
        <a className='address_email' href='mailto:joaocoelho.sp@gmail.com'><i className="fa-solid fa-envelope"></i></a>
          <a href='mailto:joaocoelho.sp@gmail.com'><p className='address_email' >joaocoelho.sp@gmail.com</p></a>
        </div>

        <div id="address">
          <i className="fas fa-map-marker-alt"></i>
          <p className='address_email' >Lisboa, Portugal | Remote </p>
        </div>
        
      </div>
      <div id="body_contacts">
        <div id="socials" >
          <ul className='ul_Social'>
                    
            <li>
              <a href="https://www.linkedin.com/in/jp-coelho/" target="_blank">
              <i className="fa-brands fa-linkedin"></i></a>
            </li>

            <li>
              <a href="https://github.com/JOAO-P-COELHO" target="_blank">
              <i className="fa-brands fa-square-github"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/joao_ppsc/" target="_blank">
              <i className="fa-brands fa-instagram"></i></a>
            </li>

          </ul>

        </div>

        
        
      </div>
      <div className="container left align-self-center">
        
        <h1 id="talk" style={{"fontSize":"1.5vw", "padding":"1vw"}} className="main_text_h2 text-center" >I'm João P. Coelho. And this is myPortefolio page.</h1>
        <hr/>
        </div>


     < Date />
     </div>

     </div>
  );
}
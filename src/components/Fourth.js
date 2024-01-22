import {Link} from 'react-scroll';

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
        <h1>You like what you saw?</h1>
        <h2> To be honest, I'm all about a good challenge.</h2>

      </div>
     
     <Link to="3">--------------------------Clicking will go to ID=3</Link>
     </div>
  );
}
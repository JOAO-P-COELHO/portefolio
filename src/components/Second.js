import proj1 from '../external/gif.gif';


// METER OS GIFS ESTÁTICOS, SÓ A FUNCIONAREM QUANDO FIZER HOVER:
// https://www.deecoder.in/2021/05/play-gif-on-hover-animate-gif-on-hover.html


export default function Second() {

  return (

    <div id="div2" className="content">    

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

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav> */}



      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Front-End</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Back-End</button>

      </div>

      <div class="tab-content" id="v-pills-tabContent">


        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
          <div className='Projs container '>

            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleALL:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>

            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleALL:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>

            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleALL:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>

          </div>
        </div>

        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
          <div className='Projs container'>
              
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleFE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
  
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleFE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
  
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleFE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
    
          </div>

        </div>

        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
          <div className='Projs container'>
                
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleBE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
  
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleBE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
  
            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleBE:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a href="google.pt href=" target="_blank"><img src={proj1}/> </a>
            </div>
        
          </div>  
        </div>


      </div>


</div>  



  </div>
  );
}

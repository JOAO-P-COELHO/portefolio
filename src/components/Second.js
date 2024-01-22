import proj1 from '../external/gif.gif';


// METER OS GIFS ESTÁTICOS, SÓ A FUNCIONAREM QUANDO FIZER HOVER:
// https://www.deecoder.in/2021/05/play-gif-on-hover-animate-gif-on-hover.html

//Scroll bar não está clicável


export default function Second() {

  return (

    <div id="div2" className="content">    

      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center ">
        <div className="d-flex justify-content-center">
          {/* <a className="navbar-brand" href="#">João P. Coelho</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
                <a className="nav-link" href="#div3">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#div4">Contacts</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>





      <div className="alig_div2 d-flex align-items-center">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All</button>
          <button className="nav-link" id="v-pills-front-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Front-End</button>
          <button className="nav-link" id="v-pills-end-tab-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Back-End</button>
          <button className="nav-link" id="v-pills-design-tab" data-bs-toggle="pill" data-bs-target="#v-pills-design" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Design <br/>(Publisher)</button>
      </div>

      <div className="tab-content" id="v-pills-tabContent">

        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-all-tab" tabindex="0">
          <div className='Projs container '>

            <div className="project">   
              <a href="google.pt href=" target="_blank"><h1>Project TitleALL:</h1></a>
              <p> - HTML, CSS, React</p>
              <p> - Description </p>
              <a className='a_div2' href="google.pt href=" target="_blank"><img src={proj1}/> </a>
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

        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-front-tab" tabindex="0">
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

        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-end-tab-tab" tabindex="0">
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

        <div className="tab-pane fade" id="v-pills-design" role="tabpanel" aria-labelledby="v-pills-design-tab" tabindex="0">
        <h5>These were created using Publisher© (a software not that different from Adobe Photoshop)</h5> 
          <div className='Projs container'>
                  
            <div className="project">
               
              <a href="google.pt href=" target="_blank"><h1>Project TitleBE:</h1></a>
              <p> - Publisher</p>
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

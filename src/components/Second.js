import { lazy } from 'react';


import proj1 from '../external/gif.gif';
// import ProjCompo from './ProjCompo';
const ProjCompo = lazy(() => import('./ProjCompo'))



// METER OS GIFS ESTÁTICOS, SÓ A FUNCIONAREM QUANDO FIZER HOVER:
// https://www.deecoder.in/2021/05/play-gif-on-hover-animate-gif-on-hover.html
// Quando o Design Publisher está selecionado, o titulo está com pouco padding - Ver também a questão de se a barra de scroll dps nao fica muito para baixo

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



      <div class="alig_div2">
  <div class="nav flex-column nav-pills me-3 navbar-light" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Front-End</button>

    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Back-End</button>
    
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Design <br></br> (Publisher)</button>
    
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active align-middle" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <div className="flexed">
      <ProjCompo 
                title="test1e" 
                tech="HTML, CSS, htm" 
                description="bla bla" 
                site="https://codepen.io/sosuke/pen/Pjoqqp" 
                code ="https://www.google.com/ "
                local="ome" />    

      <ProjCompo 
                  title="teste" 
                  tech="HTML, CSS, htm" 
                  description="bla bla" 
                  site="https://codepen.io/sosuke/pen/Pjoqqp" 
                  code ="https://www.google.com/ "
                  local="ome" />  

      <ProjCompo 
                  title="teste" 
                  tech="HTML, CSS, htm" 
                  description="bla bla" 
                  site="https://codepen.io/sosuke/pen/Pjoqqp" 
                  code ="https://www.google.com/ "
                  local="ome" />    

      <ProjCompo 
                  title="teste" 
                  tech="HTML, CSS, htm" 
                  description="bla bla" 
                  site="https://codepen.io/sosuke/pen/Pjoqqp" 
                  code ="https://www.google.com/ "
                  local="ome" />      

      <ProjCompo 
                  title="teste" 
                  tech="HTML, CSS, htm" 
                  description="bla bla" 
                  site="https://codepen.io/sosuke/pen/Pjoqqp" 
                  code ="https://www.google.com/ "
                  local="ome" />            

  </div> 
    </div>
    
    
    <div  class="tab-pane fade align-middle " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className="flexed">
    <ProjCompo 
              title="teste2" 
              tech="HTML, CSS, htm" 
              description="bla bla" 
              site="https://codepen.io/sosuke/pen/Pjoqqpa" 
              code ="https://www.google.com/ "
              local="ome" />    
              {/* <p>aqui: {count}</p> */}

    <ProjCompo 
              title="teste" 
              tech="HTML, CSS, htm" 
              description="bla bla" 
              site="https://codepen.io/sosuke/pen/Pjoqqpa" 
              code ="https://www.google.com/ "
              local="ome" />    
              {/* <p>aqui: {count}</p> */}

    <ProjCompo 
              title="teste" 
              tech="HTML, CSS, htm" 
              description="bla bla" 
              site="https://codepen.io/sosuke/pen/Pjoqqpa" 
              code ="https://www.google.com/ "
              local="ome" />    
              {/* <p>aqui: {count}</p> */}
              
    
              </div>
    </div>
    
 

    
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    
  </div>
</div>







  </div>
  );
}

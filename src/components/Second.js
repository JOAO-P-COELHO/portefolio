import { lazy } from 'react';
import Pdfs from './Pdfs';
// import ProjCompo from './ProjCompo';
const ProjCompo = lazy(() => import('./ProjCompo'))



export default function Second() {


  return (
    <div id="div2" className="content">    

      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center ">
        <div className="d-flex justify-content-center">
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
    
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Design <br></br> <span id="publisher">(Publisher)</span></button>
    
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active align-middle" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <div className="flexed">

    {/* THIS MUST BE DONE WITH A MAPS FUNCTION - REVIEW! */}
      <ProjCompo 
                title="Random Quote Machine" 
                tech="HTML, CSS, JavaScript, React, Bootstrap" 
                description="This App produces random (motivational) quotes (using an API) and that it's able to post them on Twitter or tumblr directly  with a button" 
                site="https://mfr5lw.csb.app/" 
                code ="https://codesandbox.io/p/sandbox/wonderful-sea-mfr5lw"
                local="FE1" />    

      <ProjCompo 
                  title="Pomodoro-Clock" 
                  tech="HTML, CSS, JavaScript, React, Bootstrap" 
                  description="It's a classic Pomodoro-Clock, but way prettier and cooler." 
                  site="https://7y7yj4-3000.csb.app/" 
                  code ="https://codesandbox.io/p/devbox/pomodoro-clock-7y7yj4"
                  local="FE2" />  

      <ProjCompo 
                  title="Drum Machine" 
                  tech="HTML, CSS, JavaScript, React, Bootstrap" 
                  description="An App that represents a 'music machine' that can plays sounds with keyboard and/or mouse (it's able to select a bank of samples, defining the volume and to turn on/off the machine)" 
                  site="https://97j6q4.csb.app/" 
                  code ="https://codesandbox.io/p/sandbox/machinedrum-97j6q4"
                  local="FE3" />    

      <ProjCompo 
                  title="Markdown Previewer" 
                  tech="HTML, CSS, JavaScript, React, Bootstrap" 
                  description="An App that converts Markdown code into HTML code (readable by the browser) - it doesn't use a converter" 
                  site="https://q9cwsg.csb.app/" 
                  code ="https://codesandbox.io/s/q9cwsg"
                  local="FE4" />      

      <ProjCompo 
                  title="FirstPortefolio" 
                  tech="HTML, CSS, JavaScript, JQuery, React, Bootstrap" 
                  description="This is the first portefolio page that I created, it has a lot of colours and a button that lets the user defines dark/day mode" 
                  site="https://wjxnfp-3000.csb.app/" 
                  code ="https://codesandbox.io/p/devbox/firstportefolio-wjxnfp"
                  local="FE5" /> 

      <ProjCompo 
                  title="JQuery Practice" 
                  tech="HTML, CSS, JavaScript, jQuery" 
                  description="One of the projects that I built to practice jQuery and HTML/CSS - It has a pretty 'hamburguer' menu and it explores a lot of features that jQuery it's capable of" 
                  site="https://j25zrv-5000.csb.app/" 
                  code ="https://codesandbox.io/p/devbox/jquery-practice-j25zrv"
                  local="FE6" />  

      <ProjCompo 
                  title="myPortefolio" 
                  tech="HTML, CSS, JavaScript, React, Bootstrap" 
                  description="My current portefolio page" 
                  site="https://sjlwys-3000.csb.app/" 
                  code ="https://codesandbox.io/p/devbox/myportefolio-sjlwys"
                  local="FE7" />            

  </div> 
    </div>
    
    
    <div  class="tab-pane fade align-middle " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className="flexed">
    
      <ProjCompo 
              title="Checkers Game" 
              tech="Python" 
              description="Classic checkers game playable by two users in the same computer, that saves the users' names and the result and date of the game in a .txt, that can be consulted by the users. It has menus and sounds to make it more enjoyable." 
              site="https://codesandbox.io/p/devbox/checkers-game-9rzn9j" 
              code ="https://codesandbox.io/p/devbox/checkers-game-9rzn9j" 
              local="BE1" />   

      <ProjCompo 
              title="Time Calculator" 
              tech="Python" 
              description="Taking the present time in AM/PM and 'x' time in minutes and/or hours, it returns the time and days left. Example: add_time('6:30 PM', '205:12') # Returns: 7:42 AM (9 days later)" 
              site="https://codesandbox.io/p/devbox/fcc-time-calculator-cxg5sg" 
              code ="https://codesandbox.io/p/devbox/fcc-time-calculator-cxg5sg"
              local="BE2" />   

      <ProjCompo 
              title="Polygon Area Calculator" 
              tech="Python" 
              description="It returns the result of several math operations based on the input of the width/height of a rectangle or square. It 's also capable of designing the figure using asteriks. Example: rect = Rectangle(10, 5)" 
              site="https://codesandbox.io/p/devbox/polygon-area-calculator-ylkhkt" 
              code ="https://codesandbox.io/p/devbox/polygon-area-calculator-ylkhkt" 
              local="BE3" />   

      <ProjCompo 
              title="Arithmetic Formatter" 
              tech="Python" 
              description="Using \nto numbers and selecting one of two operations (+ or -) it disposes and calculates arithmetic problems as students in primary school. You can also chose to show the result of the operation or not." 
              site="https://codesandbox.io/p/devbox/fcc-arithmetic-formatter-crv8m8" 
              code ="https://codesandbox.io/p/devbox/fcc-arithmetic-formatter-crv8m8"
              local="BE4" />   

      <ProjCompo 
              title="Balls Probability" 
              tech="Python" 
              description="This is a simple probability calculator. You define a number of balls and their color in the input, how many balls you are expecting and their color, how many balls your experiment will take and the number of experiments you will do (more experiments -> more accurate probability). The program returns the probability, based on those arguments.
Example of use: experiment(hat=hat,expected_balls={'red':2,'green':1}, num_balls_drawn=5, num_experiments=2000). # Probabilty: 0,27" 
              site="https://codesandbox.io/p/devbox/probability-rvqcj8" 
              code ="https://codesandbox.io/p/devbox/probability-rvqcj8"
              local="BE5" />  

      <ProjCompo 
              title="Budget App" 
              tech="Python" 
              description="It simulates the events on a company and the Budget available in total and for each of the categories ('Food', 'Clothes', 'Auto'). It returns the operations and their role on the categories' balance. It also returns a chart made of 'o', showing the percentage spent on each category." 
              site="https://codesandbox.io/p/devbox/budget-app-h88g5p" 
              code ="https://codesandbox.io/p/devbox/budget-app-h88g5p"
              local="BE6" /> 

      <ProjCompo 
              title="Pokemon API" 
              tech="Python" 
              description="It searches for the habilities of a pokemon using an API" 
              site="https://codesandbox.io/p/devbox/pokemon-api-8kc97x" 
              code ="https://codesandbox.io/p/devbox/pokemon-api-8kc97x"
              local="BE7" />       

      <ProjCompo 
              title="Banking App" 
              tech="Python" 
              description="It asks the user the type of operation and the value associated, showing the value of it's bank account. It saves the operations and the current balance in a .txt file." 
              site="https://codesandbox.io/p/devbox/banking-app-lt7rqr" 
              code ="https://codesandbox.io/p/devbox/banking-app-lt7rqr"
              local="BE8" />  

      <ProjCompo 
              title="Rock Paper Scissor" 
              tech="Python" 
              description="Classic Rock Paper Scissor vs. computer" 
              site="https://codesandbox.io/p/devbox/rock-paper-scissor-ms7rs4" 
              code ="https://codesandbox.io/p/devbox/rock-paper-scissor-ms7rs4"
              local="BE9" />      

    
              </div>
    </div>
    
 

    
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <h1 className='h1_pdfs text-center'>This is some works I've done using Publisher (a Adobe Photoshop lookalike from Microsoft)</h1>
      <div className='pdfs_div'>
        <Pdfs file="pdf1" />
        <Pdfs file="pdf2" />
        <Pdfs file="pdf3" />
        <Pdfs file="pdf4" />
        <Pdfs file="pdf5" />
        <Pdfs file="pdf6" />
        <Pdfs file="pdf7" />
        <Pdfs file="pdf8" />
        <Pdfs file="pdf9" />
        <Pdfs file="pdf10" />
        <Pdfs file="pdf11" />
      </div>

    </div>
    
  </div>
</div>

  </div>
  );
}

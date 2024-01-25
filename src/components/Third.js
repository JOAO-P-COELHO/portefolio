import Space from '../external/Space2.png';
import Building from '../external/site3.jpg';
import Local from '../external/local.jpg';
import ProjCompo from './ProjCompo';

export default function Third() {
  return (
    <div id="div3" className="content">
    
      {/* <div>
        <p>I've always been someone in love with the space and the planets.</p>
        <p>I started as a Scientis (I studied Geology and Biology). I taught those di.</p>
      </div> */}

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

      <div id="carouselExampleCaptions" className=" carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner ">
        
          <div className="carousel-item active">
             <img src={Space}  alt="..."/> 
            <div className="carousel-caption d-none d-md-block">
              <h5>Shoot for the stars!</h5>
              <p>Well, I always liked Science - a lot. I graduated in Geology, post-graduated in Biology and I have a master's degree in Teaching (Geology and Biology).</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id="img_so" src={Building} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Ah...just keep building?!</h5>
              <p>I realized that I like puzzles and I love to build - also -, a lot. So, I decided in 2021 to pursue a career in IT. I'm currently graduating in Computer Science and Engineering (in Universidade Aberta), and studying on my own everything that needs to be known in the field of Front-End. I've falling in love with Back-End too, lately.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Local}alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>I'm this. Probably more.</h5>
              <p>I like the Nature - what a surprise... from a former scientist! I like hiking and I like exercising - maybe a little to much.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </div>
    
  );
}
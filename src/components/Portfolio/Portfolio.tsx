import { Container } from "./styles";
// import githubIcon from "../../assets/github.png"
import externalLinkIcon from "../../assets/link.png"
import ScrollAnimation from "react-animate-on-scroll";
import reactIcon from "../../assets/reactjs.png";
// import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
// import jsIcon from "../../assets/javascript.png";
// import sassIcon from "../../assets/sass.png";
// import typescriptIcon from "../../assets/typescript.png";
// import styledcomponentsIcon from "../../assets/styled-components.png";



export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Curious to know the impressive websites I've weaved into existence?</h2>
      <p>Take a journey through my portfolio and immerse yourself in the world of our works! </p>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">         
              <a href="github.com/Priceless001/E-commerce-app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>an E-commerce app</h3>
              <p>Built an E-commerce app with Pure HTML and CSS.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={cssIcon} alt="css Icon" /></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://brilliant-conkies-1e083b.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit Site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>An Image Gallery</h3>
              <p>A blend of HTML,CSS and React. Experience seamless scrolling and Login. Let's connect through and journey!         
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={reactIcon} alt="React Icon" /></li>
                {/* <li><img src={typescriptIcon} alt="Typescript Icon" /></li> */}
                <li><img src={cssIcon} alt="CSS Icon" /></li>                
            </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

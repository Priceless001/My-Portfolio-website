import { Container } from "./styles";
import githubIcon from "../../assets/github.png"
import externalLinkIcon from "../../assets/link.png"
import ScrollAnimation from "react-animate-on-scroll";
import reactIcon from "../../assets/reactjs.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/javascript.png";
import sassIcon from "../../assets/sass.png";
import typescriptIcon from "../../assets/typescript.png";
import styledcomponentsIcon from "../../assets/styled-components.png";



export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Curious to know the impressive websites I've weaved into existence?</h2>
      <p>Take a journey through my portfolio and immerse yourself in the world of our works! </p>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://dreamweaversrealty.vercel.app" target="_blank" rel="noreferrer">
              <img src={externalLinkIcon} alt="External Link" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Dream Weavers Realty</h3>
            <p>Explore real estate excellence at Dream Weavers Realty – your premier source for unique properties and tailored service.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li><img src={reactIcon} alt="React Icon" /></li>
              <li><img src={jsIcon} alt="JavaScript Icon" /></li>
              <li><img src={cssIcon} alt="CSS Icon" /></li>                
            </ul>
          </footer>
        </div>
      </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">         
              <a href="https://olumideportfolio.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Olumide's Portfolio</h3>
              <p>Crafted a dynamic portfolio for my friend, highlighting their journey as a skilled data analyst.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={reactIcon} alt="React Icon" /></li>
                <li><img src={cssIcon} alt="css Icon" /></li>
                <li><img src={styledcomponentsIcon} alt="styledcomponents Icon" /></li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/CodeWunder/Planets-fact" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://codewunder-planet.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Planets Fact Site</h3>
              <p>An interactive website showcasing fascinating facts about each planet in our solar system. Learn about size, distance, composition, and more.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={reactIcon} alt="React Icon" /></li>
                <li><img src={sassIcon} alt="Sass Icon" /></li>
                <li><img src={cssIcon} alt="Animejs Icon" /></li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/CodeWunder/Interactive-Comment-App" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://interactive-comment-app-nine.vercel.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Interactive Comment App</h3>
              <p>Engage in two-way conversations with the ability to reply and delete chats using this interactive chat application.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={reactIcon} alt="React Icon" /></li>
                <li><img src={sassIcon} alt="Sass Icon" /></li>
                <li><img src={jsIcon} alt="JavaScript Icon" /></li>                          
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://codewunder.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit Site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Personal Portfolio</h3>
              <p>A blend of TypeScript and React. Experience seamless scrolling and captivating animations. Let's connect through my projects and journey!         
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={reactIcon} alt="React Icon" /></li>
                <li><img src={typescriptIcon} alt="Typescript Icon" /></li>
                <li><img src={cssIcon} alt="CSS Icon" /></li>                
            </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/CodeWunder/Tic-tac-toe" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://codewunder-tic-tac-toe.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Tic Tac Toe</h3>
              <p>Experience classic fun with my Tic Tac Toe website. Play against friends or the computer in this timeless game.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={htmlIcon} alt="HTML Icon" /></li>
                <li><img src={cssIcon} alt="CSS Icon" /></li>
                <li><img src={jsIcon} alt="JavaScript Icon" /></li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/CodeWunder/Password-generator-app" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Github link" />
              </a>
              <a href="https://codewunder-password-gen.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Password Generator</h3>
              <p>
                Elevate security, get custom strong passwords. Protect your online accounts with adjustable, unique passwords. Upgrade for safety! 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={htmlIcon} alt="HTML Icon" /></li>
                <li><img src={cssIcon} alt="CSS Icon" /></li>
                <li><img src={jsIcon} alt="JavaScript Icon" /></li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#66bfff" stroke="#66bfff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://osunrombi-ayobami.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Osunrombi Ayobami</h3>
              <p>
                 I collaborated with Ayobami the animator, to create a dynamic and visually captivating online portfolio that reflects his artistic prowess.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li><img src={htmlIcon} alt="HTML Icon" /></li>
                <li><img src={cssIcon} alt="CSS Icon" /></li>
                <li><img src={jsIcon} alt="JavaScript Icon" /></li>                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}

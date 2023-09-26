import { Container } from './styles'

import reactIcon from '../../assets/reactjs.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
// import devtoIcon from '../../assets/dev-to.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>¢ode</span>
        <span>wunder</span>
      </a>
      <div>
        <p>
          © 2023 Codewunder<img src={reactIcon} alt="React" />          
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ayeni precious"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Priceless001"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/ayeni4597/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}

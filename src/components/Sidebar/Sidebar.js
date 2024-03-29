import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faClose,
  faBars,
  faHome,
  faSuitcase,
  faUser,
  faSmile
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faSmile}/>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          onClick={() => setShowNav(false)}
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          className="close-icon">
        </FontAwesomeIcon>
       
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sabriyeuregen/"
          >
            <FontAwesomeIcon icon={faLinkedin}  
              color="#4d4d4e"
              className="anchor-icon"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sabriyeuregen"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"
              className="anchor-icon"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hackerrank.com/sabriyeuregen?hr_r=1"
          >
            <FontAwesomeIcon icon={faHackerrank}   color="#4d4d4e"
              className="anchor-icon"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        className="hamburger-icon"
      ></FontAwesomeIcon>
    </div>
  )
}

export default Sidebar

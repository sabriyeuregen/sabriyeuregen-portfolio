import "./Sidebar.scss"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome,  faUser} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className="nav-bar">
     <Link className="logo" to="/"> {/* logo gelicek*/ }
        <img className="sub-logo" src="" alt="logo"></img> 
     </Link>
     <nav>
        <NavLink activeclassname="active" to="/home">
           <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
           <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
     </nav>
     <ul>
       <li>
           <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sabriyeuregen/">
            <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
           </a>
       </li>
       <li>
           <a target="_blank" rel="noreferrer" href="https://github.com/sabriyeuregen">
            <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
           </a>
       </li>
     </ul>
    </div>
  )
}

export default Sidebar
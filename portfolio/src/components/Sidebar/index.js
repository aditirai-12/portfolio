import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faArchive} color="#FFFFFF"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF"/>
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target="blank" rel='noregerrer' href='https://www.linkedin.com/in/aditirai2020/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#FFFFFF" />
                </a>
            </li>
            <li>
                <a target="blank" rel='noregerrer' href='https://github.com/aditirai-12'>
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
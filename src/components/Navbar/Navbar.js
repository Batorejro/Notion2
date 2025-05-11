//import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Link to="/"><i className="fa fa-tasks"></i></Link>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Share</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/message">...</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/more">+++</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;

<i class="ri-message-line "></i>
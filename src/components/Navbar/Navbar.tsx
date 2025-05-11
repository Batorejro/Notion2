import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <Nav.Link to="/">
                <button>HOME</button>
            </Nav.Link>

            <Nav.Link to="/">
                <button>1</button>
            </Nav.Link>

            <Nav.Link to="/">
                <button>2</button>
            </Nav.Link>

            <Nav.Link to="/">
                <button>3</button>
            </Nav.Link>



        </>
    );
}

export default Navbar;
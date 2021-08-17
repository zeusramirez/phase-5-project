import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavItem } from "react-bootstrap"

function NaviBar() {
    return (
        <>
        <header>
            <Navbar className="navbar"  variant="primary" sticky = "top" >
                 <Container className="container-fluid" id="navbar">
                <Navbar.Brand> ProjectBuild </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="link" as={Link} to="/">
                        Home
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to="/account">
                        Account
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to="/mygarage">
                        MyGarage
                        </Nav.Link>
                        <Nav.Link className="link" as={Link}  to="/login" >
                        Login/Logout
                        </Nav.Link>
                    </Nav>
                </Container>
            <div>
                <h3>
                    Welcome, USER
                </h3>
            </div>
            </Navbar>
        </header>
        </>
    )
}
export default NaviBar
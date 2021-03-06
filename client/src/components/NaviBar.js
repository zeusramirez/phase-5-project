import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"

function NaviBar(props) {
    const {user, logOut} = props
    return (
        <>
        <header>
            <Navbar className="navbar"  variant="primary" sticky = "top" >
                 <Container className="container-fluid navi-container" id="navbar">
                <Navbar.Brand  className="logo" as={Link} to="/"> ProjectBuild </Navbar.Brand>
                    {user != null ? 
                        (
                        <>
                        <Nav className="me-auto">
                            <Nav.Link className="link" as={Link} to="/">
                            Home
                            </Nav.Link>
                            <Nav.Link className="link" as={Link} to="/mygarage">
                            MyGarage
                            </Nav.Link>
                        </Nav>
                       </> ):(
                        <>
                        <Nav  className="me-auto navi-login">
                            <Nav.Link  className="link" as={Link}  to="/login" >
                                Login/Signup
                            </Nav.Link>
                        </Nav>
                        </>
                        )}
                    {user != null ? <><h4 className="navi header-center">{user.username} </h4> <button onClick={logOut} className="btn btn-sm navi-login">Log Out</button></>: null}
                </Container>
            </Navbar>
        </header>
        </>
    )
}
export default NaviBar
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigate = useNavigate()
    const location = useLocation()

    if(location.pathname === "/"
        || location.pathname === '/login'
        || location.pathname === "/registro") {
            return null
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        navigate("/");
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>IronRH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row">
                            <Link className="nav-link" to="/tarefas">Página inicial</Link>
                            <Link className="nav-link" to="/tarefas/nova-tarefa">Adicionar nova tarefa</Link>
                            <Link className="nav-link" to="/perfil">Visualizar perfil</Link>
                        </div>
                        <div>
                            <Button variant="danger" onClick={ handleLogout }>Logout</Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
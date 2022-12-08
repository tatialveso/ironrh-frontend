import { useContext } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"

function Profile() {
    const { loggedUser } = useContext(AuthContext)

    return (
        <Container className="my-5">
            <img src={loggedUser.user.profileImg} alt="" />
            <h1>Nome do usuário</h1>
            <h6 className="fw-bold text-muted">Ativo na empresa desde DD/MM/YYY</h6>
            <Row className="my-4">
                <Col>
                    <Button variant="primary">
                        <Link className="nav-link" to="/editar-perfil">Editar perfil</Link>
                    </Button>
                </Col>
                <Col>
                    <Button variant="danger">
                        <Link className="nav-link" to="/deletar-perfil">Excluir perfil</Link>
                    </Button>
                </Col>
            </Row>
            <Card>
                <Card.Header>
                    <h5 className="fw-bold m-0 py-1">Dados básicos</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>Endereço de e-mail</Card.Title>
                            <Card.Text>
                                {loggedUser.user.email}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Telefone</Card.Title>
                            <Card.Text>
                                XXXXX-XXXX
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="mt-5">
                <Card.Header>
                    <h5 className="fw-bold m-0 py-1">Dados empregatícios</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>Data de admissão</Card.Title>
                            <Card.Text>
                                DD/MM/YYYY
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Salário</Card.Title>
                            <Card.Text>
                                R$ XXXX,XX
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Card.Title>Status</Card.Title>
                            <Card.Text>
                                Lorem ipsum
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Title>Departamento</Card.Title>
                            <Card.Text>
                                Lorem ipsum
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Profile
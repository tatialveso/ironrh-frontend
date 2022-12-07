import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Modal, Row, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faCalendarCheck, faCircleCheck, faBuildingUser, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { api } from "../../api/api";
import EditEmployee from "./EditEmployee";

function EmployeeDetails({ form, setForm }) {
    const [employee, setEmployee] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [show, setShow] = useState(false);
    const { id } = useParams()
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        try {
            const fetchEmployee = async () => {
                const response = await api.get(`/employees/${id}`)
                setEmployee(response.data)
                setIsLoading(false)
            }

            fetchEmployee()
        } catch (error) {
            console.log(error)
        }
    }, [id])

    const deleteEmployee = async (id) => {
        await api.delete(`/employees/delete/${id}`)
        navigate("/funcionarios")

        toast.success('Usuário deletado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <Container style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            {
                isLoading && <Spinner animation="border" />}
            {
                !isLoading &&
                <Card className="text-center w-100">
                    <Card.Header>
                        <Card.Title className="m-0">
                            <h3>{employee.name}</h3>
                        </Card.Title>
                        {
                            employee.active && <h6 className="text-success">Este funcionário está ativo na empresa</h6>
                        }
                        {
                            !employee.active && <h6 className="text-secondary">Este funcionário não está ativo na empresa</h6>
                        }
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Informações trabalhista</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faCalendarCheck} /> {employee.admissionDate}
                                </Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faCircleCheck} /> {employee.status}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} /> R${employee.salary},00
                                </Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faBuildingUser} /> {employee.department}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Title>Informações de contato</Card.Title>
                            <Col>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faAt} /> {employee.email}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faPhone} /> {employee.phone}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <EditEmployee id={id} form={form} setForm={setForm} />
                            </Col>
                            <Col>
                                <Button
                                    variant="secondary"
                                    onClick={() => navigate(-1)}
                                >
                                    Voltar</Button>
                            </Col>
                            <Col>
                                <Button variant="danger" onClick={handleShow}>
                                    Excluir funcionário
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Deseja excluir este funcionário?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Lembre-se de que uma vez excluído não é possível recuperar a informação deste item. Então, pense bem nesta ação!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancelar
                                        </Button>
                                        <Button variant="danger" onClick={() => deleteEmployee(employee._id)}>
                                            Excluir funcionário
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
}

export default EmployeeDetails
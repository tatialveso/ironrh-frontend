import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        navigate('/perfil')
    }

    return (
        <Container style={{ height: '100vh' }} className="d-flex flex-column align-items-center justify-content-center">
            <Form onSubmit={handleSubmit} className="w-50">
                <Form.Group className="mb-3">
                    <Form.Label>Endereço de e-mail</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Insira o endereço de e-mail cadastrado"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Insira a senha cadastrada"
                    />
                </Form.Group>
                <Button className="my-3" variant="dark" type="submit">Entrar no sistema</Button>
            </Form>
            <Form.Text>Ainda não possui cadastro? Faça já o
                <Link
                    className="text-warning fw-bold text-decoration-none"
                    to="/registro"> cadastro</Link>.</Form.Text>
        </Container>
    )
}

export default Login
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira um nome"
                    name="name"
                    value={ form.name }
                    onChange={ handleChange }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço de e-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Insira um e-mail válido"
                    name="email"
                    value={ form.email }
                    onChange={ handleChange }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Insira uma senha"
                    name="password"
                    value={ form.password }
                    onChange={ handleChange }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Por favor, confirme a senha criada"
                    name="confirmPassword"
                    value={ form.confirmPassword }
                    onChange={ handleChange }
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Cadastrar usuário
            </Button>
        </Form>
    )
}

export default Register
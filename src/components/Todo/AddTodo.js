import { useContext, useEffect } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/authContext'
import { api } from "../../api/api"

function AddTodo({ todoForm, setTodoForm }) {
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)
    const employeeId = loggedUser.user._id

    useEffect(() => {
        setTodoForm({
            title: "",
            description: "",
            deadline: ""
        })
    }, [])
    
    const handleChange = (e) => {
        setTodoForm({ ...todoForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()

        try {
            await api.post(`/todo/create/${employeeId}`, todoForm)
            navigate("/tarefas")

            toast.success('Nova tarefa cadastrada!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            console.log(error)

            toast.error('Não foi possível cadastrar nova tarefa', {
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
    }

    return (
        <Container>
            <h2 className="my-5">Cadastrar nova tarefa</h2>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira um título da tarefa"
                        name="title"
                        value={todoForm.title}
                        onChange={ handleChange }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira uma explicação da tarefa"
                        name="description"
                        value={todoForm.description}
                        onChange={ handleChange }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Prazo de conclusão</Form.Label>
                    <Form.Control
                        type="date"
                        name="deadline"
                        value={todoForm.deadline}
                        onChange={ handleChange }
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar tarefa
                </Button>
            </Form>
        </Container>
    )
}

export default AddTodo
import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { toast } from 'react-toastify'
import { api } from "../../api/api";

function DeleteTodo({ id }) {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
        document.location.reload()
    }
    const handleShow = () => setShow(true)

    const deleteTodo = async (id) => {
        await api.delete(`/todo/delete/${id}`)
        handleClose()

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
        <div>
            <Button variant="danger" onClick={handleShow}>
                Excluir
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja excluir tarefa?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pense bem! Uma vez excluída não será possível recuperar a tarefa.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => deleteTodo(id) }>
                        Excluir tarefa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteTodo
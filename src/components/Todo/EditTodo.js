import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { api } from "../../api/api";

function EditTodo({ id, todoForm, setTodoForm }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    document.location.reload();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await api.get(`/todo/${id}`);
      setTodoForm(response.data);
    };

    fetchEmployee();
  }, [id, setTodoForm]);

  const handleChange = (e) => {
    setTodoForm({ ...todoForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`todo/edit/${id}`, todoForm);
      handleClose();

      toast.success("Tarefa atualizada!", {
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
      console.log(error);

      toast.error("Não foi possível atualizar a tarefa", {
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
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira um título da tarefa"
                name="title"
                value={todoForm.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira uma explicação da tarefa"
                name="description"
                value={todoForm.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prazo de conclusão</Form.Label>
              <Form.Control
                type="date"
                name="deadline"
                value={todoForm.deadline}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Atualizar tarefa
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditTodo;

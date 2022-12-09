import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

function TodoList({ todoForm, setTodoForm }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const response = await api.get("/todo");
        setTodos(response.data);
        setIsLoading(false);
      };

      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const todosRender = todos
    .filter((todo) =>
      todo.progress.toLowerCase().includes(search.toLowerCase())
    )
    .map((todo) => {
      const deadline = new Date(todo.deadline);
      const dd = deadline.getDate() + 1;
      const mm = deadline.getMonth() + 1;
      const yyyy = deadline.getFullYear();

      return (
        <Col key={todo._id}>
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Header>
              <Card.Title className="m-0">{todo.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>{todo.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Prazo: {dd}/{mm}/{yyyy}
              </ListGroup.Item>
              <ListGroup.Item>{todo.progress}</ListGroup.Item>
              <ListGroup.Item>
                Responsável:
                <Link
                  className="nav-link d-inline"
                  to={`/funcionarios/${todo.responsable._id}`}
                >
                  {" "}
                  {todo.responsable.name}
                </Link>
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer className="d-flex justify-content-around">
              <EditTodo
                id={todo._id}
                todoForm={todoForm}
                setTodoForm={setTodoForm}
              />
              <DeleteTodo id={todo._id} />
            </Card.Footer>
          </Card>
        </Col>
      );
    });

  return (
    <Container>
      <Form className="my-4">
        <Form.Control
          type="search"
          placeholder="Pesquisar tarefas por progresso"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      {isLoading && <Spinner className="mt-4" animation="border" />}
      {!isLoading && <Row>{todosRender}</Row>}
    </Container>
  );
}

export default TodoList;

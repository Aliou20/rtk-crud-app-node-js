import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Button from "@mui/material/Button";
import "../App.css";
import { CircularProgress, Card } from "@mui/material";
import { deleteTodos, getTodos } from "../feature/Slice1";

const ListTodos = ({setTodo}) => {

  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState)
  const {todos} = todosState

useEffect(() => {
  dispatch(getTodos())
},[dispatch])

const handleClick = (id) => {
  dispatch(deleteTodos(id))
}
  // const dispatch = useDispatch();
  // const todosState = useSelector((state) => state.todosState);
  // const { todos } = todosState;

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch]);

  // const handleDelete = (id) => {
  //   dispatch(deleteTodo(id));
  // };

  return (
    <div>
      {/* <h2> You have {todos && todos.length} tasks </h2> */}
      <h2> You have {todos && todos.length} tasks </h2>
      <div>
        {todosState.getTodosStatus === "pending" ? <CircularProgress /> : null}

        {todos.map(todo => <Card variant="outlined" sx={{
          padding : "0.7rem",
          marginBottom : "2rem"
        }} key={todo._id} >
          <h3>{todo.task} </h3>
          <p>Added : {moment(todo.date).fromNow()} </p>
          <Button variant="outlined" size="small" sx={{
            fontFamily : '"Abel" , "sansSerif"'
          }} onClick={() => setTodo(todo)}>
            Update
          </Button>

          <Button variant="contained" color="secondary" size="small" sx={{
            fontFamily : '"Abel" , "sansSerif"',
            marginLeft : "0.7rem"

          }} onClick={() => handleClick(todo._id)}>
            Delete
          </Button>
        </Card>
        )}
      </div>
      {/* {todosState.getTodosStatus === "pending" ? <CircularProgress /> : null}
      {todos.map((todo) => (
        <Card
          variant="outlined"
          sx={{
            padding: "0.7rem",
            marginBottom: "2rem",
          }}
          key={todo._id}
        >
          <h3>{todo.task}</h3>
          <p>Added: {moment(todo.date).fromNow()}</p>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setTodo({ ...todo })}
            sx={{
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              marginLeft: "0.7rem",
              fontFamily: "'Abel', 'sansSerif'",
            }}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </Button>
        </Card>
      ))} */}
    </div>
  );
};

export default ListTodos;

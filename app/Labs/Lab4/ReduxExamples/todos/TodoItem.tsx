import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem } from "reactstrap";

type Todo = { id: number | string; title: string };
type TodoItemProps = { todo: Todo };

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between">
      <div>
      {todo.title}
      </div>
      <div>
      <div className="btn btn-primary w-25-child-inputs" onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </div>
      <div className="btn btn-danger w-25-child-inputs" onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-set-todo-click"> Delete </div>
      </div>
    </ListGroupItem>
);}
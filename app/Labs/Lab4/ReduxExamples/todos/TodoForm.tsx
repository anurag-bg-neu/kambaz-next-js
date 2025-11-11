import React from "react";
import { ListGroupItem } from "reactstrap";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <FormControl className="w-25-child-inputs" value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <div>
      <div className="btn btn-warning w-25-child-inputs" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </div>
      <div className="btn btn-success w-25-child-inputs" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </div>
      </div>
    </ListGroupItem>
);}

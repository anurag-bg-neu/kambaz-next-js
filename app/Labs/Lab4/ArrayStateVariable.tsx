import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { ListGroup, ListGroupItem } from "reactstrap";

type Todo = { id: string; title: string };

export default function ArrayStateVariable() {
 const { todos } = useSelector((state: RootState) => state.todosReducer);
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
  <div id ="wd-array-state-variable-list">
   <h2>Array State Variable</h2>
   <button className="btn btn-success" onClick={addElement}>Add Element</button>
   <ul>
    {array.map((item, index) => (
     <li key={index}>
      <h4>{item}</h4> <button className="btn btn-danger" onClick={() => deleteElement(index)}>
              Delete
             </button>
     </li>))}
   </ul>
   </div>
   <hr/>
      <ListGroup>
        {todos.map((todo: Todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
   </div>);
   }
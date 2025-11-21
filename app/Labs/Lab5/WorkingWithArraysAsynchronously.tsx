"use client";
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import * as client from "./client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import { FormControl } from "react-bootstrap";
import { AxiosError } from "axios";

type Todos = {id?: string, title: string, completed: boolean, description: string, editing: boolean};

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
       id: "New Posted Id",
       title: "New Posted Todo",
       completed: false
      });
    setTodos([...todos, newTodo]);
  };
  const removeTodo = async (todo: Todos) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.log(error);
      setErrorMessage(error.response?.data?.message || "Unknown error");
    }
  };
  const editTodo = (todo: Todos) => {
    const updatedTodos = todos.map((t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: Todos) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setErrorMessage(error.response?.data?.message || "Unknown error");
    }
  };
  const deleteTodo = async (todo: Todos) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.log(error);
      setErrorMessage(error.response?.data?.message || "Unknown error");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
      <h4>Todos
        <FaPlusCircle onClick={createNewTodo} className="text-success float-end fs-3" />
        <FaPlusCircle onClick={postNewTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash className="text-danger float-end mt-1" id="wd-remove-todo"
                onClick={() => removeTodo(todo)} />
            <TiDelete className="text-danger float-end me-2 fs-3" id="wd-delete-todo"
                onClick={() => deleteTodo(todo)} />
            <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
            {!todo.editing
            ? ( <div>
              <input type="checkbox" className="form-check-input me-2" defaultChecked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked }) } />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title} </span>
              </div> )
              : (<FormControl className="w-50 float-start" defaultValue={todo.title}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, editing: false });
                    }
                  }}
                  onChange={(e) =>
                    updateTodo({ ...todo, title: e.target.value })
                  }
                />
              )}
          </ListGroupItem>
        ))}
      </ListGroup> <hr />
    </div>
);}

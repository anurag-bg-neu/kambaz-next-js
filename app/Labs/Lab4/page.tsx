"use client"
import './index.css';
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateVariable";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';
import TodoList from "../Lab4/ReduxExamples/todos/TodoList";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
      <Provider store={store}>
        <div  id="wd-lab4">
          <h2>Lab 4</h2>
          <ClickEvent />
          <PassingDataOnEvent />
          <PassingFunctions theFunction={sayHello} />
          <EventObject />
          <Counter />
          <BooleanStateVariables />
          <StringStateVariables />
          <DateStateVariable />
          <ObjectStateVariable />
          <ArrayStateVariable />
          <ParentStateComponent />
          <div>
            <h2>Redux Examples</h2>
            <ReduxExamples/>
          </div>
        </div>
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </Provider>
);}
"use client"
import { Button } from "react-bootstrap";

const hello = () => {
  alert("Hello World!");
};
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <Button className="me-2" variant="primary" onClick={hello} id="wd-hello-world-click">Hello World!</Button>
      <Button className="me-2" variant="primary" onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">Life is Good!</Button>
      <Button variant="primary" onClick={() => {
                hello();
                lifeIs("Great!");
              }} id="wd-life-is-great-click">Life is Great!</Button>
      <hr/>
    </div>
);}

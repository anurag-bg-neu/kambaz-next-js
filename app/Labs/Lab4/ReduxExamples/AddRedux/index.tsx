import { useSelector, useDispatch } from "react-redux";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { add } from "./addReducer";
import { RootState } from "../../store";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div className="w-25" id="wd-add-redux">
      <h1 className="d-flex">
        <div>Add</div> <div>Redux</div>
      </h1>
      <div className="d-flex">
        <h2 className="me-2">{`${a}`}</h2>
        <h2 className="me-2">+</h2>
        <h2 className="me-2">{`${b}`}</h2>
        <h2 className="me-2">=</h2>
        <h2 className="me-2">{`${sum}`}</h2>
      </div>
      <div className="d-flex">
        <FormControl className="w-25-child-inputs" type="number" defaultValue={`${a}`} onChange={(e) => setA(parseInt(e.target.value))} />
        <FormControl className="w-25-child-inputs"type="number" defaultValue={`${b}`} onChange={(e) => setB(parseInt(e.target.value))} />
        <div className="btn btn-success d-flex w-25-child-inputs" id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
          <span>Add</span> <span>Redux</span>
        </div>
      </div>
      <hr style={{width:"340px"}}/>
    </div>
  );
}
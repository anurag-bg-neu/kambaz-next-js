
import { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState(null);
  interface SerializableEvent {
    target: string;
    [key: string]: unknown;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const evt = e as unknown as SerializableEvent & { view?: unknown };
    evt.target = (e.target as Element).outerHTML;
    delete evt.view;
    (setEvent as React.Dispatch<React.SetStateAction<SerializableEvent | null>>)(evt);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}

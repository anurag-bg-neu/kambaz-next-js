import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link"> A1 - ENV + HTML </Link>
            <br />
            <div className="wd-assignments-desc">Multiple | <b>Not Available until</b> May 6 at 12:00am |</div>
            <div className="wd-assignments-desc"><b>Due</b> May 13 at 11:59pm | 100 pts</div>
        </li>
        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/234"  className="wd-assignment-link"> A2 - CSS + BOOTSTRAP </Link> <br />
            <div className="wd-assignments-desc">Multiple | <b>Not Available until</b> May 13 at 12:00am |</div>
            <div className="wd-assignments-desc"><b>Due</b> May 20 at 11:59pm | 100 pts</div>
        </li>
        <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/345"  className="wd-assignment-link"> A3 - JAVASCRIPT + REACT </Link> <br />
            <div className="wd-assignments-desc">Multiple | <b>Not Available until</b> May 20 at 12:00am |</div>
            <div className="wd-assignments-desc"><b>Due</b> May 27 at 11:59pm | 100 pts</div>
        </li>
      </ul>
    </div>
);}

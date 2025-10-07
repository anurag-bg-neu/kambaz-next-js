import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">John</span>{" "}
          <span className="wd-last-name">Wick</span></td>
      <td className="wd-login-id">001235579S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-11-02</td>
      <td className="wd-total-activity">10:21:32</td>
      </tr>
      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-10-01</td>
      <td className="wd-total-activity">12:21:32</td>
      </tr>
      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">001234111S</td>
      <td className="wd-section">S103</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-05-17</td>
      <td className="wd-total-activity">01:21:32</td>
      </tr>
      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">001235371S</td>
      <td className="wd-section">S104</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-03-11</td>
      <td className="wd-total-activity">10:02:32</td>
      </tr>
      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">John</span>{" "}
          <span className="wd-last-name">Cena</span></td>
      <td className="wd-login-id">001235551S</td>
      <td className="wd-section">S105</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-07-05</td>
      <td className="wd-total-activity">11:08:36</td>
      </tr>
    </tbody>
   </Table>
  </div>
);}
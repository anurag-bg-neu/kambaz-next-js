"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import "../../styles.css";

export default function PeopleTable() {
const { cid } = useParams(); // captures RS101 from /Courses/RS101/People/Table
const { users, enrollments } = db;

const usersInCourse = users.filter(user =>
  enrollments.some(enrolled => enrolled.course === cid && enrolled.user === user._id)
);

 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
    {usersInCourse.map((user) => (
     <tr key={user._id}>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span></td>
      <td className="wd-login-id">{user.loginId}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}</td>
      <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
    </tbody>
   </Table>
  </div>
);}
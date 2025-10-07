"use client";
import Link from "next/link";
import Form from "react-bootstrap/Form";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px" }}>
      <h3>Profile</h3>
      <Form>
        <Form.Group className="mb-2">
          <Form.Control defaultValue="john" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            defaultValue="john_wick@123"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control defaultValue="John" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control defaultValue="Wick" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control defaultValue="2025-09-22" type="date" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            defaultValue="john@northeastern.edu"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select defaultValue="STUDENT">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>
        <Link href="Signin" className="btn btn-danger w-100 mb-2">
          Sign out
        </Link>
      </Form>
    </div>
  );
}

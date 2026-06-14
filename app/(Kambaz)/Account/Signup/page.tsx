"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as client from "../client";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";

type User = {
    _id: string;
    username: string;
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    dob: string,
    role: string,
    loginId: string,
    section: string,
    lastActivity: string,
    totalActivity: string
}

export default function Signup() {
   const [user, setUser] = useState<User>(
  {
    "_id": "",
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "dob": "",
    "role": "",
    "loginId": "",
    "section": "",
    "lastActivity": "",
    "totalActivity": ""
  }
);
   const dispatch = useDispatch();

   const signup = async () => {
    let currentUser: null;
    try {
        currentUser = await client.signup(user);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          alert("Signup failed! User already exists.");
          redirect("/Account/Signin");
        } else {
          alert("Signup failed! Server side error.");
          console.error("Signup error:", error);
        }
        return;
      }
     if (!currentUser) return;
     dispatch(setCurrentUser(currentUser));
     redirect("/Account/Profile");
   };

  return (
    <div id="wd-signup-screen" style={{maxWidth: "400px"}}>
      <h3>Sign up</h3>
      <FormControl
      defaultValue={user.username}
      onChange={(e) => setUser({ ...user, username: e.target.value })}
      placeholder="username"
      className="mb-2"
      />
      <select
        className="form-control mb-2" id="wd-role"
        onChange={(e) => setUser({ ...user, role: e.target.value })}>
          <option value="">Select a role</option>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
      </select>
      <FormControl
      defaultValue={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="password"
      type="password"
      className="mb-2"
      />
      <FormControl
      defaultValue={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="verify password"
      type="password"
      className="mb-2"
      />
      <Button onClick={signup}
            id="wd-signin-btn"
            className="btn btn-primary w-100 mb-2">
            Sign up
      </Button>
      <Link
        href="/Account/Signin" >
          Sign in
      </Link>
    </div>
);}

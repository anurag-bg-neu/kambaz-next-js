"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as db from "../../Database";
import FormControl from "react-bootstrap/FormControl";

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
   const [credentials, setCredentials] = useState<User>(
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

   const signup = () => {
     const user = db.users.find(
       (u) =>
         u.username === credentials.username &&
         u.password === credentials.password
     );
     if (!user) return;
     dispatch(setCurrentUser(user));
     redirect("/Account/Profile");
   };
  return (
    <div id="wd-signup-screen" style={{maxWidth: "400px"}}>
      <h3>Sign up</h3>
      <FormControl
      defaultValue={credentials.username}
      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      placeholder="username"
      className="mb-2"
      />
      <FormControl
      defaultValue={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      placeholder="password"
      type="password"
      className="mb-2"
      />
      <FormControl
      defaultValue={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
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

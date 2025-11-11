"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap"

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

export default function Signin() {
 const [credentials, setCredentials] = useState<User>({});
 const dispatch = useDispatch();

 const signin = () => {
   const user = db.users.find(
     (u) =>
       u.username === credentials.username &&
       u.password === credentials.password
   );
   if (!user) return;
   dispatch(setCurrentUser(user));
   redirect("/Dashboard");
 };

  return (
    <div id="wd-signin-screen" style={{maxWidth: "400px"}}>
      <h1>Sign in</h1>
      <FormControl id="wd-username"
             defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             placeholder="password"
             type="password"
             className="mb-2"/>
      <Button onClick={signin}
            id="wd-signin-btn"
            className="btn btn-primary w-100 mb-2">
            Sign in
      </Button>
      <Link id="wd-signup-link"
        href="/Account/Signup">
          Sign up
      </Link>
    </div>
);}

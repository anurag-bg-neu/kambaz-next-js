import Link from "next/link";
import FormControl from "react-bootstrap/FormControl";

export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{maxWidth: "400px"}}>
      <h1>Sign in</h1>
      <FormControl id="wd-username"
            defaultValue="john_wick"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             defaultValue="john_wick@123"
             placeholder="password"
             type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            href="/Dashboard"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div>);}

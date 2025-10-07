import Link from "next/link";
import FormControl from "react-bootstrap/FormControl";

export default function Signup() {
  return (
    <div id="wd-signup-screen" style={{maxWidth: "400px"}}>
      <h3>Sign up</h3>
      <FormControl placeholder="username" className="mb-2" defaultValue="john_wick" />
      <FormControl placeholder="password" type="password" className="mb-2" defaultValue="john_wick@123" />
      <FormControl placeholder="verify password" type="password" className="mb-2" defaultValue="john_wick@123"/>
      <Link  href="Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link>
      <Link  href="Signin" > Sign in </Link>
    </div>
);}

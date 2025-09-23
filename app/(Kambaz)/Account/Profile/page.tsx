import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="john" className="wd-username" placeholder="username" /><br/>
      <input defaultValue="john_wick@123" type="password" className="wd-password" placeholder="password" /><br/>
      <input defaultValue="John"id="wd-firstname"  placeholder="First Name" /><br/>
      <input defaultValue="Wick" id="wd-lastname" placeholder="Last Name" /><br/>
      <input defaultValue="2025-09-22" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@northeastern.edu" type="email" id="wd-email" placeholder="Email" /><br/>
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="Signin" > Sign out </Link>
    </div>
);}

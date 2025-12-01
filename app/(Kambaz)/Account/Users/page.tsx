"use client";
import { useState, useEffect } from "react";
import PeopleTable from "../../Courses/[cid]/People/Table/page";
import * as client from "../client";
import { redirect } from "next/dist/client/components/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

type User = {
  _id: string,
  username?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  dob?: string,
  role?: string,
  loginId?: string,
  section?: string,
  lastActivity?: string,
  totalActivity?: string
}

export default function Users() {
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const [ users, setUsers ] = useState<User[]>([]);
 const [ role, setRole ] = useState("");
 const [ name, setName ] = useState("");

 const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

 const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

 const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

 const fetchUsers = async () => {
   const users = await client.findAllUsers();
   setUsers(users);
   setName("");
   setRole("");
 };

 useEffect(() => {
   if (!currentUser) {
     redirect("/Account/Signin");
   }
   fetchUsers();
 }, [currentUser]);

 return (
   <div>
     <h3>Users</h3>
     <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
     </button>
     <FormControl value={name} onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
     </select>
     <PeopleTable allusers={users} fetchUsers={fetchUsers} />
   </div>
);}

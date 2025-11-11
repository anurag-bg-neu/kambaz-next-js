"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { FormControl } from "react-bootstrap";


type User = {
  _id?: string,
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

export default function Profile() {
 const [profile, setProfile] = useState<User>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);

 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
   setProfile(currentUser);
 };

 const signout = () => {
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };

 useEffect(() => {
   fetchProfile();
 }, []);

 return (
   <div className="wd-profile-screen" style={{maxWidth: "400px"}}>
     <h3>Profile</h3>
     {profile && (
       <div>
         <FormControl id="wd-username" className="mb-2"
           defaultValue={profile.username}
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) } />
         <FormControl id="wd-password" className="mb-2"
           defaultValue={profile.password}
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) } />
         <FormControl id="wd-firstname" className="mb-2"
           defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) } />
         <FormControl id="wd-lastname" className="mb-2"
           defaultValue={profile.lastName}
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />
         <FormControl id="wd-dob" className="mb-2" type="date"
           defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
         <FormControl id="wd-email" className="mb-2"
           defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
         <select className="form-control mb-2" id="wd-role"
           onChange={(e) => setProfile({ ...profile, role: e.target.value })} >
           <option value="USER">User</option>
           <option value="ADMIN">Admin</option>
           <option value="FACULTY">Faculty</option>{" "}
           <option value="STUDENT">Student</option>
         </select>
         <div onClick={signout} id="wd-signout-btn" className="btn btn-danger w-100 mb-2">
           Sign out
         </div>
       </div>
     )}
   </div>
);}

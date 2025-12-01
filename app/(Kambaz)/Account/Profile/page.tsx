"use client";
import * as client from "../client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect, useCallback } from "react";
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
 const [ profile, setProfile ] = useState<User>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);

 const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
    alert("Profile updated successfully.");
    signout();
    redirect("/");
  };

 const signout = async () => {
   await client.signout();
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };

 const toDateOnly = (iso : string | undefined) => {
    if (!iso) return "";
    return iso.split("T")[0];
  };

  const fetchProfile = useCallback(() => {
   if (!currentUser) {
    return;
   }
   setProfile(currentUser);
 }, [currentUser]);

 useEffect(() => {
   fetchProfile();
 }, [fetchProfile]);

 return (
   <div className="wd-profile-screen" style={{maxWidth: "400px"}}>
     <h3>Profile</h3>
     {profile && (
       <div>
         <FormControl id="wd-username" className="mb-2"
           value={profile.username || "" }
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) } />
         <FormControl id="wd-password" className="mb-2"
           value={profile.password || "" }
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) } />
         <FormControl id="wd-firstname" className="mb-2"
           value={profile.firstName || "" }
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) } />
         <FormControl id="wd-lastname" className="mb-2"
           value={profile.lastName || "" }
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />
         <FormControl id="wd-dob" className="mb-2" type="date"
           value={toDateOnly(profile.dob) || "" }
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
         <FormControl id="wd-email" className="mb-2"
           value={profile.email || "" }
           onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
         <select className="form-control mb-2" id="wd-role"
           value={profile.role || "" }
           onChange={(e) => setProfile({ ...profile, role: e.target.value })} >
           <option value="USER">User</option>
           <option value="ADMIN">Admin</option>
           <option value="FACULTY">Faculty</option>{" "}
           <option value="STUDENT">Student</option>
         </select>
         <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
         <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
           Sign out
         </button>
       </div>
     )}
   </div>
);}

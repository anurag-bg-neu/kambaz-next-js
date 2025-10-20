"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
 return (
   <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
     <Link href="Signin" className={`list-group-item border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`}> Signin </Link>
     <Link href="Signup" className={`list-group-item border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}> Signup </Link>
     <Link href="Profile" className={`list-group-item border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}> Profile </Link>
   </div>
);}

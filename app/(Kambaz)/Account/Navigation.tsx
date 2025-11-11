"use client";
import { redirect } from "next/dist/client/components/navigation";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavLink } from "react-bootstrap";
import { NavItem } from "reactstrap";
import { Nav } from "react-bootstrap";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  const loadPage = (link : string) => {
    redirect(`/Account/${link}`);
  }
 return (
  <Nav>
   <div id="wd-account-navigation" className="list-group wd fs-5 rounded-0">
      {links.map((link) => (
          <NavItem key={link}>
            <NavLink
              onClick={() => loadPage(link)}
              className={`list-group-item ${pathname === `/Account/${link}` ? "active" : ""} border-0`}
              >
                {link}
            </NavLink>
          </NavItem>
      ))}
   </div>
  </Nav>
);}

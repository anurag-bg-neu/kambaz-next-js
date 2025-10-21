'use client';
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import KambazNavigationToggle from "./KambazNavigationToggle";
import { FaAlignJustify } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import './styles.css';

export default function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {

  const [showMenuKambaz, setShowMenuKambaz] = useState(false); {/*Account, Dashboard, Labs etc.*/}
  const [showMenuCourse, setShowMenuCourse] = useState(false); {/*Home, Module, Piazza etc.*/}
  const [cid, setCid] = useState<string>("");
  const course = courses.find((course) => course._id === cid);
  useEffect(() => {
    params.then(data => setCid(data.cid));
  }, [params]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        {/* Overlay Kambaz Dropdown for small screens. Account, Dashboard, Labs etc. */}
        {showMenuKambaz && (
          <div className="overlay-menu-kambaz d-md-none" onClick={() => {setShowMenuCourse(false);}}>
            <div className="dropdown-menu-overlay-kambaz" onClick={(e) => e.stopPropagation()}>
              <KambazNavigationToggle />
            </div>
          </div>
        )}

        <div className="courseBackground">
            <FaAlignJustify
              className="me-4 fs-4 mb-1 d-md-none"
              onClick={() => {setShowMenuKambaz(!showMenuKambaz); setShowMenuCourse(false);}}
              style={{ cursor: "pointer" }} />
            <div className="d-flex align-items-center">
              <Breadcrumb course={course} />
            </div>
            <div className="d-md-none"
              onClick={() => {setShowMenuCourse(!showMenuCourse); setShowMenuKambaz(false);}}
              style={{ cursor: "pointer" }}>
              {showMenuCourse ? <IoIosClose className="fs-1" /> : <IoIosArrowDown className="fs-1" />}
            </div>
            <div className="btn btn-secondary btn-lg d-none d-md-block studentView">
              Student View
            </div>
        </div>
      </h2>

      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar for large screens. Home, Module, Piazza etc.*/}
        <div className="d-none d-md-block">
          <CourseNavigation params={params} />
        </div>

        {/* Overlay Dropdown for small screens. ToggleMenu for Arrow-Down*/}
        {showMenuCourse && (
          <div className="overlay-menu d-md-none" onClick={() => setShowMenuCourse(false)}>
            <div className="dropdown-menu-overlay" onClick={(e) => e.stopPropagation()}>
              <CourseNavigation params={params} />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}

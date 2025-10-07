'use client';
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import KambazNavigation from "./KambazNavigation";
import { FaAlignJustify } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

import './styles.css';

export default function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {

  const [showMenuCourse, setShowMenuCourse] = useState(false);
  const [showMenuKambaz, setShowMenuKambaz] = useState(false);
  const [cid, setCid] = useState<string>("");

  useEffect(() => {
    params.then(data => setCid(data.cid));
  }, [params]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        {/* Overlay Kambaz Dropdown for small screens */}
        {showMenuKambaz && (
          <div className="overlay-menu-kambaz d-md-none" onClick={() => setShowMenuCourse(false)}>
            <div className="dropdown-menu-overlay-kambaz" onClick={(e) => e.stopPropagation()}>
              <KambazNavigation />
            </div>
          </div>
        )}
        <div className="courseBackground">
            <FaAlignJustify
              className="me-4 fs-4 mb-1 d-md-none"
              onClick={() => setShowMenuKambaz(!showMenuKambaz)}
              style={{ cursor: "pointer" }}
            />
            <div className="d-flex align-items-center">
              Courses {cid}
            </div>
            <div
            className="d-md-none"
            onClick={() => setShowMenuCourse(!showMenuCourse)}
            style={{ cursor: "pointer" }}
            >
              <IoIosArrowDown />
            </div>
            <div className="btn btn-secondary btn-lg d-none d-md-block studentView">
              Student View
            </div>
        </div>
      </h2>

      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar for large screens */}
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        {/* Overlay Dropdown for small screens */}
        {showMenuCourse && (
          <div className="overlay-menu d-md-none" onClick={() => setShowMenuCourse(false)}>
            <div className="dropdown-menu-overlay" onClick={(e) => e.stopPropagation()}>
              <CourseNavigation />
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

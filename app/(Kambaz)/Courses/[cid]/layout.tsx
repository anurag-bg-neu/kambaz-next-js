'use client';
import CourseNavigation from "./Navigation";
import { setShowMenuKambaz, setShowMenuCourse, setFaAlignCourseNav } from "../CoursesReducer";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { FaAlignJustify } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import KambazNavigationToggle from "./KambazNavigationToggle";
import Breadcrumb from "./Breadcrumb";
import './styles.css';

export default function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {

  const { cid } = useParams();
  const { courses, showMenuKambaz, showMenuCourse, FaAlignCourseNav } = useSelector((state: RootState) => state.coursesReducer);
  type Course = { _id: string};
  const course = courses.find((course: Course) => course._id === cid); // course is passed to Breadcrumb component.
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const dispatch = useDispatch();

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        {/* Overlay Kambaz Dropdown for small screens. Account, Dashboard, Labs etc. */}
        {showMenuKambaz && (
          <div className="overlay-menu-kambaz d-md-none" onClick={() => dispatch(setShowMenuCourse(false))}>
            <div className="dropdown-menu-overlay-kambaz" onClick={(e) => e.stopPropagation()}>
              <KambazNavigationToggle />
            </div>
          </div>
        )}

        <div className="courseBackground">
            <div>
              <FaAlignJustify
              className="me-4 mb-1 fs-4"
              onClick={() => {dispatch(setFaAlignCourseNav(!FaAlignCourseNav));
                dispatch(setShowMenuKambaz(!showMenuKambaz));
                dispatch(setShowMenuCourse(false));}}
              style={{ cursor: "pointer" }} />
              <Breadcrumb course={course} />
            </div>
            <div className="d-md-none"
              onClick={() => {dispatch(setShowMenuCourse(!showMenuCourse)); dispatch(setShowMenuKambaz(false));}}
              style={{ cursor: "pointer" }}>
              {showMenuCourse ? <IoIosClose className="fs-1" /> : <IoIosArrowDown className="fs-1" />}
            </div>
            <div className="btn btn-secondary btn-lg d-none d-md-block studentView">
              {currentUser?.role} View {/* Student, Instructor, Admin etc. */}
            </div>
        </div>
      </h2>

      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar for large screens. Home, Module, Piazza etc.*/}
        {FaAlignCourseNav &&
          <div className="d-none d-md-block">
            <CourseNavigation params={params} />
          </div>
        }

        {/* Overlay Dropdown for small screens. ToggleMenu for Arrow-Down*/}
        {showMenuCourse && (
          <div className="overlay-menu d-md-none" onClick={() => dispatch(setShowMenuCourse(false))}>
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

import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React JS course cover" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer with ReactJS.
              </p>
              <button> Go </button><br /><br />
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React JS course cover" width={200} height={150} />
            <div>
              <h5> CS2345 Node JS </h5>
              <p className="wd-dashboard-course-title">
                Full NodeJS Course.
              </p>
              <button> Go </button><br /><br />
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React JS course cover" width={200} height={150} />
            <div>
              <h5> CS3456 Express JS </h5>
              <p className="wd-dashboard-course-title">
                Full ExpressJS Course.
              </p>
              <button> Go </button><br /><br />
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React JS course cover" width={200} height={150} />
            <div>
              <h5> CS4567 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                Full MongoDB Course.
              </p>
              <button> Go </button><br /><br />
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

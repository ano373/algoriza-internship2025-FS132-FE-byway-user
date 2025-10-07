import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router";

interface CourseBreadcrumbProps {
  courseTitle: string;
}

export function CourseBreadcrumb({ courseTitle }: CourseBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "flex", alignItems: "center", margin: "0 8px" }}>
          <HiChevronRight />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li style={{ display: "flex", alignItems: "center", margin: "0 8px" }}>
          <HiChevronRight />
        </li>
        <li className="text-blue-500" aria-current="page">
          {courseTitle}
        </li>
      </ol>
    </nav>
  );
}

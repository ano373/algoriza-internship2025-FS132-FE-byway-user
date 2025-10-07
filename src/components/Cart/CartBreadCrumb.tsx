import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router";

export function CartBreadCrumb() {
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
          <Link to="/courses">Courses</Link>
        </li>
        <li style={{ display: "flex", alignItems: "center", margin: "0 8px" }}>
          <HiChevronRight />
        </li>
        <li className="text-blue-500" aria-current="page">
          Shopping Cart
        </li>
      </ol>
    </nav>
  );
}

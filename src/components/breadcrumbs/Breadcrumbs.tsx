import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();

  console.log("location", location);

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="h-25 d-flex align-items-center bg-secondary">
      <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
      {pathSegments.map((segment, index) => {
        // Construct the path for the current segment
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return index === pathSegments.length - 1 ? (
          <Breadcrumb.Item key={index} className="text-capitalize" active>
            {segment}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item href={href} key={index} className="text-capitalize">
            {segment}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

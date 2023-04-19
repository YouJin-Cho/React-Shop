import { Link, useLocation } from "react-router-dom";
import styles from './BreadCrumb.module.css'

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const pathElements = pathname.split("/").filter((element) => element);

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li className={styles.breadcrumbItem}>
          {pathname !== "/" ? (
            <Link to="/">Home &nbsp; &gt;</Link>
          ) : (
            null
          )}
        </li>
        {pathElements.map((element, index) => {
          const url = `/${pathElements.slice(0, index + 1).join("/")}`;
          const lastPath = index === pathElements.length - 1;
          return (
            <li
              key={element}
              className={`breadcrumb-item${lastPath ? " active" : ""}`}
              aria-current={lastPath ? "page" : undefined}
            >
              {lastPath ? (
                element
              ) : (
                <Link to={url}>{element}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  )
}

export default BreadCrumb
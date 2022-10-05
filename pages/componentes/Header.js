import styles from "../../styles/header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <nav className={`${styles.container_header} navbar navbar-expand-lg p-4`}>
        <div className="container-fluid">
          <Link
            className="none"
            href="/
          "
          >
            SP
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className={`${styles.li} navbar-nav`}>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className={`${styles.li}nav-item`}>
                <a className="nav-link text-white" href="#">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white">Redes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

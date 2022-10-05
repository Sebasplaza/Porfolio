const Fotter = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black p-4">
        <div className="container-fluid ${styles.container}">
          <a className="navbar-brand text-light" href="#">
            SP
          </a>
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
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active text-danger"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger" href="#">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger" href="#">
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-danger">Redes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Fotter;

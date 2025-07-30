<nav
  className=" container-fluid navbar navbar-expand-lg navbar-light "
  style={{ backgroundColor: "black", color: "white" }}
>
  <div className="container-fluid  p-2 ms-3 me-3">
    <a className="navbar-brand" href="#">
      <img src={logo} style={{ width: "80px", height: "auto" }} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ color: "white" }}
    >
      <span className="navbar-toggler-icon" style={{ color: "white" }} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link active"
            style={{ color: "white" }}
            aria-current="page"
            href="#"
          >
            Popular
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            style={{ color: "white" }}
          >
            Toprated
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            style={{ color: "white" }}
          >
            Upcoming
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </form>
    </div>
  </div>
</nav>;

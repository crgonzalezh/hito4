import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-link nav-link">🍕 Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔐 Register</button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-link nav-link">
                🛒 Total: ${total.toLocaleString()}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

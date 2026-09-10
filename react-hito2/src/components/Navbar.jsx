function Navbar({ cart = [] }) {
  
  const token = false; 
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const formatCLP = (value) => value.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: '#fa6540' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light btn-sm me-2">🍕 Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm me-2">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm me-2">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm">🔐 Register</button>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex">
            <button className="btn btn-outline-warning text-white">
              🛒 Total: ${formatCLP(total)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
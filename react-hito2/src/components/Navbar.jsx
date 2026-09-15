import { Link } from "react-router-dom";

function Navbar({ cart = [] }) {
  const token = false; 

  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);
  const formatCLP = (value) => value.toLocaleString("es-CL");

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark px-3" 
      style={{ backgroundColor: '#fa6540' }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <Link to="/" className="navbar-brand me-3 text-white text-decoration-none">
          </Link>
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Inicio</Link>

          {token ? (
            <>
              <Link to="/perfil" className="btn btn-outline-light btn-sm">🔓 Perfil</Link>
              <button className="btn btn-outline-light btn-sm">
                🔓 Perfil
              </button>
                
              <button className="btn btn-outline-light btn-sm">
                🔒 Perfil
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                🔐 Login
              </Link>
              <Link to="/formulario" className="btn btn-outline-light btn-sm">🔐 Registo</Link>
            </>
          )}
        </div>

        <div className="d-flex">
          <button className="btn btn-outline-light text-info">
            🛒 Total: ${formatCLP(total)}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
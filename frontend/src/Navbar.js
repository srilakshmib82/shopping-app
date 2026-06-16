import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({

  darkMode,
  setDarkMode,

  cart,

  search,
  setSearch,

  user,
  setUser,

  setShowAuth

}) {

  return (

    <nav className="navbar">

  {/* TOP ROW */}

  <div className="navbar-top">

    {/* LOGO */}

    <h1 className="logo">
      Shopping.ly
    </h1>

    {/* SEARCH */}

    <input
      type="text"
      placeholder="Search products..."
      className="navbar-search"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

    {/* BUTTONS */}

    <div className="nav-buttons">

      {user ? (
        <>
          <h3 className="user-name">
            👋 {user.name}
          </h3>

          <button
            className="nav-btn"
            onClick={() => {

              localStorage.removeItem(
                "user"
              );

              setUser(null);

            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="nav-btn"
          onClick={() =>
            setShowAuth(true)
          }
        >
          Login
        </button>
      )}

      <button
        className="theme-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {
          darkMode
            ? "☀️ Light"
            : "🌙 Dark"
        }
      </button>

    </div>

  </div>

  {/* BOTTOM ROW */}

  <div className="nav-links">

    <Link to="/">
      Home
    </Link>

    <Link to="/products">
      Products
    </Link>

    <Link to="/wishlist">
      Wishlist
    </Link>

    <Link to="/profile">
      Profile
    </Link>

    <Link to="/orders">
      Orders
    </Link>

    <Link to="/add-product">
      Add Product
    </Link>

    <Link to="/compare">
      Compare
    </Link>

    <Link to="/cart">
      Cart ({cart.length})
    </Link>

    <Link to="/admin">
      Admin
    </Link>

    <Link to="/notifications">
      🔔 Notifications
    </Link>

  </div>

</nav>
  );
}

export default Navbar;
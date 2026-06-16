// App.js

import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useState,
  useEffect,
} from "react";

import Navbar from "./Navbar";
import AuthModal from "./AuthModal";

import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Orders from "./Orders";
import Admin from "./Admin";
import Checkout from "./Checkout";
import Compare from "./Compare";
import AddProduct from "./AddProduct";
import Profile from "./Profile";
import Notifications
from "./Notifications";

import {
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  /* THEME */

  const [darkMode,
    setDarkMode] =
    useState(true);

  /* AUTH */

  const [showAuth,
    setShowAuth] =
    useState(false);

  const [user,
    setUser] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "user"
        )
      )
    );

  /* COMPARE */

  const [compare,
    setCompare] =
    useState([]);
const [search,
  setSearch] =
  useState("");

    

  /* PRODUCTS */

  /* PRODUCTS */

const [products,
  setProducts] =
  useState([]);

  /* CART */

  const [cart,
    setCart] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || []
    );
    

  /* WISHLIST */

  const [wishlist,
    setWishlist] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "wishlist"
        )
      ) || []
    );

  /* ORDERS */

  const [orders,
    setOrders] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || []
    );
/* FETCH PRODUCTS FROM MONGODB */

useEffect(() => {

  fetch("https://shopping-app-ghpk.onrender.com/api/products")

    .then((res) =>
      res.json()
    )

    .then((data) => {

      setProducts(data);

    })

    .catch((err) => {

      console.log(
        "Error loading products:",
        err
      );

    });

}, []);
  /* LOCAL STORAGE */

  

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);
 
 
  return (

    <BrowserRouter>

      <div
        className={
          darkMode
            ? "dark-theme"
            : "light-theme"
        }
      >

         <Navbar

  darkMode={darkMode}
  setDarkMode={setDarkMode}

  cart={cart}

  search={search}
  setSearch={setSearch}

  user={user}
  setUser={setUser}

  setShowAuth={setShowAuth}

/>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
<Route
  path="/profile"

  element={

    <Profile

      user={user}

      orders={orders}

      wishlist={wishlist}

    />
  }
/>
<Route

  path="/notifications"

  element={
    <Notifications />
  }

/>
<Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      setCart={setCart}
      orders={orders}
      setOrders={setOrders}
    />
  }
/>
          <Route
  path="/products"
  element={

    <Products

      products={products}

      search={search}

      cart={cart}
      setCart={setCart}

      wishlist={wishlist}
      setWishlist={setWishlist}

      compare={compare}
      setCompare={setCompare}

    />
  }
/>

          <Route
            path="/product/:id"
            element={
              <ProductDetails

                products={products}

                cart={cart}
                setCart={setCart}

                wishlist={wishlist}
                setWishlist={setWishlist}

                compare={compare}
                setCompare={setCompare}

              />
            }
          />

         

          <Route
            path="/checkout"
            element={
              <Checkout

                cart={cart}
                setCart={setCart}

              />
            }
          />
          <Route
  path="/profile"
  element={
    <Profile
      user={user}
      orders={orders}
      wishlist={wishlist}
    />
  }
/>

          <Route
            path="/wishlist"
            element={
              <Wishlist

                wishlist={wishlist}
                setWishlist={setWishlist}

                cart={cart}
                setCart={setCart}

              />
            }
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
  path="/admin"
  element={
    <Admin
      products={products}
      setProducts={setProducts}
      cart={cart}
      wishlist={wishlist}
      orders={orders}
    />
  }
/>

          <Route
            path="/compare"
            element={
              <Compare

                compare={compare}
                setCompare={setCompare}

              />
            }
          />

          <Route
            path="/add-product"
            element={
              <AddProduct

                products={products}
                setProducts={setProducts}

              />
            }
          />

        </Routes>

        <AuthModal

          show={showAuth}
          setShow={setShowAuth}
          setUser={setUser}

        />

        <ToastContainer
          position="top-right"
          autoClose={2000}
        />

      </div>

    </BrowserRouter>
  );
}

export default App;
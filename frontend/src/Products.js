
// Products.js

import "./Products.css";

import {
  Link,
  useSearchParams
} from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

import { toast } from "react-toastify";

function Products({

  products = [],

  search = "",

  cart,
  setCart,

  wishlist,
  setWishlist

}) {

  /* URL CATEGORY */

  const [searchParams] =
    useSearchParams();

  const [category, setCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("default");

  useEffect(() => {

    const urlCategory =
      searchParams.get("category");

    if (urlCategory) {

      setCategory(urlCategory);

    } else {

      setCategory("all");

    }

  }, [searchParams]);

  /* =========================
     FILTER + SORT PRODUCTS
  ========================= */

  const filteredProducts =

    [...products]

      .filter((item) => {

        const matchesSearch =

          item.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =

          category === "all"

            ? true

            : item.category ===
              category;

        return (
          matchesSearch &&
          matchesCategory
        );

      })

      .sort((a, b) => {

        if (sortBy === "low") {

          return (
            a.price -
            b.price
          );

        }

        if (sortBy === "high") {

          return (
            b.price -
            a.price
          );

        }

        return 0;

      });

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = (
    product
  ) => {

    const existing =

      cart.find(
        (item) =>
          item._id ===
          product._id
      );

    if (existing) {

      const updated =

        cart.map((item) =>

          item._id ===
          product._id

            ? {

                ...item,

                quantity:
                  item.quantity + 1

              }

            : item
        );

      setCart(updated);

    } else {

      setCart([

        ...cart,

        {
          ...product,
          quantity: 1
        }

      ]);
    }

    toast.success(
      "Added To Cart 🛒"
    );
  };

  /* =========================
     ADD TO WISHLIST
  ========================= */

  const addToWishlist = (
    product
  ) => {

    const exists =

      wishlist.find(
        (item) =>
          item._id ===
          product._id
      );

    if (exists) {

      toast.error(
        "Already In Wishlist ❤️"
      );

      return;
    }

    setWishlist([

      ...wishlist,

      product

    ]);

    toast.success(
      "Added To Wishlist ❤️"
    );
  };

  return (

    <div className="products-container">

      <h1 className="products-title">

        🛍️ Products

      </h1>

      {/* CATEGORY FILTER */}

      <div className="filter-buttons">

        <button
          onClick={() =>
            setCategory("all")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setCategory("mobile")
          }
        >
          Mobiles
        </button>

        <button
          onClick={() =>
            setCategory("laptop")
          }
        >
          Laptops
        </button>

        <button
          onClick={() =>
            setCategory("watch")
          }
        >
          Watches
        </button>

        <button
          onClick={() =>
            setCategory("audio")
          }
        >
          Audio
        </button>

        <button
          onClick={() =>
            setCategory("camera")
          }
        >
          Cameras
        </button>

        <button
          onClick={() =>
            setCategory("clothing")
          }
        >
          Clothing
        </button>

        <button
          onClick={() =>
            setCategory("grocery")
          }
        >
          Groceries
        </button>

        <button
          onClick={() =>
            setCategory("accessories")
          }
        >
          Accessories
        </button>

        <button
          onClick={() =>
            setCategory("home")
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            setCategory("toys")
          }
        >
          Toys
        </button>

        <button
          onClick={() =>
            setCategory("books")
          }
        >
          Books
        </button>

      </div>

      {/* SORTING */}

      <div
        className="sort-container"
      >

        <select

          value={sortBy}

          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }

        >

          <option value="default">

            Sort Products

          </option>

          <option value="low">

            Price: Low → High

          </option>

          <option value="high">

            Price: High → Low

          </option>

        </select>

      </div>

      {/* NO PRODUCTS */}

      {
        filteredProducts.length === 0 && (

          <div className="no-products">

            <h2>

              No Products Found

            </h2>

          </div>
        )
      }

      {/* PRODUCTS GRID */}

      <div className="products-grid">

        {
          filteredProducts.map(
            (product) => (

              <div

                key={product._id}

                className="product-card"

              >

                <img

                  src={product.image}

                  alt={product.name}

                  className="product-image"

                />

                <div className="product-info">

                  <h2 className="product-name">

                    {product.name}

                  </h2>

                  <p className="product-price">

                    ₹{product.price}

                  </p>

                  <p className="product-stock">

                    Stock:
                    {" "}
                    {product.stock}

                  </p>

                  <p className="discount-text">

                    {product.discount}% OFF

                  </p>

                </div>

                <div className="product-buttons">

                  <button

  className="cart-btn"

  disabled={
    product.stock === 0
  }

  onClick={() =>
    addToCart(product)
  }

>

  {
    product.stock === 0

      ? "Out Of Stock"

      : "Add To Cart"
  }

</button>

                  <button

                    className="wishlist-btn"

                    onClick={() =>
                      addToWishlist(
                        product
                      )
                    }

                  >

                    Wishlist

                  </button>

                </div>

                <Link
                  to={`/product/${product._id}`}
                >

                  <button
                    className="details-btn"
                  >

                    View Details

                  </button>

                </Link>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}

export default Products;
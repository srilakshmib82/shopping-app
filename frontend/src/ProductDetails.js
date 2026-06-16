// ProductDetails.js

import {
  useParams,
  Link,
  useNavigate
} from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

import {
  toast
} from "react-toastify";

import "./ProductDetails.css";

function ProductDetails({

  products = [],

  cart,
  setCart,

  wishlist,
  setWishlist,

  compare,
  setCompare

}) {

  const { id } = useParams();

  const navigate =
    useNavigate();

  const product =

    products.find(
      (item) =>
        item._id === id
    );

  /* =========================
     STATES
  ========================= */

  const [reviews,
    setReviews] =
    useState([]);

  const [username,
    setUsername] =
    useState("");

  const [comment,
    setComment] =
    useState("");

  const [rating,
    setRating] =
    useState(5);

  /* =========================
     LOAD REVIEWS
  ========================= */

  useEffect(() => {

    const savedReviews =

      JSON.parse(
        localStorage.getItem(
          `reviews-${id}`
        )
      ) || [];

    setReviews(savedReviews);

  }, [id]);

  /* =========================
     RECENTLY VIEWED
  ========================= */

  useEffect(() => {

    if (!product) return;

    let recentProducts =

      JSON.parse(
        localStorage.getItem(
          "recentProducts"
        )
      ) || [];

    recentProducts =
      recentProducts.filter(
        (item) =>
          item._id !==
          product._id
      );

    recentProducts.unshift(
      product
    );

    recentProducts =
      recentProducts.slice(0, 6);

    localStorage.setItem(

      "recentProducts",

      JSON.stringify(
        recentProducts
      )
    );

  }, [product]);

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = () => {

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
     BUY NOW
  ========================= */

  const buyNow = () => {

    addToCart();

    navigate("/checkout");
  };

  /* =========================
     WISHLIST
  ========================= */

  const addToWishlist = () => {

    const exists =

      wishlist.find(
        (item) =>
          item._id ===
          product._id
      );

    if (exists) {

      toast.error(
        "Already In Wishlist"
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

  /* =========================
     COMPARE
  ========================= */

  const addToCompare = () => {

    const exists =

      compare.find(
        (item) =>
          item._id ===
          product._id
      );

    if (exists) {

      toast.error(
        "Already Added"
      );

      return;
    }

    if (
      compare.length >= 2
    ) {

      toast.error(
        "Only 2 Products Allowed"
      );

      return;
    }

    setCompare([

      ...compare,

      product
    ]);

    toast.success(
      "Added To Compare ⚡"
    );
  };

  /* =========================
     REVIEW
  ========================= */

  const submitReview = () => {

    if (
      !username ||
      !comment
    ) {

      toast.error(
        "Fill All Fields"
      );

      return;
    }

    const newReview = {

      username,

      comment,

      rating,

      date:
        new Date()
          .toLocaleString()
    };

    const updatedReviews = [

      newReview,

      ...reviews
    ];

    setReviews(
      updatedReviews
    );

    localStorage.setItem(

      `reviews-${id}`,

      JSON.stringify(
        updatedReviews
      )
    );

    setUsername("");

    setComment("");

    setRating(5);

    toast.success(
      "Review Added ⭐"
    );
  };

  /* =========================
     AVERAGE RATING
  ========================= */

  const averageRating =

    reviews.length > 0

      ? (

          reviews.reduce(
            (acc, item) =>
              acc + item.rating,
            0
          ) / reviews.length

        ).toFixed(1)

      : 0;

  /* =========================
     RELATED
  ========================= */

  const relatedProducts =

    products.filter(
      (item) =>

        item.category ===
          product?.category

        &&

        item._id !==
          product?._id
    );

  /* =========================
     RECOMMENDED
  ========================= */

  const recommendedProducts =

    products.filter(
      (item) =>

        item._id !==
          product?._id

        &&

        Math.abs(
          item.price -
          product?.price
        ) < 20000
    );

  /* =========================
     NOT FOUND
  ========================= */

  if (!product) {

    return (

      <h1 className="not-found">

        Product Not Found

      </h1>
    );
  }

  return (

    <div className="details-container">

      {/* PRODUCT */}

      <div className="details-card">

        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />

        <div className="details-info">

          <h1>
            {product.name}
          </h1>

          <h2>
            ₹{product.price}
          </h2>

          <p>

            📦 Stock:
            {" "}
            {product.stock}

          </p>

          <p className="discount">

            🔥 {product.discount}% OFF

          </p>

          <div className="rating-box">

            ⭐ {averageRating}/5

            <span>

              (
              {reviews.length}
              {" "}
              reviews)

            </span>

          </div>

          {/* BUTTONS */}

          <div className="details-buttons">

            <button
              onClick={addToCart}
              className="cart-btn"
            >

              Add To Cart

            </button>

            <button
              onClick={addToWishlist}
              className="wishlist-btn"
            >

              Wishlist

            </button>

            <button
              onClick={addToCompare}
              className="compare-btn"
            >

              Compare

            </button>

          </div>

          <button
            className="buy-btn"
            onClick={buyNow}
          >

            Buy Now

          </button>

        </div>

      </div>

      {/* RELATED */}

      <div className="related-section">

        <h2>
          Related Products
        </h2>

        <div className="related-grid">

          {
            relatedProducts.map(
              (item) => (

                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                >

                  <div
                    className="related-card"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price}
                    </p>

                  </div>

                </Link>
              )
            )
          }

        </div>

      </div>

      {/* RECOMMENDED */}

      <div className="recommended-section">

        <h2>
          🎯 Recommended
        </h2>

        <div className="recommended-grid">

          {
            recommendedProducts
              .slice(0, 4)

              .map((item) => (

                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                >

                  <div
                    className="recommended-card"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price}
                    </p>

                    <button>

                      View Product

                    </button>

                  </div>

                </Link>
              ))
          }

        </div>

      </div>

      {/* RECENT */}

      <div className="recent-section">

        <h2>
          👀 Recently Viewed
        </h2>

        <div className="recent-grid">

          {
            JSON.parse(
              localStorage.getItem(
                "recentProducts"
              )
            )

            ?.filter(
              (item) =>
                item._id !==
                product._id
            )

            .map((item) => (

              <Link
                to={`/product/${item._id}`}
                key={item._id}
              >

                <div
                  className="recent-card"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                </div>

              </Link>
            ))
          }

        </div>

      </div>

      {/* REVIEWS */}

      <div className="review-section">

        <h2>
          ⭐ Customer Reviews
        </h2>

        {/* FORM */}

        <div className="review-form">

          <input
            type="text"

            placeholder="Your Name"

            value={username}

            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Write review..."

            value={comment}

            onChange={(e) =>
              setComment(
                e.target.value
              )
            }
          />

          <select
            value={rating}

            onChange={(e) =>
              setRating(
                Number(
                  e.target.value
                )
              )
            }
          >

            <option value="5">
              ⭐⭐⭐⭐⭐
            </option>

            <option value="4">
              ⭐⭐⭐⭐
            </option>

            <option value="3">
              ⭐⭐⭐
            </option>

            <option value="2">
              ⭐⭐
            </option>

            <option value="1">
              ⭐
            </option>

          </select>

          <button
            onClick={submitReview}
          >

            Submit Review

          </button>

        </div>

        {/* REVIEW LIST */}

        <div className="reviews-list">

          {
            reviews.length === 0 ? (

              <p>
                No reviews yet
              </p>

            ) : (

              reviews.map(
                (
                  review,
                  index
                ) => (

                  <div
                    key={index}
                    className="review-card"
                  >

                    <h3>
                      {
                        review.username
                      }
                    </h3>

                    <p>

                      {"⭐".repeat(
                        review.rating
                      )}

                    </p>

                    <p className="review-date">

                      {review.date}

                    </p>

                    <p>
                      {
                        review.comment
                      }
                    </p>

                  </div>
                )
              )
            )
          }

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
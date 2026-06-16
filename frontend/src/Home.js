// Home.js

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">

      {/* HERO SECTION */}

      <div className="hero-section">

        <div className="hero-left">

          <h1>
            Welcome to
            <span> Shopping.ly</span>
          </h1>

          <p>
            Discover the best electronics,
            fashion, gadgets and more with
            amazing offers.
          </p>

          <button
            className="shop-btn"
            onClick={() =>
              navigate("/products")
            }
          >
            Shop Now
          </button>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="banner"
          />

        </div>

      </div>

      {/* FEATURES */}

      <div className="features-section">

        <div className="feature-card">
          🚚
          <h3>Free Delivery</h3>
          <p>Fast delivery across India</p>
        </div>

        <div className="feature-card">
          💳
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>

        <div className="feature-card">
          🔥
          <h3>Best Deals</h3>
          <p>Daily discounts & offers</p>
        </div>

        <div className="feature-card">
          ⭐
          <h3>Top Quality</h3>
          <p>Trusted branded products</p>
        </div>

      </div>

      {/* CATEGORY SECTION */}

      <div className="category-section">

        <h2>Shop By Category</h2>

        <div className="category-grid">

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=mobile")
            }
          >
            📱
            <p>Mobiles</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=laptop")
            }
          >
            💻
            <p>Laptops</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=audio")
            }
          >
            🎧
            <p>Headphones</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=watch")
            }
          >
            ⌚
            <p>Smart Watches</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=camera")
            }
          >
            📷
            <p>Cameras</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=clothing")
            }
          >
            👕
            <p>Clothing</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=grocery")
            }
          >
            🛒
            <p>Groceries</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=accessories")
            }
          >
            🎒
            <p>Accessories</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=home")
            }
          >
            🏠
            <p>Home</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=toys")
            }
          >
            🧸
            <p>Toys</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=books")
            }
          >
            📚
            <p>Books</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=footwear")
            }
          >
            👟
            <p>Footwear</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=furniture")
            }
          >
            🪑
            <p>Furniture</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=gaming")
            }
          >
            🎮
            <p>Gaming</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=fitness")
            }
          >
            💪
            <p>Fitness</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=kitchen")
            }
          >
            🍳
            <p>Kitchen</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=electronics")
            }
          >
            📺
            <p>Electronics</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=sports")
            }
          >
            ⚽
            <p>Sports</p>
          </div>

          <div
            className="category-card"
            onClick={() =>
              navigate("/products?category=stationery")
            }
          >
            ✏️
            <p>Stationery</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
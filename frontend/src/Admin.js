// Admin.js

import "./Admin.css";
import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Admin({
  products = [],
  setProducts,
  cart = [],
  wishlist = [],
  orders = [],
}) {

  /* REVENUE */

  const revenue = orders.reduce(
    (total, item) =>
      total +
      item.price *
      (item.quantity || 1),
    0
  );

  /* DELETE PRODUCT */

  const deleteProduct = (id) => {

    const updatedProducts =

      products.filter(
        (item) =>
          item._id !== id
      );

    setProducts(
      updatedProducts
    );

    localStorage.setItem(
      "products",
      JSON.stringify(
        updatedProducts
      )
    );

    alert(
      "Product Deleted"
    );
  };

  /* EDIT PRODUCT */

  const [editingProduct,
    setEditingProduct] =
    useState(null);

  const [editName,
    setEditName] =
    useState("");

  const [editPrice,
    setEditPrice] =
    useState("");

  const [editStock,
    setEditStock] =
    useState("");

  const [editDiscount,
    setEditDiscount] =
    useState("");

  const saveProduct = (id) => {

    const updatedProducts =

      products.map(
        (item) =>

          item._id === id

            ? {
                ...item,
                name: editName,
                price:
                  Number(
                    editPrice
                  ),
                stock:
                  Number(
                    editStock
                  ),
                discount:
                  Number(
                    editDiscount
                  )
              }

            : item
      );

    setProducts(
      updatedProducts
    );

    localStorage.setItem(
      "products",
      JSON.stringify(
        updatedProducts
      )
    );

    setEditingProduct(
      null
    );

    alert(
      "Product Updated"
    );
  };

  /* CHART DATA */

  const salesData = [

    {
      name: "Products",
      value:
        products.length
    },

    {
      name: "Cart",
      value:
        cart.length
    },

    {
      name: "Wishlist",
      value:
        wishlist.length
    },

    {
      name: "Orders",
      value:
        orders.length
    }

  ];

  const COLORS = [

    "#2563eb",
    "#8b5cf6",
    "#ec4899",
    "#10b981"
  ];

  return (

    <div className="analytics-container">

      {/* TITLE */}

      <h1 className="analytics-title">

        📊 Admin Analytics

      </h1>

      {/* ANALYTICS */}

      <div className="analytics-grid">

        <div className="analytics-card products-card">

          <div className="analytics-icon">
            🛍️
          </div>

          <h2>
            Total Products
          </h2>

          <p>
            {products.length}
          </p>

        </div>

        <div className="analytics-card cart-card">

          <div className="analytics-icon">
            🛒
          </div>

          <h2>
            Cart Items
          </h2>

          <p>
            {cart.length}
          </p>

        </div>

        <div className="analytics-card wishlist-card">

          <div className="analytics-icon">
            ❤️
          </div>

          <h2>
            Wishlist
          </h2>

          <p>
            {wishlist.length}
          </p>

        </div>

        <div className="analytics-card orders-card">

          <div className="analytics-icon">
            📦
          </div>

          <h2>
            Orders
          </h2>

          <p>
            {orders.length}
          </p>

        </div>

        <div className="analytics-card revenue-card">

          <div className="analytics-icon">
            💰
          </div>

          <h2>
            Revenue
          </h2>

          <p>
            ₹{revenue}
          </p>

        </div>

      </div>

      {/* PRODUCT MANAGEMENT */}

      <div className="manage-products">

        <h2>
          Product Management
        </h2>

        <div className="manage-grid">

          {
            products.map(
              (product) => (

                <div
                  key={product._id}
                  className="manage-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    ₹{product.price}
                  </p>

                  <p>
                    Stock:
                    {" "}
                    {product.stock}
                  </p>

                  {/* EDIT FORM */}

                  {
                    editingProduct ===
                    product._id && (

                      <div className="edit-form">

                        <input
                          value={editName}
                          onChange={(e) =>
                            setEditName(
                              e.target.value
                            )
                          }
                        />

                        <input
                          value={editPrice}
                          onChange={(e) =>
                            setEditPrice(
                              e.target.value
                            )
                          }
                        />

                        <input
                          value={editStock}
                          onChange={(e) =>
                            setEditStock(
                              e.target.value
                            )
                          }
                        />

                        <input
                          value={editDiscount}
                          onChange={(e) =>
                            setEditDiscount(
                              e.target.value
                            )
                          }
                        />

                        <button
                          className="save-btn"
                          onClick={() =>
                            saveProduct(
                              product._id
                            )
                          }
                        >

                          Save

                        </button>

                      </div>
                    )
                  }

                  <button
                    className="edit-btn"
                    onClick={() => {

                      setEditingProduct(
                        product._id
                      );

                      setEditName(
                        product.name
                      );

                      setEditPrice(
                        product.price
                      );

                      setEditStock(
                        product.stock
                      );

                      setEditDiscount(
                        product.discount
                      );
                    }}
                  >

                    Edit Product

                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteProduct(
                        product._id
                      )
                    }
                  >

                    Delete Product

                  </button>

                </div>
              )
            )
          }

        </div>

      </div>

      {/* CHARTS */}

      <div className="charts-section">

        <h2>
          📈 Sales Analytics
        </h2>

        <div className="charts-grid">

          <div className="chart-card">

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={salesData}
              >

                <XAxis
                  dataKey="name"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={salesData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {
                    salesData.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[index]
                          }
                        />
                      )
                    )
                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;
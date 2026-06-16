// Orders.js

import { useState } from "react";

import "./Orders.css";

import {
  downloadInvoice
} from "./Invoice";

function Orders() {

  const [ordersData, setOrdersData] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || []

    );

  const trackingSteps = [

    "Order Placed",

    "Packed",

    "Shipped",

    "Out For Delivery",

    "Delivered"

  ];

  /* CANCEL ORDER */

  const cancelOrder = (index) => {

    const updatedOrders =

      ordersData.filter(
        (_, i) => i !== index
      );

    setOrdersData(
      updatedOrders
    );

    localStorage.setItem(

      "orders",

      JSON.stringify(
        updatedOrders
      )

    );

    alert(
      "Order Cancelled"
    );
  };

  return (

    <div className="orders-container">

      <h1 className="orders-title">

        📦 My Orders

      </h1>

      {

        ordersData.length === 0 ? (

          <div className="empty-orders">

            <h2>

              No Orders Yet

            </h2>

          </div>

        ) : (

          <div className="orders-grid">

            {

              ordersData.map(

                (
                  item,
                  index
                ) => (

                  <div

                    key={index}

                    className="order-card"

                  >

                    {/* IMAGE */}

                    <img

                      src={item.image}

                      alt={item.name}

                      className="order-image"

                    />

                    {/* INFO */}

                    <div className="order-info">

                      <h3>

                        {item.name}

                      </h3>

                      {/* STATUS */}

                      <div className="status-badge placed">

                        Order Placed

                      </div>

                      <p className="price">

                        ₹{item.price}

                      </p>

                      <p>

                        Quantity:

                        {" "}

                        {item.quantity}

                      </p>

                      <p className="order-date">

                        📅

                        {" "}

                        {

                          item.orderDate ||

                          new Date()
                            .toLocaleDateString()

                        }

                      </p>

                      <p className="success-text">

                        ✅ Order Confirmed

                      </p>

                    </div>

                    {/* TRACKING */}

                    <div className="tracking-section">

                      <h4>

                        Order Tracking

                      </h4>

                      <div className="tracking-line">

                        {

                          trackingSteps.map(

                            (
                              step,
                              i
                            ) => (

                              <div

                                key={i}

                                className={

                                  i <= 2

                                    ? "step active-step"

                                    : "step"

                                }

                              >

                                <div className="circle">

                                  {i + 1}

                                </div>

                                <p>

                                  {step}

                                </p>

                              </div>

                            )

                          )

                        }

                      </div>

                    </div>

                    {/* INVOICE */}

                    <button

                      className="invoice-btn"

                      onClick={() =>
                        downloadInvoice(item)
                      }

                    >

                      Download Invoice

                    </button>

                    {/* CANCEL */}

                    <button

                      className="cancel-btn"

                      onClick={() =>
                        cancelOrder(index)
                      }

                    >

                      Cancel Order

                    </button>

                  </div>

                )

              )

            }

          </div>

        )

      }

    </div>

  );

}

export default Orders;
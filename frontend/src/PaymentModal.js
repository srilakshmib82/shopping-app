// PaymentModal.js

import "./PaymentModal.css";
import { useState } from "react";

function PaymentModal({

  show,
  setShow,

  total,

  cart,
  setCart,

  orders,
  setOrders

}) {

  const [method,
    setMethod] =
    useState("");

  if (!show)
    return null;

  const payNow = () => {

    if (!method) {

      alert(
        "Please select payment method"
      );

      return;
    }

    /* NOTIFICATION */

    const notifications =

      JSON.parse(
        localStorage.getItem(
          "notifications"
        )
      ) || [];

    notifications.unshift(

      `🎉 Payment Successful via ${method}`

    );

    notifications.unshift(

      "📦 Order Placed Successfully"

    );

    localStorage.setItem(

      "notifications",

      JSON.stringify(
        notifications
      )
    );

    /* ORDERS */

    const updatedOrders = [

      ...orders,

      ...cart.map(
        (item) => ({

          ...item,

          paymentMethod:
            method,

          orderDate:
            new Date()
              .toLocaleDateString()

        })
      )

    ];

    setOrders(
      updatedOrders
    );

    localStorage.setItem(

      "orders",

      JSON.stringify(
        updatedOrders
      )
    );

    /* CLEAR CART */

    setCart([]);

    localStorage.removeItem(
      "cart"
    );

    alert(

      `🎉 Payment Successful via ${method}

Order Confirmed`

    );

    setShow(false);
  };

  return (

    <div className="payment-overlay">

      <div className="payment-modal">

        <h1>

          Payment Gateway

        </h1>

        <h2>

          Total: ₹{total}

        </h2>

        <div className="payment-methods">

          <label>

            <input

              type="radio"

              name="payment"

              value="UPI"

              onChange={(e) =>
                setMethod(
                  e.target.value
                )
              }

            />

            UPI

          </label>

          <label>

            <input

              type="radio"

              name="payment"

              value="Card"

              onChange={(e) =>
                setMethod(
                  e.target.value
                )
              }

            />

            Credit / Debit Card

          </label>

          <label>

            <input

              type="radio"

              name="payment"

              value="COD"

              onChange={(e) =>
                setMethod(
                  e.target.value
                )
              }

            />

            Cash On Delivery

          </label>

        </div>

        <button

          className="pay-btn"

          onClick={payNow}

        >

          Pay Now

        </button>

        <button

          className="close-btn"

          onClick={() =>
            setShow(false)
          }

        >

          Cancel

        </button>

      </div>

    </div>
  );
}

export default PaymentModal;
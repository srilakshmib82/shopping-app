// Checkout.js

import { useState } from "react";

import "./Checkout.css";

export default function Checkout({
  cart,
  setCart
}) {

  /* FORM STATES */

  const [name, setName] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [phone, setPhone] =
    useState("");

  /* PAYMENT METHOD */

  const [paymentMethod,
    setPaymentMethod] =
    useState(
      "Cash On Delivery"
    );

  /* TOTAL */

  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price *
      item.quantity,

    0
  );

  /* PLACE ORDER */

  const placeOrder = (e) => {

    e.preventDefault();

    if (
      !name ||
      !address ||
      !phone
    ) {

      alert(
        "Please fill all details"
      );

      return;
    }

    /* GET OLD ORDERS */

    const existingOrders =

      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    /* SAVE NEW ORDERS */

    const updatedOrders = [

      ...existingOrders,

      ...cart
    ];

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

    /* SUCCESS */

    alert(
      "Payment Successful ✅"
    );

    window.location.href =
      "/orders";
  };

  return (

    <div className="checkout-container">

      {/* TITLE */}

      <h1 className="checkout-title">

        Checkout

      </h1>

      {/* GRID */}

      <div className="checkout-grid">

        {/* ====================== */}
        {/* LEFT SIDE */}
        {/* ====================== */}

        <div className="checkout-form">

          <h2>
            Delivery Details
          </h2>

          <form onSubmit={placeOrder}>

            {/* NAME */}

            <input
              type="text"

              placeholder="Enter Name"

              value={name}

              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

            {/* ADDRESS */}

            <textarea
              placeholder="Enter Address"

              value={address}

              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
            />

            {/* PHONE */}

            <input
              type="text"

              placeholder="Enter Phone Number"

              value={phone}

              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
            />

            {/* PAYMENT */}

            <select
              value={paymentMethod}

              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
            >

              <option>
                Cash On Delivery
              </option>

              <option>
                UPI Payment
              </option>

              <option>
                Credit / Debit Card
              </option>

            </select>

            {/* FAKE PAYMENT */}

            {
              paymentMethod !==
              "Cash On Delivery" && (

                <div className="payment-box">

                  <input
                    type="text"

                    placeholder="Card / UPI ID"
                  />

                  <input
                    type="password"

                    placeholder="Enter PIN"
                  />

                </div>
              )
            }

            {/* BUTTON */}

            <button type="submit">

              Pay ₹{total}

            </button>

          </form>

        </div>

        {/* ====================== */}
        {/* RIGHT SIDE */}
        {/* ====================== */}

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>

          {
            cart.map(
              (item, index) => (

                <div
                  className="summary-card"

                  key={index}
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}

                    alt={item.name}
                  />

                  {/* INFO */}

                  <div>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Qty:
                      {" "}
                      {item.quantity}
                    </p>

                  </div>

                  {/* PRICE */}

                  <h4>

                    ₹
                    {
                      item.price *
                      item.quantity
                    }

                  </h4>

                </div>
              )
            )
          }

          {/* TOTAL */}

          <div className="total-box">

            <h2>
              Total
            </h2>

            <h2>
              ₹{total}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}
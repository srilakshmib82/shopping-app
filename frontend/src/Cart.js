import "./Cart.css";
import PaymentModal from "./PaymentModal";
import { useState } from "react";

export default function Cart({
  cart,
  setCart,
  orders,
  setOrders
}) {

  const [showPayment,
    setShowPayment] =
    useState(false);

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {

    const updatedCart =
      cart.map((item) =>

        item._id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item
      );

    setCart(updatedCart);
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {

    const updatedCart =
      cart.map((item) =>

        item._id === id

          ? {
              ...item,

              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }

          : item
      );

    setCart(updatedCart);
  };

  // =========================
  // REMOVE ITEM
  // =========================

  const removeItem = (id) => {

    const updatedCart =
      cart.filter(
        (item) =>
          item._id !== id
      );

    setCart(updatedCart);
  };

  // =========================
  // TOTAL PRICE
  // =========================

  const totalPrice =
    cart.reduce(

      (total, item) =>

        total +
        item.price *
        item.quantity,

      0
    );

  // =========================
  // COUPON
  // =========================

  let discount = 0;

  if (
    localStorage.getItem(
      "coupon"
    ) === "SAVE10"
  ) {

    discount =
      totalPrice * 0.10;
  }

  if (
    localStorage.getItem(
      "coupon"
    ) === "WELCOME50"
  ) {

    discount = 50;
  }

  const finalPrice =
    totalPrice - discount;

  // =========================
  // APPLY COUPON
  // =========================

  const applyCoupon = () => {

    const enteredCoupon =
      prompt(
        "Enter Coupon Code"
      );

    if (
      enteredCoupon ===
      "SAVE10"
    ) {

      localStorage.setItem(
        "coupon",
        "SAVE10"
      );

      alert(
        "10% Discount Applied"
      );

      window.location.reload();
    }

    else if (
      enteredCoupon ===
      "WELCOME50"
    ) {

      localStorage.setItem(
        "coupon",
        "WELCOME50"
      );

      alert(
        "₹50 Discount Applied"
      );

      window.location.reload();
    }

    else {

      alert(
        "Invalid Coupon"
      );
    }
  };

  // =========================
  // REMOVE COUPON
  // =========================

  const removeCoupon = () => {

    localStorage.removeItem(
      "coupon"
    );

    window.location.reload();
  };

  return (

    <div className="cart-container">

      <h1 className="cart-title">
        Shopping Cart
      </h1>

      {

        cart.length === 0

          ? (

            <div className="empty-cart">

              <h2>
                Cart is Empty
              </h2>

            </div>

          )

          : (

            <div className="cart-layout">

              {/* LEFT */}

              <div className="cart-items">

                {

                  cart.map(
                    (item) => (

                      <div
                        className="cart-card"
                        key={item._id}
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                        <h2>
                          {item.name}
                        </h2>

                        <p>
                          ₹{item.price}
                        </p>

                        <div className="quantity-controls">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item._id
                              )
                            }
                          >
                            -
                          </button>

                          <span>

                            {item.quantity}

                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item._id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <h3>

                          Total:

                          {" "}

                          ₹
                          {
                            item.price *
                            item.quantity
                          }

                        </h3>

                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeItem(
                              item._id
                            )
                          }
                        >

                          Remove

                        </button>

                      </div>
                    )
                  )
                }

              </div>

              {/* RIGHT */}

              <div className="cart-summary">

                <h2>

                  Price Details

                </h2>

                <div className="coupon-box">

                  <div className="coupon-buttons">

                    <button
                      onClick={
                        applyCoupon
                      }
                    >

                      Apply Coupon

                    </button>

                    <button
                      onClick={
                        removeCoupon
                      }
                    >

                      Remove Coupon

                    </button>

                  </div>

                </div>

                <div className="price-details">

                  <p>

                    Original Price:

                    {" "}

                    ₹{totalPrice}

                  </p>

                  <p>

                    Discount:

                    {" "}

                    ₹{discount}

                  </p>

                  <h3>

                    Final Total:

                    {" "}

                    ₹{finalPrice}

                  </h3>

                </div>

                <button

                  className="payment-btn"

                  onClick={() =>
                    setShowPayment(
                      true
                    )
                  }

                >

                  Proceed To Payment

                </button>

              </div>

            </div>
          )
      }

      <PaymentModal

        show={showPayment}

        setShow={
          setShowPayment
        }

        total={finalPrice}

        cart={cart}
        setCart={setCart}

        orders={orders}
        setOrders={setOrders}

      />

    </div>
  );
}
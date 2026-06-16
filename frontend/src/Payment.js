// Payment.js

import {
  useNavigate
} from "react-router-dom";

import "./Payment.css";

function Payment({
  cart,
  setCart
}) {

  const navigate =
    useNavigate();

  // Total
  const totalPrice =
    cart.reduce(

      (total, item) =>

        total +
        item.price *
        item.quantity,

      0
    );

  // Place Order
  const placeOrder = () => {

    if (cart.length === 0) {

      alert(
        "Cart is Empty"
      );

      return;
    }

    // Save Orders
    const existingOrders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

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

    // Update Product Stock
    let adminProducts =
      JSON.parse(
        localStorage.getItem(
          "adminProducts"
        )
      ) || [];

    adminProducts =
      adminProducts.map(
        (product) => {

          const orderedItem =
            cart.find(
              (item) =>
                item._id ===
                product._id
            );

          if (orderedItem) {

            return {

              ...product,

              stock:

                product.stock -

                orderedItem.quantity
            };
          }

          return product;
        }
      );

    localStorage.setItem(

      "adminProducts",

      JSON.stringify(
        adminProducts
      )
    );

    // Clear Cart
    setCart([]);

    alert(
      "Order Placed Successfully"
    );

    navigate("/orders");
  };

  return (

    <div className="payment-container">

      <h1>
        Payment Page
      </h1>

      {/* Products */}
      <div className="payment-products">

        {cart.map((item) => (

          <div
            key={item._id}
            className="payment-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div>

              <h3>
                {item.name}
              </h3>

              <p>
                Quantity:
                {" "}
                {item.quantity}
              </p>

              <p>
                ₹
                {item.price}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Total */}
      <h2 className="total-price">

        Total:
        {" "}
        ₹{totalPrice}

      </h2>

      {/* Button */}
      <button
        className="place-order-btn"

        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>
  );
}

export default Payment;
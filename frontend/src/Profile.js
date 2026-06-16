// Profile.js

import "./Profile.css";

function Profile({

  user,
  orders = [],
  wishlist = []

}) {

  const totalSpent =

    orders.reduce(
      (total, item) =>

        total +
        item.price *
        (item.quantity || 1),

      0
    );

  return (

    <div className="profile-container">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile"
          className="profile-image"
        />

        <h1>

          {
            user?.name ||
            "Guest User"
          }

        </h1>

        <p>

          {
            user?.email ||
            "guest@email.com"
          }

        </p>

      </div>

      <div className="profile-stats">

        <div className="stat-card">

          <h2>
            Orders
          </h2>

          <p>
            {orders.length}
          </p>

        </div>

        <div className="stat-card">

          <h2>
            Wishlist
          </h2>

          <p>
            {wishlist.length}
          </p>

        </div>

        <div className="stat-card">

          <h2>
            Spent
          </h2>

          <p>
            ₹{totalSpent}
          </p>

        </div>

      </div>

      <div className="recent-orders">

        <h2>

          Recent Orders

        </h2>

        {
          orders.length === 0

            ? (
              <p>
                No Orders Yet
              </p>
            )

            : orders.slice(0, 5)
              .map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="recent-order-card"
                  >

                    <p>
                      {item.name}
                    </p>

                    <p>
                      ₹{item.price}
                    </p>

                  </div>
                )
              )
        }

      </div>

    </div>
  );
}

export default Profile;
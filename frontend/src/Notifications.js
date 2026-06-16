// Notifications.js

import "./Notifications.css";

function Notifications() {

  const notifications =

    JSON.parse(
      localStorage.getItem(
        "notifications"
      )
    ) || [];

  return (

    <div className="notifications-container">

      <h1>

        🔔 Notifications

      </h1>

      {

        notifications.length === 0

          ? (

            <h2>

              No Notifications

            </h2>

          )

          : (

            notifications.map(

              (
                item,
                index
              ) => (

                <div

                  key={index}

                  className="notification-card"

                >

                  {item}

                </div>

              )
            )
          )
      }

    </div>
  );
}

export default Notifications;
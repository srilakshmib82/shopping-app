// Compare.js

import "./Compare.css";

function Compare({

  compare = [],
  setCompare

}) {

  /* REMOVE */

  const removeItem = (id) => {

    const updated =

      compare.filter(
        (item) =>
          item._id !== id
      );

    setCompare(updated);
  };

  return (

    <div className="compare-container">

      {/* TITLE */}

      <h1 className="compare-title">

        ⚡ Compare Products

      </h1>

      {/* EMPTY */}

      {
        compare.length === 0 ? (

          <div className="empty-compare">

            <h2>
              No Products Added
            </h2>

          </div>

        ) : (

          <div className="compare-grid">

            {
              compare.map(
                (item) => (

                  <div
                    key={item._id}

                    className="compare-card"
                  >

                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    {/* INFO */}

                    <h2>
                      {item.name}
                    </h2>

                    <p>

                      💰 Price:
                      {" "}
                      ₹{item.price}

                    </p>

                    <p>

                      📂 Category:
                      {" "}
                      {item.category}

                    </p>

                    <p>

                      📦 Stock:
                      {" "}
                      {item.stock}

                    </p>

                    <p>

                      🔥 Discount:
                      {" "}
                      {item.discount || 0}%

                    </p>

                    {/* REMOVE */}

                    <button
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
        )
      }

    </div>
  );
}

export default Compare;
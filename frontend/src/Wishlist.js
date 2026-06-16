import "./Wishlist.css";

export default function Wishlist({
  wishlist,
  setWishlist,
  cart,
  setCart
}) {

  // Remove from wishlist
  const removeFromWishlist = (index) => {

    const updatedWishlist =
      wishlist.filter((_, i) => i !== index);

    setWishlist(updatedWishlist);
  };

  // Move to cart
  const moveToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item._id === product._id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);

    }
  };

  return (
    <div className="wishlist-container">

      <h1>My Wishlist</h1>

      <div className="wishlist-grid">

        {wishlist.map((item, index) => (
          <div className="wishlist-card" key={index}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                moveToCart(item)
              }
            >
              Move to Cart
            </button>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromWishlist(index)
              }
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
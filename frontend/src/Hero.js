import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="shopping"
        />
      </div>

      <div className="hero-right">
        <h1>SHOP ONLINE</h1>
        <p>Made easy!</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}
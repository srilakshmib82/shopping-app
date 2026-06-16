
require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

/*
  Paste your complete products array here
*/

const products = [
  // ... all your 20 products ...
  {
          
          name: "iPhone 15",
          price: 85000,
          stock: 10,
          discount: 10,
          category: "mobile",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          description:
            "Latest Apple iPhone with powerful features.",
            reviews: []
        },

        {
          
          name: "Gaming Laptop",
          price: 95000,
          stock: 5,
          discount: 15,
          category: "laptop",
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
          description:
            "High performance gaming laptop.",
             reviews: []
        },

        {
         
          name: "Smart Watch",
          price: 12000,
          stock: 8,
          discount: 20,
          category: "watch",
          image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
          description:
            "Track your health and fitness.",
             reviews: []
        },

        {
          
          name: "Headphones",
          price: 5000,
          stock: 12,
          discount: 18,
          category: "audio",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          description:
            "Noise cancellation premium headphones.",
             reviews: []
        },

        {
         
          name: "Camera",
          price: 45000,
          stock: 6,
          discount: 12,
          category: "camera",
          image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
          description:
            "Professional DSLR camera.",
             reviews: []
        },
        {
  
  name: "Men's T-Shirt",
  price: 799,
  stock: 25,
  discount: 20,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  description: "Comfortable cotton t-shirt.",
  reviews: []
},

{
  
  name: "Women's Kurti",
  price: 1299,
  stock: 15,
  discount: 25,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
  description: "Stylish ethnic wear.",
  reviews: []
},

{
  
  name: "Denim Jeans",
  price: 1999,
  stock: 18,
  discount: 15,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  description: "Premium blue denim jeans.",
  reviews: []
},
{
  
  name: "Fresh Apples",
  price: 199,
  stock: 50,
  discount: 5,
  category: "grocery",
  image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  description: "Fresh farm apples.",
  reviews: []
},

{
  
  name: "Rice Bag 5kg",
  price: 499,
  stock: 30,
  discount: 10,
  category: "grocery",
  image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  description: "Premium quality rice.",
  reviews: []
},

{
  
  name: "Cooking Oil",
  price: 249,
  stock: 40,
  discount: 8,
  category: "grocery",
  image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
  description: "Healthy refined oil.",
  reviews: []
},{
  
  name: "Backpack",
  price: 1499,
  stock: 20,
  discount: 18,
  category: "accessories",
  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  description: "Travel backpack.",
  reviews: []
},

{
 
  name: "Sunglasses",
  price: 899,
  stock: 22,
  discount: 20,
  category: "accessories",
  image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  description: "UV protected sunglasses.",
  reviews: []
},

{
  
  name: "Wallet",
  price: 699,
  stock: 35,
  discount: 12,
  category: "accessories",
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
  description: "Leather wallet.",
  reviews: []
},{
  
  name: "Water Bottle",
  price: 299,
  stock: 40,
  discount: 10,
  category: "home",
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
  description: "Steel water bottle.",
  reviews: []
},

{
  
  name: "Table Lamp",
  price: 899,
  stock: 14,
  discount: 15,
  category: "home",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  description: "Modern LED table lamp.",
  reviews: []
},
{
  
  name: "Remote Control Car",
  price: 1299,
  stock: 10,
  discount: 20,
  category: "toys",
  image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7",
  description: "Kids RC car.",
  reviews: []
},

{
  
  name: "Teddy Bear",
  price: 799,
  stock: 25,
  discount: 10,
  category: "toys",
  image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c",
  description: "Soft teddy bear.",
  reviews: []
},
{
  
  name: "Atomic Habits",
  price: 499,
  stock: 18,
  discount: 12,
  category: "books",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  description: "Best selling self-help book.",
  reviews: []
},

{
  
  name: "Rich Dad Poor Dad",
  price: 399,
  stock: 20,
  discount: 15,
  category: "books",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  description: "Personal finance classic.",
  reviews: []
},
{
  name: "Samsung Galaxy S25",
  price: 79999,
  stock: 15,
  discount: 12,
  category: "mobile",
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  description: "Latest Samsung flagship smartphone.",
  reviews: []
},



{
  name: "Nike Running Shoes",
  price: 4999,
  stock: 30,
  discount: 20,
  category: "footwear",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  description: "Comfortable running shoes.",
  reviews: []
},

{
  name: "Adidas Sneakers",
  price: 5499,
  stock: 25,
  discount: 15,
  category: "footwear",
  image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  description: "Stylish casual sneakers.",
  reviews: []
},

{
  name: "Office Chair",
  price: 6999,
  stock: 12,
  discount: 18,
  category: "furniture",
  image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
  description: "Ergonomic office chair.",
  reviews: []
},

{
  name: "Study Table",
  price: 8999,
  stock: 10,
  discount: 10,
  category: "furniture",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  description: "Wooden study table.",
  reviews: []
},

{
  name: "Bluetooth Speaker",
  price: 2499,
  stock: 22,
  discount: 25,
  category: "audio",
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  description: "Portable wireless speaker.",
  reviews: []
},

{
  name: "PlayStation 5",
  price: 54999,
  stock: 6,
  discount: 5,
  category: "gaming",
  image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  description: "Sony PlayStation 5 console.",
  reviews: []
},

{
  name: "Xbox Series X",
  price: 52999,
  stock: 5,
  discount: 7,
  category: "gaming",
  image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
  description: "Microsoft Xbox Series X.",
  reviews: []
},



{
  name: "Yoga Mat",
  price: 999,
  stock: 35,
  discount: 20,
  category: "fitness",
  image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  description: "Non-slip yoga mat.",
  reviews: []
},

{
  name: "Coffee Maker",
  price: 3499,
  stock: 15,
  discount: 12,
  category: "kitchen",
  image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
  description: "Automatic coffee machine.",
  reviews: []
},

{
  name: "Mixer Grinder",
  price: 2799,
  stock: 18,
  discount: 18,
  category: "kitchen",
  image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
  description: "Powerful mixer grinder.",
  reviews: []
},
{
  name: "Samsung Smart TV 43 Inch",
  price: 32999,
  stock: 12,
  discount: 18,
  category: "electronics",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  description: "43 inch Full HD Smart TV.",
  reviews: []
},

{
  name: "LG Refrigerator",
  price: 28999,
  stock: 8,
  discount: 15,
  category: "electronics",
  image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30",
  description: "Double door refrigerator.",
  reviews: []
},

{
  name: "Washing Machine",
  price: 24999,
  stock: 7,
  discount: 12,
  category: "electronics",
  image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
  description: "Fully automatic washing machine.",
  reviews: []
},



{
  name: "Men's Formal Shirt",
  price: 1299,
  stock: 30,
  discount: 20,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
  description: "Premium formal shirt.",
  reviews: []
},

{
  name: "Women's Saree",
  price: 2499,
  stock: 18,
  discount: 25,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  description: "Traditional silk saree.",
  reviews: []
},

{
  name: "Casual Hoodie",
  price: 1799,
  stock: 22,
  discount: 15,
  category: "clothing",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  description: "Comfortable hoodie.",
  reviews: []
},

{
  name: "Sports Cap",
  price: 499,
  stock: 40,
  discount: 10,
  category: "accessories",
  image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  description: "Stylish sports cap.",
  reviews: []
},

{
  name: "Smart Water Bottle",
  price: 899,
  stock: 20,
  discount: 8,
  category: "home",
  image: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
  description: "Temperature display bottle.",
  reviews: []
},

{
  name: "Bed Sheet Set",
  price: 1499,
  stock: 15,
  discount: 12,
  category: "home",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  description: "Luxury bed sheet set.",
  reviews: []
},

{
  name: "Cricket Bat",
  price: 2499,
  stock: 10,
  discount: 15,
  category: "sports",
  image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
  description: "Professional cricket bat.",
  reviews: []
},

{
  name: "Football",
  price: 999,
  stock: 25,
  discount: 20,
  category: "sports",
  image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
  description: "Match quality football.",
  reviews: []
},

{
  name: "Badminton Racket",
  price: 1499,
  stock: 20,
  discount: 10,
  category: "sports",
  image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
  description: "Lightweight racket.",
  reviews: []
},

{
  name: "Notebook Pack",
  price: 299,
  stock: 50,
  discount: 5,
  category: "stationery",
  image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c",
  description: "Set of 5 notebooks.",
  reviews: []
},

{
  name: "Gel Pen Set",
  price: 199,
  stock: 60,
  discount: 5,
  category: "stationery",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  description: "Smooth writing pens.",
  reviews: []
},

{
  name: "Harry Potter Collection",
  price: 2499,
  stock: 10,
  discount: 18,
  category: "books",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  description: "Complete Harry Potter set.",
  reviews: []
},

{
  name: "Think and Grow Rich",
  price: 399,
  stock: 25,
  discount: 15,
  category: "books",
  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  description: "Classic success book.",
  reviews: []
},

{
  name: "LEGO Building Set",
  price: 2999,
  stock: 12,
  discount: 10,
  category: "toys",
  image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
  description: "Creative building blocks.",
  reviews: []
},

{
  name: "Barbie Doll",
  price: 899,
  stock: 18,
  discount: 12,
  category: "toys",
  image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
  description: "Classic Barbie doll.",
  reviews: []
},

{
  name: "Dry Fruits Combo",
  price: 799,
  stock: 35,
  discount: 10,
  category: "grocery",
  image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9",
  description: "Healthy dry fruits mix.",
  reviews: []
}
];

async function seedData() {
  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("✅ MongoDB Connected");

    await Product.deleteMany({});

    console.log("🗑 Old products removed");

    await Product.insertMany(products);

    console.log("✅ Products inserted successfully");

    await mongoose.connection.close();

    process.exit(0);

  } catch (error) {

    console.error(
      "❌ Error:",
      error
    );

    process.exit(1);

  }
}

seedData();
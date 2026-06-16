// AddProduct.js

import { useState } from "react";

import "./AddProduct.css";

function AddProduct({

  products,
  setProducts

}) {

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const [category,
    setCategory] =
    useState("");

  const [stock,
    setStock] =
    useState("");

  const addProduct = () => {

    if (
      !name ||
      !price ||
      !image
    ) {

      alert(
        "Fill All Fields"
      );

      return;
    }

    const newProduct = {

      _id:
        Date.now().toString(),

      name,

      price:
        Number(price),

      image,

      category,

      stock:
        Number(stock),

      discount: 0
    };

    const updated = [

      ...products,

      newProduct
    ];

    setProducts(updated);

    localStorage.setItem(

      "products",

      JSON.stringify(
        updated
      )
    );

    alert(
      "Product Added Successfully"
    );

    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    setStock("");
  };

  return (

    <div className="add-product-container">

      <h1>

        ➕ Add Product

      </h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(
            e.target.value
          )
        }
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) =>
          setImage(
            e.target.value
          )
        }
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      />

      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) =>
          setStock(
            e.target.value
          )
        }
      />

      <button
        onClick={addProduct}
      >

        Add Product

      </button>

    </div>
  );
}

export default AddProduct;
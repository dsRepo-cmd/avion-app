"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { IProductBase, ProductCategory, ProductType } from "../types";

const CreateProduct = () => {
  const [productData, setProductData] = useState<IProductBase>({
    name: "",
    description: "",
    price: "",
    designer: "",
    productType: ProductType.Accessories,
    category: ProductCategory.Ceramics,
    height: "",
    width: "",
    depth: "",
    brand: "",
    imageSrc: "",
    isPhotoBig: false,
  });

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLFormElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Handle checkboxes separately
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setProductData({
      ...productData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/product-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        return data;
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 p-10">
      <h1>Create a New Product</h1>
      <form className="flex flex-col w-1/2 gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-10">
          <label htmlFor="name">Name</label>
          <input
            className="bg-lightGrey grow px-4 py-2"
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-lightGrey grow px-4 py-2"
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="price">Price</label>
          <input
            className="bg-lightGrey grow px-4 py-2"
            type="text"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="designer">Designer</label>
          <input
            className="bg-lightGrey grow px-4 py-2"
            type="text"
            id="designer"
            name="designer"
            value={productData.designer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="productType">Product Type</label>
          <select
            className="bg-lightGrey px-4 py-2"
            id="productType"
            name="productType"
            value={productData.productType}
            onChange={handleChange}
          >
            {Object.values(ProductType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-10">
          <label htmlFor="category">Category</label>
          <select
            className="bg-lightGrey px-4 py-2"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
          >
            {Object.values(ProductCategory).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-10">
          <label htmlFor="height">Height</label>
          <input
            className="bg-lightGrey px-4 py-2"
            type="text"
            id="height"
            name="height"
            value={productData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="width">Width</label>
          <input
            className="bg-lightGrey px-4 py-2"
            type="text"
            id="width"
            name="width"
            value={productData.width}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="depth">Depth</label>
          <input
            className="bg-lightGrey px-4 py-2"
            type="text"
            id="depth"
            name="depth"
            value={productData.depth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="brand">Brand</label>
          <input
            className="bg-lightGrey grow px-4 py-2"
            type="text"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="imageSrc">Image URL</label>
          <input
            className="bg-lightGrey grow px-4 py-2"
            type="text"
            id="imageSrc"
            name="imageSrc"
            value={productData.imageSrc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="isPhotoBig">Big Photo</label>
          <input
            className="bg-lightGrey  px-4 py-2"
            type="checkbox"
            id="isPhotoBig"
            name="isPhotoBig"
            checked={productData.isPhotoBig}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;

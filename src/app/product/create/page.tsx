"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { ProductCategory, ProductCreate, ProductType } from "../types";
import Page from "@/components/Page/Page";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<ProductCreate>({
    name: "",
    description: "",
    price: 0,
    designer: "",
    productType: ProductType.Accessories,
    category: ProductCategory.Ceramics,
    height: 0,
    width: 0,
    depth: 0,
    brand: "",
    imageSrc: "/",
  });

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLFormElement
    >
  ) => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleCreateProduct = async (e: FormEvent) => {
    setLoading(true);
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

      if (response.ok) {
        setLoading(false);
        return data;
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page>
      <div className="flex flex-col gap-10 p-10">
        <h1>Create a New Product</h1>
        <form
          className="flex flex-col w-1/2 gap-4"
          onSubmit={handleCreateProduct}
        >
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
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

          <button disabled={loading} type="submit">
            Create Product
          </button>
        </form>
      </div>
    </Page>
  );
};

export default CreateProduct;

"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { ProductCategory, ProductCreate, ProductType } from "../types";
import Page from "@/components/Page/Page";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

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
      <div className="flex flex-col gap-10 p-10 bg-lightGrey w-full">
        <h1>Create a New Product</h1>
        <form
          className="flex flex-col w-1/2 gap-4"
          onSubmit={handleCreateProduct}
        >
          <Input
            label="Name"
            value={productData.name}
            id="name"
            name="name"
            onChange={handleChange}
            required
          />

          <Input
            label="Description"
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />

          <Input
            label="Price"
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />

          <Input
            label="Designer"
            type="text"
            id="designer"
            name="designer"
            value={productData.designer}
            onChange={handleChange}
            required
          />

          <Input
            label="Height"
            type="number"
            id="height"
            name="height"
            value={productData.height}
            onChange={handleChange}
            required
          />

          <Input
            label="Width"
            type="number"
            id="width"
            name="width"
            value={productData.width}
            onChange={handleChange}
            required
          />

          <Input
            label="Depth"
            type="number"
            id="depth"
            name="depth"
            value={productData.depth}
            onChange={handleChange}
            required
          />

          <Input
            label="Brand"
            type="text"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
          />
          <Input
            label="Image URL"
            type="text"
            id="imageSrc"
            name="imageSrc"
            value={productData.imageSrc}
            onChange={handleChange}
            required
          />
          <div className="flex items-center gap-10">
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
          <div className="flex items-center gap-10">
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

          <Button disabled={loading} type="submit">
            Create Product
          </Button>
        </form>
      </div>
    </Page>
  );
};

export default CreateProduct;

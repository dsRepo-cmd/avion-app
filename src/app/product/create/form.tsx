import React, { useState, ChangeEvent } from "react";
import { useFormStatus } from "react-dom";
import Button from "@/components/shared/Button/Button";
import Input from "@/components/shared/Input/Input";
import Typography from "@/components/shared/Typography/Typography";
import { Brand, Designer, ProductCategory, ProductType } from "@/lib/enums";
import { productCreate } from "@/lib/products";
import { Product } from "@/types/product";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-14" disabled={pending} type="submit">
      Create Product
    </Button>
  );
}

function Form() {
  const [message, createformAction] = useActionState(productCreate, null);
  const [productData, setProductData] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    designer: Designer.BiggieSmalls,
    productType: ProductType.Accessories,
    category: ProductCategory.Ceramics,
    height: 0,
    width: 0,
    depth: 0,
    brand: Brand.BestCeramics,
    imageSrc: "/",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-10 p-10 bg-lightGrey w-full">
      <h1>Create a New Product</h1>
      <form
        className="flex flex-col w-1/2 gap-4"
        onSubmit={createformAction.bind(null, productData)}
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
          label="Image URL"
          type="text"
          id="imageSrc"
          name="imageSrc"
          value={productData.imageSrc}
          onChange={handleChange}
          required
        />

        <div className="flex items-center gap-10">
          <label htmlFor="brand">Brand</label>
          <select
            className="bg-lightGrey px-4 py-2"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
          >
            {Object.values(Brand).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-10">
          <label htmlFor="designer">Designer</label>
          <select
            className="bg-lightGrey px-4 py-2"
            id="designer"
            name="designer"
            value={productData.designer}
            onChange={handleChange}
          >
            {Object.values(Designer).map((designer) => (
              <option key={designer} value={designer}>
                {designer}
              </option>
            ))}
          </select>
        </div>

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

        <div className="relative">
          <Typography
            className="absolute top-2 left-0"
            tag="span"
            fontFamily="primary"
            color="light"
          >
            {message}
          </Typography>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default Form;

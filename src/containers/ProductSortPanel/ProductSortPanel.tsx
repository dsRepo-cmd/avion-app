"use client";
import { ProductType } from "@/app/product/types";
import React, { ChangeEvent,  useState } from "react";

function ProductSortPanel() {
  const [productTypeForm, setProductTypeForm] = useState({});

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLFormElement
    >
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    console.log("name", name, "value", value, "type", type);

    setProductTypeForm({
      ...productTypeForm,
      [name]: newValue,
    });
    console.log(productTypeForm);
  };

  return (
    <div className=" flex flex-col gap-10 p-10">
      <div className="flex flex-col items-start gap-4">
        {Object.values(ProductType).map((key) => (
          <div className=" flex gap-2 items-center justify-center" key={key}>
            <input
              type="checkbox"
              id={key}
              name={key}
              key={key}
              value={key}
              onChange={handleChange}
            />
            <label htmlFor={key}>{key}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSortPanel;

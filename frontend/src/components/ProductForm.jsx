import React, { useState, useEffect } from "react";
import api from "../lib/axios.js";
import toast, {Toaster} from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const ProductForm = ({}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    stock: "",
    mrp: "",
    sellingPrice: "",
    brandName: "",
    imageUrl: "",
    exchangeReturn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id){
      await api.put(`/products/${id}`, formData)
      toast.success("Product Updated Successfully!")
    } else {
    await api.post("/products", formData);
    toast.success("Product Created Successfully!")
    }
    navigate("/products")
  };

  useEffect(() => {
  if (id) {
    api.get(`/products/${id}`).then(res => {
      setFormData(res.data);
      console.log(res.data)
    });
  }
}, [id]);

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full lg:w-1/2 items-center justify-center lg:border-gray-500 lg:border lg:rounded-lg p-4"
      >
        <div className="flex flex-row justify-between w-full border-b border-gray-500 p-2">
          <p className="font-bold text-lg">{id ? "Edit Product" : "Add Product"}</p>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Product Name</p>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Product Type</p>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            required
          >
            <option value="">Select product type</option>
            <option value="Foods">Foods</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Beauty">Beauty Products</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Quantity Stock</p>
          <input
            type="number"
            placeholder="Total numbers of Stock available"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.stock}
            onChange={handleChange}
            name="stock"
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">MRP</p>
          <input
            type="number"
            name="mrp"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.mrp}
            placeholder="MRP of the product"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Selling Price</p>
          <input
            type="number"
            name="sellingPrice"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.sellingPrice}
            placeholder="Selling price of the product"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Brand Name</p>
          <input
            type="text"
            name="brandName"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.brandName}
            placeholder="Name of the Brand"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Product Image URL</p>
          <input
            type="url"
            name="imageUrl"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.imageUrl}
            placeholder="Image URL"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="font-semibold">Exchange or return eligibility</p>
          <select
            name="exchangeReturn"
            className="border-gray-500 border rounded-lg p-2 w-full my-2"
            value={formData.exchangeReturn}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-linear-to-b from-[#000FB4] to-[#4050FF] px-8 py-2 text-white rounded-lg font-semibold"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

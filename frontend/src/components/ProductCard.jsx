import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="h-40 flex justify-center items-center bg-gray-100 rounded mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <div className="mt-2 text-sm space-y-1">
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Product type -</p>
          <p>{product.type}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Quantity Stock -</p>
          <p>{product.stock}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">MRP -</p>
          <p>₹ {product.mrp}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Selling Price -</p>
          <p>₹ {product.sellingPrice}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Brand Name -</p>
          <p>{product.brandName}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Total Number of Images -</p>
          <p>1</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-gray-400">Exchange Eligibility -</p>
          <p>{product.exchangeReturn}</p>
        </div>
      </div>
      <div className="buttons flex flex-row justify-evenly m-3 gap-2">
        <button className="bg-linear-to-b from-[#000FB4] to-[#4050FF] px-8 py-2 text-white rounded-lg font-semibold">Publish</button>
        <Link to={`/edit/${product._id}`} className="px-8 py-2 border-gray-500 border rounded-lg font-semibold">Edit</Link>
        <img src="../Trash.svg" alt="" className="" onClick={() => onDelete(product._id)} />
      </div>
    </div>
  );
};

export default ProductCard;

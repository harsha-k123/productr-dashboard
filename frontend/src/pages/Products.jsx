import React, { useEffect, useState } from "react";
import api from "../lib/axios";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import NoProducts from "../components/NoProducts";
import toast from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true)
    const res = await api.get("/products");
    setProducts(res.data);
    setLoading(false)
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product")) {
      return;
    }
    await api.delete(`/products/${id}`);
    fetchProducts();
    toast.success("Deleted Successfully!");
  };
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex items-center justify-between m-4">
        <h1 className="text-2xl font-bold">Products</h1>

        <Link
          to="/create"
          className="flex items-center gap-2 text-gray-500 hover:text-black"
        >
          <img src="../Plus.svg" className="size-5" />
          <span>Add Products</span>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        {loading ? (
          <div className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-orange-600 rounded-full"></div>
        ) : products.length === 0 ? (
          <NoProducts />
        ) : (
          <ProductList products={products} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";

const NoProducts = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <img src="../iconoir_grid-add.svg" alt="" />
      <h2 className="text-xl font-semibold">
        Feels a little empty over here...
      </h2>
      <div>
        <p className="text-md text-gray-500">
        You can create products without connecting store
      </p>
      <p className="text-md text-gray-500">
        you can add products to store anytime
      </p>
      </div>

      <Link
        to="/create"
        className="bg-linear-to-b from-[#000FB4] to-[#4050FF] px-12 py-2 text-white rounded-lg font-semibold"
      >
        Add your Products
      </Link>
    </div>
  );
};

export default NoProducts;

import React from "react";
import { Link } from "react-router-dom";

const NoHome = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <img src="../iconoir_grid-add.svg" alt="" />
      <h2 className="text-xl font-semibold">No Published Products</h2>
      <div>
        <p className="text-md text-gray-500">
        Your Published Products will appear here
      </p>
      <p className="text-md text-gray-500">
        Create your first product to publish
      </p>
      </div>
    </div>
  );
};

export default NoHome;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-screen lg:w-1/5
  h-auto lg:min-h-screen
  bg-[#1D222B]
  text-white
  flex flex-row lg:flex-col
  justify-start
  items-center lg:items-start
  gap-4 p-4
  sticky top-0"
    >
      <img
        src="../logo.svg"
        className="lg:w-3/4 w-1/2 text-white lg:border-white-50 lg:border-b lg:pb-3"
      />
      <Link to={"/"}>
        <div className="flex flex-row">
          <img src="../Home.png" alt="" className="lg:size-5 size-8" />
          <span className="hidden lg:block">Home</span>
        </div>
      </Link>
      <Link to={"/products"}>
        <div className="flex flex-row">
          <img src="../Shopping-bag.png" alt="" className="lg:size-5 size-8" />
          <span className="hidden lg:block">Products</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

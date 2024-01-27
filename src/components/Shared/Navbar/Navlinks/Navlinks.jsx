import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      {/* className={({ isActive }) => isActive ? "font-semibold text-secondary" : "font-light text-primary"} */}

      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>Home</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>All Books</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>Bologs</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>About</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>Contact</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>Login</li>
      </Link>
      <Link
        href="/"
        className="pb-1 px-3 hover:border-b-2 hover:border-gray-400"
      >
        <li>Register</li>
      </Link>
    </>
  );
  return (
    <>
      <ul className="flex justify-around text-xs text-gray-300 uppercase py-1">
        {navlinks}
      </ul>
    </>
  );
};

export default Navlinks;

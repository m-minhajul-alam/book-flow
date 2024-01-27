import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/">
        <li>All Books</li>
      </Link>
      <Link href="/">
        <li>Bologs</li>
      </Link>
      <Link href="/">
        <li>About</li>
      </Link>
      <Link href="/">
        <li>Contact</li>
      </Link>
      <Link href="/">
        <li>Login</li>
      </Link>
      <Link href="/">
        <li>Register</li>
      </Link>
    </>
  );
  return (
    <>
      <ul className="flex justify-around items-center text-sm py-1 ">{navlinks}</ul>
    </>
  );
};

export default Navlinks;

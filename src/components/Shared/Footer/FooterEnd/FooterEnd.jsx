import Logo from "./../../Logo/Logo";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

const FooterEnd = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="max-w-6xl mx-auto flex justify-between items-center border-b border-gray-200">
        <div className="text-2xl">
          <Logo />
        </div>
        <div className="flex justify-end items-center gap-3 text-xl text-gray-300">
          <RiFacebookFill className="hover:text-white" />
          <BsInstagram className="hover:text-white" />
          <BsTwitterX className="hover:text-white" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-xs text-center font-light">
          &copy; {currentYear} Book River. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterEnd;

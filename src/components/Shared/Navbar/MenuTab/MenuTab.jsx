import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineHome,
} from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

const MenuTab = () => {
  return (
    <div className="flex justify-around items-center bg-black w-full py-3 text-2xl fixed bottom-0 right-0">
      <MdOutlineHome />
      <MdFavoriteBorder />
      <MdOutlineShoppingCart />
      <LuUser2 />
    </div>
  );
};

export default MenuTab;

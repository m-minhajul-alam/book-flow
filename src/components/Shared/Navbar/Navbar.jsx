import Logo from "../Logo/Logo";
import Navend from "./Navend/Navend";
import Navlinks from "./Navlinks/Navlinks";
import Search from "./Search/Search";

const Navbar = () => {
  return (
    <div className="bg-black text-white w-full h-28 hidden md:block">
      <div className="max-w-7xl mx-auto py-3">
        {/* upper side nav */}
        <div className="flex justify-between items-center py-2 px-5">
          {/* logo */}
          <div className="text-2xl">
            <Logo />
          </div>

          {/* search */}
          <div className="flex-1 px-8">
            <Search />
          </div>

          {/* navend */}
          <div className="text-2xl">
            <Navend />
          </div>
        </div>

        {/* lower side nav */}
        <div className="mt-2">
          {/* nav links */}
          <Navlinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

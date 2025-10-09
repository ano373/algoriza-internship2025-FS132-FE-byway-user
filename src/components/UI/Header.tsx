import { useUser, useLogout } from "@/hooks/useAuth";
import { useCartCount } from "@/hooks/useCart";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FiBell, FiShoppingCart, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

function Header() {
  const { data: userResponse } = useUser();
  const user = userResponse?.value;

  const { data: cartCountResponse } = useCartCount();
  const cart = cartCountResponse?.value;

  const logout = useLogout();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);

    if (query.trim()) {
      navigate({
        pathname: "/courses",
        search: createSearchParams({
          search: query.trim(),
        }).toString(),
      });
    } else {
      navigate("/courses");
    }
  };

  const handleCartClick = () => {
    if (!user) {
      toast.error("Please login to access your cart");
      navigate("/login");
      return;
    }
    navigate("/cart");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-0.5">
        <Link to="/">
          <img
            src="./Byway_logo.png"
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </Link>
        <span className="text-lg md:text-1xl font-bold text-[#334155]">
          ByWay
        </span>
      </div>

      <div className="flex items-center gap-6 flex-1 justify-center max-w-2xl">
        <div className="w-180 hidden md:block">
          <SearchBar onSearch={handleSearch} placeholder="Search courses..." />
        </div>
        <Link
          to="/courses"
          className="text-[#334155] font-medium hover:text-[#1e293b] transition-colors"
        >
          Courses
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="md:hidden">
          <SearchBar onSearch={handleSearch} placeholder="Search..." />
        </div>

        {user ? (
          <>
            <button
              onClick={handleCartClick}
              className="relative p-2 text-[#334155] cursor-pointer hover:text-[#1e293b] transition-colors"
            >
              <FiShoppingCart size={20} className="md:w-6 md:h-6" />
              {typeof cart?.cartItemsCount === "number" &&
                cart.cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-bold">
                    {cart.cartItemsCount}
                  </span>
                )}
            </button>

            <button className="p-2 text-[#334155] hover:text-[#1e293b] transition-colors">
              <FiBell size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#334155] text-white rounded-full flex items-center justify-center font-semibold text-xs md:text-sm">
              {user.email.charAt(0).toUpperCase()}
            </div>

            <button
              onClick={logout}
              className="p-2 text-[#334155] hover:text-[#1e293b] cursor-pointer transition-colors"
              title="Logout"
            >
              <FiLogOut size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2 md:gap-3 md:pr-10">
            <Link
              to="/login"
              className="text-[#334155] border border-black font-medium hover:text-[#1e293b] transition-colors px-2 py-1 md:px-3 md:py-2 rounded-md text-sm md:text-base"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#334155] border border-black text-white font-medium hover:bg-[#1e293b] transition-colors px-2 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

import Byway_logo from "@/assets/Byway_logo.png";
import { useUser } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

function Header() {
  const { data: user } = useUser();
  return (
    <div className="flex items-center gap-0.5 bg-amber-400">
      <Link to="/">
        <img src={Byway_logo} alt="logo" className="w-16 h-16" />
      </Link>
      <span className="text-1xl felx-1 font-bold text-[#334155]">ByWay</span>
    </div>
  );
}

export default Header;

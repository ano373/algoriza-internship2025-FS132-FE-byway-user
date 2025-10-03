import Byway_logo from "@/assets/Byway_logo.png";

function Header() {
  return (
    <div className="flex items-center gap-0.5 bg-amber-400">
      <img src={Byway_logo} alt="logo" className="w-16 h-16" />
      <span className="text-1xl felx-1 font-bold text-[#334155]">ByWay</span>
    </div>
  );
}

export default Header;

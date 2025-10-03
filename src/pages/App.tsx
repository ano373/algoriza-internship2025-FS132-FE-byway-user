import Byway_logo from "./assets/Byway_logo.png";

function App() {
  return (
    <div className="flex items-center gap-0.5 mb-6">
      <img src={Byway_logo} alt="logo" className="w-16 h-16" />
      <span className="text-1xl font-bold text-[#334155]">ByWay</span>
    </div>
  );
}

export default App;

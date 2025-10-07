import { Outlet } from "react-router-dom";
import Header from "./Header";

export function LayoutWith_Header() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

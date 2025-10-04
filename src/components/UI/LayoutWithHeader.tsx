import { Outlet } from "react-router";
import Header from "./Header";

export function LayoutWithHeader() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen antialiased">
      <Header />
      <main className="flex flex-1 flex-col p-8 gap-4 pt-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
}

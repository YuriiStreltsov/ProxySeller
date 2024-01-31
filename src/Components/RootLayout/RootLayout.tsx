import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <div>Footer</div>
      </footer>
    </>
  );
}

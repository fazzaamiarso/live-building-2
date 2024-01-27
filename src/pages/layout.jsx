import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen text-primary-marineBlue bg-no-repeat bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] w-full bg-contain">
      
      <div className="w-11/12 mx-auto max-w-lg">
      <Outlet />
        </div>
    </main>
  );
};

export default Layout;

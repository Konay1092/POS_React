import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

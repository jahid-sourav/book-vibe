import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-124px)]">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;

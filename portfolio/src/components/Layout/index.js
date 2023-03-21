import { Outlet } from "react-router-dom";
import { Home } from "../Home";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import style from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

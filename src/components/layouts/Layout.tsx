import { ReactNode } from "react";
import { NavBar } from "../navBar/NavBar";
import { Footer } from "../footers/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

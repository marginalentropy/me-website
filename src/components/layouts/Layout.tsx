import { ReactNode } from "react";
import { NavBar } from "../navBar/NavBar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

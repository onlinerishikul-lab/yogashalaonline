import React from "react";
import { Header } from "../common/header";
import { SiteFooter } from "../common/footer";
type Props = {
  children: React.ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
};

const MainWrapper = ({ children, isHeader = true, isFooter = true }: Props) => {
  return (
    <>
      {isHeader && <Header />}
      {children}
      {isFooter && <SiteFooter />}
    </>
  );
};

export default MainWrapper;

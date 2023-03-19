import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import Wrapper from "./Wrapper";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-white ">
      <Header />
      <Wrapper>
        <div className="flex ">
          <Sidebar />
          <div className="grow">{children}</div>
        </div>
      </Wrapper>
    </div>
  );
}

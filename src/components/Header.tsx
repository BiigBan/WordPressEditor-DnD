import React from "react";
import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <div className="py-4 border-b-[1px] border-b-slate-400">
      <Wrapper>
        <h1 className="font-medium">REACT EDITOR Test</h1>
      </Wrapper>
    </div>
  );
}

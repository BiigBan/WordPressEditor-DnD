import React, { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="max-w-[1440px] px-[30px] mx-auto">{children}</div>;
}

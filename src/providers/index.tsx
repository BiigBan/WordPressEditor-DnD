import { ReactNode } from "react";
import ProviderRedux from "./reduxProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ProviderRedux>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </ProviderRedux>
  );
}

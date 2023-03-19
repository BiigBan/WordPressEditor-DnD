import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../data/store/store";

export default function ProviderRedux({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

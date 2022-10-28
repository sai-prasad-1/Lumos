import { createContext } from "react";

interface AppContextInterface {
  name: string;
}

const AppCtx = createContext<AppContextInterface | null>(null);
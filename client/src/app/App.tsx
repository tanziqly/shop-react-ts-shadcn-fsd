import { Router } from "@/pages";
import { FC, ReactElement } from "react";
import { ThemeProvider } from "./providers/theme-provider";

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;

import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import AnimatedCards from "./AnimatedCards";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AnimatedCards />
    </StyledEngineProvider>
  </React.StrictMode>
);

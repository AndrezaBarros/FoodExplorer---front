import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { EditMeal } from "./pages/EditMeal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <EditMeal/>
    </ThemeProvider>
  </React.StrictMode>
);

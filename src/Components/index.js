//https://github.com/weibenfalk/react-tetris-starter-files
//https://www.youtube.com/watch?v=ZGOaCxX8HIU&t=5212s

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

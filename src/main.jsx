import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tasks from "./Tasks";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Tasks />
    </StrictMode>
);
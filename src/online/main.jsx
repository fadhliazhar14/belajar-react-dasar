import { StrictMode } from "react";
import Online from "./Online";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Online />
        </StrictMode>
    );
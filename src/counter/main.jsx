import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";
import { StrictMode } from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <CounterApp />
        </StrictMode>
    );
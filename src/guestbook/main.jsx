import { createRoot } from "react-dom/client";
import GuestBook from "./GuestBook";
import { StrictMode } from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <GuestBook />
        </StrictMode>
    )
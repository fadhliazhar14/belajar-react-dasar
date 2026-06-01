import { StrictMode } from "react";
import ProductList from "./ProductList";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ProductList />
        </StrictMode>
    )
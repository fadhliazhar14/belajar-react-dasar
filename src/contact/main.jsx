import { createRoot } from "react-dom/client";
import ContactForm from "./ContactForm";
import { StrictMode } from "react";

createRoot((document.getElementById("root")))
    .render(
        <StrictMode>
            <ContactForm />
        </StrictMode>
    );
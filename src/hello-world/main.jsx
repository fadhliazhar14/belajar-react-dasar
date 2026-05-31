import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import ToDoList from "../todolist/ToDoList";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <ToDoList />

                <AlertButton textLabel="Click Me!" message="Button has been clicked" />
                <MyButton textLabel="Hit Me!" onClick={() => alert("Button has been clicked")} />

                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    alert("Toolbar clicked!");
                }} />

                <SearchForm />
                <SayHelloForm />
            </Container>
        </StrictMode>
    )
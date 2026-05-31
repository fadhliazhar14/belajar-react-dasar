import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./Task";
import TaskSharingState from "./TaskSharingState";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Task />
            <TaskSharingState />
        </StrictMode>
    )
import ToDo from "./ToDo";

export default function ToDoList() {
    const data = [
        {
            id: 1,
            text: "Learn HTML",
            isCompleted: true,
            isDeleted: true
        },
        {
            id: 2,
            text: "Learn CSS",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Learn Javascript",
            isCompleted: true,
        },
        {
            id: 4,
            text: "Learn ReactJS",
            isCompleted: false,
        }
    ]

    return (
        <ul>
            {
                data.map((todo) => {
                    return <ToDo key={todo.id} {...todo} />
                })
            }
        </ul>
    )
}

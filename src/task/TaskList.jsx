export default function TaskList({ items = [] }) {
    return (
        <div>
            <h3>Task List</h3>

            <ul>
                {
                    items.map((item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
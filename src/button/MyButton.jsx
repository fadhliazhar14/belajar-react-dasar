export default function MyButton({ textLabel, onClick }) {
    return (
        <button onClick={onClick}>{textLabel}</button>
    )
}
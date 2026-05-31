export default function AlertButton({ textLabel, message }) {
    function handleClick() {
        alert(message);
    }

    return (
        <button onClick={handleClick}>{textLabel}</button>
    )
}
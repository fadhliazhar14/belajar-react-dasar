export default function SayHelloForm() {
    function handleClick(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        document.getElementById("text_hello").innerText = `Hello, ${username}!`;
    }

    return (
        <div>
            <form>
                <input id="username" />
                <button onClick={handleClick}>Say Hello!</button>

                <h1 id="text_hello"></h1>
            </form>
        </div>
    )
}
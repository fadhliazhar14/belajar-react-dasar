import "./HelloWorld.css";

export default function HelloWorld() {
    const props = {
        text: "Halo, Fadhli!"
    }

    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({ text = "Ups, lupa kasih teks" }) {
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belajar ReactJS";

    return (
        <p className="content">{text}</p>
    )
}
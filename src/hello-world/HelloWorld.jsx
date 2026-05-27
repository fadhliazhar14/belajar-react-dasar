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
        <h1 style={{
            color: "red",
            backgroundColor: "aqua"
        }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belajar ReactJS";
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    }

    return (
        <p style={style}>{text}</p>
    )
}
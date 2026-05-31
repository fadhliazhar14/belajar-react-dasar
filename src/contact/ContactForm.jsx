import { useImmer } from "use-immer";

const initialContact = {
    name: "",
    message: ""
}

export default function ContactForm() {
    const [contact, setContact] = useImmer(initialContact);

    function handleNameChanges(e) {
        setContact(contact => {
            contact.name = e.target.value;
        });
    }

    function handleMessageChanges(e) {
        setContact(contact => {
            contact.message = e.target.value;
        });
    }

    return (
        <div>
            <h1>Contact Form</h1>

            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChanges} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChanges} />
            </form>

            <h1>Contact Detail</h1>
            <p>name: {contact.name}</p>
            <p>message: {contact.message}</p>
        </div>
    )
}
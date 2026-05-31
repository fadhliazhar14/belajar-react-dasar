export default function SearchForm() {
    return (
        <form>
            <input type="text" placeholder="search" />
            <button onClick={(e) => {
                e.preventDefault();
                alert("Searching..");
            }}>Search</button>
        </form>
    )
}
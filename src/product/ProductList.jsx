import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            fetch("/product.json")
                .then(response => response.json())
                .then(data => setProducts(data))
        }

        return () => {
            console.log("Component unmounted");
        }
    }, [isLoaded]);

    useEffect(() => {
        console.log("Use effect dengan empty dependency");
    }, [])

    useEffect(() => {
        console.log("Use effect yang akan dipanggil tiap kali component dirender ulang");
    })

    function handleClick() {
        setIsLoaded(true);
    }

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>

            {
                products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </>
    )
}
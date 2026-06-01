import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current === false) {
            fetch("/product.json")
                .then(response => response.json())
                .then(data => setProducts(data))
                .then(() => isLoaded.current = true);
        }
    }, []);

    return (
        <>
            <h1>Product List</h1>
            {
                products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </>
    )
}
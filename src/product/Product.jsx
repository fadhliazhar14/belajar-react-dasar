export default function Product({ product }) {
    return (
        <div>
            <p>{product.id} : {product.name}</p>
            <p>Harga : {product.price}</p>
        </div>
    )
}
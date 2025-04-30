import Product from "./Product.jsx";

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    return (
        <>
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={50000} />
            <Product title="Pen" price={1} />
        </>
    );
}

export default ProductTab;
import "./Product.css"

function Product({ title, price = 20 }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
        </div>
    );
}

export default Product;
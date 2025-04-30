import "./Product.css"

function Product({ title, price, features }) {
    // const list = features.map((feature) => <li>{feature}</li>)
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price > 30000 && <p>Discount of 10%</p>}
        </div>
    );
}

export default Product;
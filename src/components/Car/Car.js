import './Car.css'

const Car = ({
    carName,
    imageUrl,
    price
}) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt=""></img>
            <h1>{carName}</h1>
            <span className="price">${price}</span>
            <p><button>Details</button></p>
        </div>
    )
}

export default Car;
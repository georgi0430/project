import './Car.css'

const Car = ({
    carName,
    imageUrl,
    price
}) => {
    return (
        <div class="product-card">
            <img src={imageUrl}></img>
            <h1>{carName}</h1>
            <span class="price">${price}</span>
            <p><button>Details</button></p>
        </div>
    )
}

export default Car;
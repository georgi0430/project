import './Car.css'

const Car = ({
    id,
    model,
    brand,
    imageUrl,
    price
}) => {
    
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const offerPath = `/offer/${id}`
    return (
        <div className="product-card">
            <img src={imageUrl} alt=""></img>
            <h1>{brand} {model}</h1>
            <span className="price">{formatter.format(Number(price))}</span>
            <p><a href={offerPath}><button>Details</button></a></p>
        </div>
    )
}

export default Car;
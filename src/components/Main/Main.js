import './Main.css'
import Car from '../Car/Car'
import Brands from '../Brands/Brands';
import Sold from '../Cars/Sold/Sold';


const Main = ({
    cars,
    title,
    showBrands
}) => {
    const noCars = cars.length === 0 ? true : false

    return (
        <main>
            <h1>{title}</h1>
            {noCars ?
                <div>
                    <h1>No Offers Available</h1>
                </div>
                :
                <div>
                    {cars.map(x =>
                        <Car
                            key={x.id}
                            id={x.id}
                            brand={x.brand}
                            color={x.color}
                            description={x.description}
                            engineType={x.engineType}
                            gearboxType={x.gearboxType}
                            imageUrl={x.imageUrl}
                            model={x.model}
                            productionYear={x.productionYear}
                            price={x.price}
                        />
                    )}

                </div>
            }
            
            <Sold />

            {showBrands ? <Brands /> : null}

        </main>
    )

}

export default Main;
import './Main.css'
import Car from '../Car/Car'
import Brands from '../Brands/Brands';
import Sold from '../Cars/Sold/Sold';

import { useState } from 'react';

const Main = ({
    cars,
    title,
    showBrands,
    showSold
}) => {

    const [visible, setVisible] = useState(6);

    let loadMore = (e) => {
        let newState = visible + 6
        setVisible(newState)
    }

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

                    {cars.slice(0, visible).map(x =>
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
                    <div className="show-more">

                    {visible < cars.length &&
                        <button onClick={loadMore} type="button" className="load-more">Load more</button>
                    }
                    </div>
                    
                </div>
            }

            {showSold ? <Sold /> : null}

            {showBrands ? <Brands /> : null}

        </main>
    )

}

export default Main;
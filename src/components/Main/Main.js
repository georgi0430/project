import style from './Main.module.css'
import Car from '../Car/Car'


const Main = ({
    cars
}) => {
    const noCars = cars.length == 0 ? true : false
    return (
        <main>
            <h1>Sale Products</h1>
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

            <h1>Brands</h1>
            <div className={style.brands}>
                <a href="/cars/BMW" alt=""><img src="https://brandslogo.net/wp-content/uploads/2015/09/bmw-flat-logo-vector-download.jpg" alt=""></img></a>
            </div>
            <div className={style.brands}>
                <a href="/cars/Audi" alt=""><img src="https://logosvector.net/wp-content/uploads/2014/10/audi-logo-vector-download.jpg" alt=""></img></a>
            </div>
            <div className={style.brands}>
                <a href="#" alt=""><img src="https://www.phdmedia.com/ecuador/wp-content/uploads/sites/90/2015/05/VW-logo.jpg" alt=""></img></a>
            </div>
            <div className={style.brands}>
                <a href="#" alt=""><img src="https://www.futurelab.net/sites/default/files/toyota-logo.jpg" alt=""></img></a>
            </div>
            <div className={style.brands}>
                <a href="#" alt=""><img src="data:image/png;base64,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" alt=""></img></a>
            </div>
            <div className={style.brands}>
                <a href="#" alt=""><img src="https://lezebre.lu/images/detailed/17/30356-Mercedes-Benz.png" alt=""></img></a>
            </div>
        </main>
    )


}

export default Main;
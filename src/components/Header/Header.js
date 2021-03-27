import style from './Header.module.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className={style['float-left']}>
                        <a href="/">Home</a>
                    </li>
                    <li className={style['float-left']}>
                        <a href="/cars">Cars</a>
                    </li>
                    <li className={style['float-left']}>
                        <a href="/sell">Sell</a>
                    </li>
                    <li className={style['float-right']}>
                        <a className="active" href="/login">Login</a>
                    </li>
                    <li className={style['float-right']}>
                        <a className="active" href="/register">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import style from './Header.module.css';

const Header = () => {
    return (
        <header>
        <nav>
            <ul>
                <li class={style['float-left']}>
                    <a href="#">Home</a>
                </li>
                <li class={style['float-left']}>
                    <a href="#">Products</a>
                </li>
                <li class={style['float-right']}>
                    <a class="active" href="#">Login</a>
                </li>
                <li class={style['float-right']}>
                    <a class="active" href="#">Register</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header
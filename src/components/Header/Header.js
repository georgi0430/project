import { useEffect, useState } from 'react';
import './Header.css'

import Search from '../Search/Search';

const Header = () => {
    let [isLogged, setIsLogged] = useState({});
    let [user, setUser] = useState({});
    user = user.toString()
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            let currentEmail = JSON.parse(localStorage.getItem('auth')).email
            setIsLogged(true)
            setUser(currentEmail);
        } else {
            setIsLogged(false)
        }
    }, [])
    return (
        <header>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                {isLogged ?
                    <div>
                        <a href="/sell">Sell</a>
                    </div>
                    :
                    <div>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </div>
                }
                {isLogged ?
                    <div className="float-right">
                        <a href="/search">Advanced Search</a>
                        <a href="/my-offers">My Offers</a>
                        <a href="/logout">Logout, {user}</a>
                    </div>
                    : null
                }
            </div>
        </header>
    )
}

export default Header
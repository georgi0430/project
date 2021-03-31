import { useEffect, useState } from 'react';
import './Header.css'

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
                <div className="float-right">
                    {/* TODO */}
                    {isLogged ?
                        <a href="/my-offers">My Offers</a>
                        :
                        null
                    }
                    {isLogged ?
                        <a href="/logout">Logout, {user}</a>
                        :
                        null
                    }
                    <div className="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search"></input>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
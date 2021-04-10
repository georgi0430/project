import './Header.css'

const Header = ({
    userData
}) => {

    return (
        <header>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/search">Advanced Search</a>
                {userData.isLogged ?
                    <div>
                        <a href="/sell">Sell</a>
                    </div>
                    :
                    <div>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </div>
                }
                {userData.isLogged ?
                    <div className="float-right">
                        <a href="/my-offers">My Offers</a>
                        <a href="/logout">Logout, {userData.userEmail}</a>
                    </div>
                    : null
                }
            </div>
        </header>
    )
}

export default Header
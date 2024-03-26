import { Link } from "react-router-dom";

const Header = () => {
    return <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="product">Product</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Header;
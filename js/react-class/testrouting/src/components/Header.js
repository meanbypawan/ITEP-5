import { Link } from "react-router-dom"

export default () => {
    return <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Product list</Link>
            </li>
        </ul>
    </nav>
}
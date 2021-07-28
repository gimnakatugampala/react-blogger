import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>React Blogger</h1>

            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="create">New Blog</Link>
            </div>
            
        </div>
    )
}

export default Navbar

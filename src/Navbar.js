import { Link } from 'react-router-dom'

const Navbar = () => {

    return ( 
        <div className="navbar">
            <div className="heading">
                <h1>The Dojo Blog</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
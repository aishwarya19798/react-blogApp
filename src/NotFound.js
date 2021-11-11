import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h1>404 Not Found</h1>
            <Link to="/">
                <h1>Back to Homepage...</h1>
            </Link>          
        </div>
     );
}
 
export default NotFound;
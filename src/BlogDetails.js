import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const {data:blogs, isPending, isError} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blogs.id, {
            method:'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }

    return (  
        <div className="blog-details">
            { isError && <div>{isError}</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <article>
                <h2>{blogs.title}</h2>
                <h5>Written by {blogs.author}</h5>
                <p>{blogs.body}</p>
            </article>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default BlogDetails;
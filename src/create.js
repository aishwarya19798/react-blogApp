import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("abc")
  const [isPending, setPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title,body,author}
    setPending(true)
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(blog)
    })
    .then(()=>{
      console.log("new blog added")
      setPending(false)
      history.push('/')
    })

  }

    return (
        <div className="create">
          <h2>Add a new blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              required />
            <label>Blog Body</label>
            <textarea
              value={body}
              onChange = {(e)=> setBody(e.target.value)}
              required>
            </textarea>
            <label>Blog author</label>
            <select
              value={author}
              onChange = {(e)=> setAuthor(e.target.value)}
            >
              <option value="abc">abc</option>
              <option value="xyz">xyz</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding Blog...</button>}
          </form>
        </div>
      );
}
 
export default Create;
import { useHistory } from "react-router-dom";

const Blog = ({ data }) => {
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Blog deleted!");
            history.push('/')
        })
    }

    return (
        <article>
            <h2>{data.title}</h2>
            <p style={{ color: "#f1356d" }}>Written by {data.author}</p>
            <br />
            <div>{data.body}</div>
            <button onClick={handleClick}>Delete blog</button>
        </article>
    );
}

export default Blog;
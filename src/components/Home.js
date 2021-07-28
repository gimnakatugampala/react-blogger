import { useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {

    const [blogs,setBlogs] = useState([
        {id:1,author:'mario',title:'Post One',body:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'},
        {id:2,author:'yoshi',title:'Post Two',body:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'},
        {id:3,author:'mario',title:'Post Three',body:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'}
    ])

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All The Blogs!</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

import BlogList from "./BlogList"
import { useState,useEffect } from "react"



const Home = () => {

    


     

            fetch('http://localhost:8000/blogs')
        .then((res) =>{
            res.json()
        })
        .then((data) =>{
            console.log(data)
        })



        



    const [blogs,setBlogs] = useState([
        {id:1,author:"mario",title:"Post One",body:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"},
    ])



    return (
        <div className="home">
           <BlogList blogs={blogs} title="All the Blogs!" />
        </div>
    )
}

export default Home

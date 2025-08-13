import { useState } from "react";




const Create = () => {
const[title,setTitle]= useState('your title')
const[body,setBody]= useState('your content')
const[author,setAuthor]= useState('kavinda')

const HandleSubmit  = (e) => {
  e.preventDefault();
  const blog ={title,body,author};
  console.log(blog);
}
 



    return (
        <div className="create">
            <h2>create a new blog here.</h2>

        <form onSubmit={HandleSubmit}>
            <label>Blog title: </label>
            <input
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            ></input>

            <label>Blog Content: </label>
            <textarea
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label>Blog Author: </label>

            <select
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            >
                
                <option value="kavinda"> kavinda</option>
                <option value="nidula"> nidula</option>
            </select>

            <button> Add blog </button>
        </form>

        </div>



      );
}
 
export default Create;
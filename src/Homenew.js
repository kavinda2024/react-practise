import { useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";
const title= "All blogs";
const title2="kavinda's blogs";
  
const Homenew = () => {


const [name,setName]=useState('kavinda');
const{data: blogs, isPending, error}=useFetch('http://localhost:8000/blogs');





    return ( 

        <div className="homenew">

        <h3> change name  using on click handler</h3>

         <button onClick={() => setName('neluma')} >changename  </button>
        <p>{name}</p>


         <br></br> <br></br>
        {error && <div> {error} </div> }
        {isPending && <div> Loading...</div> }
        {blogs &&<Bloglist blogs={blogs} title={title} />}
        {blogs &&<Bloglist blogs={blogs.filter((blog) => blog.author ==='kavinda')} title={title2} />}

         
      
        </div>

        


     );
}
 



export default Homenew;
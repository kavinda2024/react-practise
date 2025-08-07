import {useState} from "react";

const HOME  = () => {
const[name,setName]= useState('kavinda'); //create reactive value for name
const[age,setAge]= useState(25); //create reactive value for age
const[gender,setGender]= useState('male'); //create reactive value for gender
const handleClick=(e) =>{
    console.log(e);
    setName('nelumdeniya');
    setAge(35);
}



const handlenewClick=()=>{

    setGender('alpha male');


}



    return (  
<div className="home">

        <h2>Home page</h2>
<button  onClick={handleClick}>click me </button> <br></br>

<p>{name} is {age} years old.</p>



<button onClick={handlenewClick}> genderchange </button> <br></br>


<p>{gender} </p>



</div>


    );
}
 
export default HOME ;
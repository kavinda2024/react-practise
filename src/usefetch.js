import { useEffect,useState } from "react";


const useFetch= (url) =>{

const [data,setData]= useState(null);

const [isPending,setIspending] = useState(true);

const[error,setError]= useState(null);



useEffect(()=>{

   setTimeout(()=>{  //set timeout can be used to delay a function to display a loading sequence

      fetch(url)
     .then(res => {
         
        if(!res.ok){
         throw Error('could not fetch data');


        }
        return res.json(); //apply json() to respone object



     })
     .then(data=>{
        console.log(data)
        setData(data)
        setIspending(false); //when data is loaded loading msg is not required
     })

     .catch(err=>{
      setError(err.message);
      setIspending(false); //hides loading msg if error is present

     })




   }, 1000); //time out duration 1000ms

},[url]);

return {data,isPending,error}


}

export default useFetch;

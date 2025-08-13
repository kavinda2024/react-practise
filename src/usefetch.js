import { useEffect,useState } from "react";


const useFetch= (url) =>{

const [data,setData]= useState(null);

const [isPending,setIspending] = useState(true);

const[error,setError]= useState(null);



useEffect(()=>{

   const abortCont= new AbortController(); //use to stop the fetch when a component using the fetch is inactive

   setTimeout(()=>{  //set timeout can be used to delay a function to display a loading sequence

      fetch(url,{signal: abortCont.signal})
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
      if(err.name === 'AbortError'){
         // console.log('fetch aborted')
      } else{
      setIspending(false); //hides loading msg if error is present
      setError(err.message);
      
       }
      

     })




   }, 1000); //time out duration 1000ms
   return() => abortCont.abort();

},[url]);

return {data,isPending,error}


}

export default useFetch;

import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 

<div className="not-found">
    <h2>sorry</h2>
    <p>the page your looking for is missing</p>
    <Link to ='/'> Back to home..</Link>


</div>
     );
}
 
export default NotFound;
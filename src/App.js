
import Navbar from './Navbar';
import HOME from './Home';
import Homenew from './Homenew';
function App() {
const title= "welcome to site";
const likes =50;
const link= "http://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <div className='content'>
      <HOME></HOME>
        
     
        <h2>{title}</h2>

        <p> number of likes {likes} </p>
        <p> this is an array {[10,20,30,40]} </p>
        <p>{Math.random()*200} </p>
      <a href= {link}> Go to google </a>
      <br></br>
      <br></br>
      <Homenew></Homenew>

      </div>

    </div>
  );
}

export default App;

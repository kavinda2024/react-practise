
import{BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HOME from './Home';
import Homenew from './Homenew';
import Create from './Create';
function App() {
 
  return (

<Router>
    <div className="App">


    
      <Navbar></Navbar>

    
      
      <div className='content'>

           <Switch>
      <Route exact path='/'>  <Homenew></Homenew>  </Route>
      <Route path='/oldhome'> <HOME></HOME>   </Route>
      <Route path='/create'> <Create></Create>   </Route>

        </Switch>
     

      </div>

    </div>

  </Router>
  );
}

export default App;


import{BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HOME from './Home';
import Homenew from './Homenew';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
 
  return (

<Router>
    <div className="App">


    
      <Navbar></Navbar>

    
      
      <div className='content'>

           <Switch>   {/* ensures only one route is displayed in the broswer at a time  */}
      <Route exact path='/'>  <Homenew></Homenew>  </Route>
      <Route path='/oldhome'> <HOME></HOME>   </Route>
      <Route path='/create'> <Create></Create>   </Route>
      <Route path='/blogs/:id'> <BlogDetails> </BlogDetails>   </Route>
      <Route Path ="*"> <NotFound></NotFound> </Route>

        </Switch>
     

      </div>

    </div>

  </Router>
  );
}

export default App;

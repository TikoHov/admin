import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products/Products';


 
class App extends Component {
  render() {
    return (  
       <BrowserRouter>
        <div >
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/Products" component={Products}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
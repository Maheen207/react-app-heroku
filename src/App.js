
import {Route, Switch,Redirect, Router} from 'react-router-dom';
import './App.css';
import SignUp from './components/signup';
import Cart from './components/Cart';
import InvalidURL from './components/InvalidURL';
import Details from './components/details';
import Home_meat from './components/Home_meat';
import Poultry from './components/poultry';
import red from './components/Red';
import Fish from './components/fish';
import Calory from './components/calory';
import Mutton from './components/mutton';
import Login from './components/login';
import ViewCustomer from './components/ViewCustomer';
import Footer from './components/bottom';
import About from './components/about';
function App() {
  return (
    <div >
     
      
      {/* <Card/> */}
{/* <Switch>
        
         <Route path="/List/:Register/:Program/:Gender/:Date" exact component={List} />
         <Route path="/Registeration" exact component={Registeration}/>
         <Route path="/" exact component={Home} />
         <Route path="/InvalidURL" component = {InvalidURL} />
        <Redirect to="/InvalidURL" />
        </Switch>  */}
        {/* <div>
        <Home_meat/>
        </div> */}
        <Switch>
        <Route path="/Cart/:b/:title/:text/:quantity" exact component={Cart}/>
        <Route path="/details/:b/:title/:text" exact component={Details}/>
        <Route path="/login" exact component={Login}/>
         <Route path="/ViewCustomer" exact component={ViewCustomer}/>
       <Route path="/about" exact component={About}/>
        <Route path="/Home_meat" exact component={Home_meat}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/calory" exact component={Calory}/>
        <Route path="/fish" exact component={Fish}/>
        <Route path="/Red" exact component={red}/>
        <Route path="/poultry" exact component={Poultry}/>
         <Route path="/" exact component={Home_meat} />
         <Route path="/InvalidURL" component = {InvalidURL} />
        <Redirect to="/InvalidURL" />
        </Switch>
        {/* <Cart/> */}
        <Footer/>
        <footer id="foot" class="page-footer font-small">
        <div class="footer-copyright text-center py-3">
         <b>© 2019 Copyrights Resevered :  </b> 
          <a id="col" href="https://LDME.com/">
            MeetSomeMeat.com
          </a>
        </div>
      </footer>
      </div>
  );
}

export default App;
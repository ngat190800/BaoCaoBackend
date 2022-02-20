import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import Admin from "./pages/admin";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Products from "./pages/product/product";
import Cart from "./pages/cart/Cart";
import Register from "./pages/login/register";
import Login from "./pages/login/login";
// import Search from './components/search/search'
// import { CheckRole } from "./pages/login";
import {checkLogin} from './pages/login/index';
import PrivateRoute from './pages/login/privateRouter';
import PrivateRouteLogin from './Router/PrivateRouteLogin';
import NotFound from './components/NotFound/NotFound';
import {useHistory} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux-setup/store';
import {useSelector} from 'react-redux';
import Menu from './pages/Menu/menu';
function App() {
    const [name, setName] = React.useState();
    const ten = localStorage.getItem('keyUser');
    React.useEffect(()=>{
      setName(ten);
    },[ten]) 
    const history = useHistory();
    function logOut(){
      localStorage.clear();
      history.push('/home')
    }  
    // const number = useSelector((state) => state.cart) ;
    return (
      <Provider store={store}>

      <div>
        <Router>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-xl-5">
                  <a href="/home">
                    <img src="./logo.png" />
                  </a>
                </div>
                <div className="col-7 col-xl-7 col-lg-7 col-md-7 col-xl-7">
                  <nav className="container">
                    <Menu />
                  </nav>
                </div>
              </div>
              <div>
                {/* <Link to={"/search"} className="nav-link">
                        <Search/>
                      </Link> */}
              </div>
            </div>
            <div>
              <Switch>
                <Router exact path="/home">
                  <Home />
                </Router>
                <Route path="/About">
                  <About />
                </Route>
                {/* <Route path="/sale"> <Sale /> }</Route> */}
                <Route path="/product">
                  <Products />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                
                  <PrivateRoute path="/create" component={Admin} />
               <Route path="/404" component={NotFound} />
                <PrivateRouteLogin path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route render={() => <Redirect to="/404" /> } />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
      </Provider>

    )
  }


export default App;

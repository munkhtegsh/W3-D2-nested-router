import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Drills from './components/Drills';
import Hummers from './components/Hummers';
import Nails from './components/Nails';
// import ProductLanding from './components/ProductLanding';

export default (
    <div>
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <Link to="/products"> Products </Link>

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" render={() => (
            //Nesting products component
            <Products>
                <Link to="/products/nails"> Nails </Link>
                <Link to="/products/drills"> Drills </Link>
                <Link to="/products/hummers"> Hummers </Link>
                
                <Switch>
                    <Route path="/products/nails" component={Nails} />
                    <Route path="/products/hummers" component={Hummers} />
                    <Route path="/products/drills" component={Drills} />
                    {/* <Route component={ProductLanding} /> */}
                </Switch>
            </Products>
        )} />
    </Switch>
    </div>
)
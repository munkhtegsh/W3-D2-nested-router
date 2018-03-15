import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Drills from './components/Drills';
import Hummers from './components/Hummers';
import Nails from './components/Nails';

export default (props) => {
    console.log(props)
    return (
        <div>
            { props.children }
            
            {/* <Link to="/products/nails"> Nails </Link>
            <Link to="/products/hummers"> Hummers </Link>
            <Link to="/products/drills"> Drills </Link>
            <Switch>
                <Route path="/products/nails" component={Nails} />
                <Route path="/products/hummers" component={Hummers} />
                <Route path="/products/drills" component={Drills} />
            </Switch> */}
        </div>
    )
}
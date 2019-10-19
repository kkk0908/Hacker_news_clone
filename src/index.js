import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import {Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom'
import App from './App';
import List from './components/List';
import  Comments from './components/Comments'
import Notfound from './components/Notfound';
const routing=(
    <Router>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/stories">Stories</Link>
            </li>
            {/* <li>
                <Link to= "/stories/:id">Comments</Link>
            </li> */}
        </ul>
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/stories" component={List} />
        <Route path="/stories/:id" component={Comments} />
        <Route component={Notfound} />

        </Switch>
    </div>
    </Router>
)

ReactDOM.render(routing , document.getElementById('root'));



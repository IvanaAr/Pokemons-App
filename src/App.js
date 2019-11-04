import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Pokemons from './pokemons/pokemons'
import Grid from './grid/grid'
import Js from './js/js'
import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className='main_ul'>
                        <li>
                            <Link to="/">Pokemons</Link>
                        </li>
                        <li>
                            <Link to="/gridSystem">Grid System</Link>
                        </li>
                        <li>
                            <Link to="/javascript">Java Script</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Pokemons />
                    </Route>
                    <Route exact path="/javascript">
                        <Js />
                    </Route>
                    <Route exact path="/gridSystem">
                        <Grid />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

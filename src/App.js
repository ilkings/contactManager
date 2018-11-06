import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Contracts from './components/contacts/Contacts';
import Header from './components/layout/header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/page/NotFound';
import About from './components/page/about';
// import Test from './components/test/Test';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
                <div className = "App">
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route  exact path="/" component={Contracts}/>
                            <Route  exact path="/contact/add" component={AddContact}/>
                            <Route  exact path ="/contact/edit/:id" component={EditContact}/>
                            {/*<Route exact path="/about/:id" component = {About}/>*/}
                            <Route  exact path="/about" component = {About}/>
                            {/*<Route exact path ="/test" component = {Test}/>*/}
                            <Route component = {NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;

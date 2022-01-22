import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/addEmployee';
import AllEmployee from './components/allEmployee';
import NewOrder from './components/newOrder';
import InlineForm from './components/inlineForm';
import NonPaidOrder from './components/Nonpaidorder';
import Supplier from './components/supplier-form';
import AddDish from './components/AddDish';
import NewPurse from './components/Newpurse';
import AddItem from './components/AddItem';
import Kitchen from './components/kitchen';
import Sidebar from './components/Sidebar';


function App(){
    return (
      <div>
      <Router>
              <Switch>
              <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <div>
                <Sidebar/>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addemployee" component={AddEmployee} />
                <Route exact path="/inlineform" component={InlineForm} />
                <Route exact path="/allemployee" component={AllEmployee} />
                <Route exact path="/neworder" component={NewOrder} />
                <Route exact path="/newpurse" component={NewPurse} />
                <Route exact path="/nonpaidorder" component={NonPaidOrder} />
                <Route exact path="/supplier" component={Supplier} />
                <Route exact path="/adddish" component={AddDish} />
                <Route exact path="/additem" component={AddItem} />
                <Route exact path="/kitchen" component={Kitchen} />
                </div>
              </Switch>
        </Router>
        </div>
    );
}


export default App;

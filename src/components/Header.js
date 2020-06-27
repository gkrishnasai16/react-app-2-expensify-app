import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';

export default (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button 
            onClick = {startLogout()}>Logout</button>
    </header>
);

//export default connect()(Header);
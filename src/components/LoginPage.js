import React from 'react';
import {startGoogleLogin,startYahooLogin} from '../actions/auth';


export default (props) => (
    <div>
    <button 
        //onClick = {() => props.dispatch(startGoogleLogin())}
        onClick = {startGoogleLogin()}
    >Login with Google</button>
    <button 
        //onClick = {() => props.dispatch(startYahooLogin())}
        onClick = {startYahooLogin()}
    >Login with Yahoo</button>
    </div>
);

//export default connect()(LoginPage);
import React from 'react';
import { Link } from 'react-router-dom';


export default (props) =>(
    <div>
        <Link to={`/edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
    </div>
);
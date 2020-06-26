import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import moment from 'moment';


export default (props) =>(
    <div>
        <Link to={`/edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
        <p>
            <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} value={props.expense.amount} displayType={'text'}/> 
            - 
            {moment(props.expense.createdAt).format('MMMM do, YYYY')}
        </p>
    </div>
);
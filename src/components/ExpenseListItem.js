import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import moment from 'moment';


export default (props) =>(
        <Link className="list-item" to={`/edit/${props.expense.id}`}>
            <div>
                <h3
                className ="list-item__title"
                >{props.expense.description}</h3>
                <span className="list-item__sub-title"> {moment(props.expense.createdAt).format('LL')}</span>
            </div>
            <h3 
            className="list-item__data"
            ><NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} value={props.expense.amount} displayType={'text'}/> </h3>
        </Link>
);
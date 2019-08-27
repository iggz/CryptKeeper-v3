// this component will be a functional component that is meant to
// purely render two pieces of data as an element in a row.

import React from 'react';
import '../../styles/RowItem.css';


const formatterPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

const RowItem = (props) => {

    const currentPrice = formatterPrice.format(props.data.price);

    return (
        <div className="flex-Wrapper">
            <p style={ { textAlign: 'right', margin: 0, alignItem: 'center', thousandSeparator: 'true' } }>{ currentPrice } </p>
            <p style={ { textAlign: 'right', margin: 0, alignItem: 'center', color: props.data.percent_change > '.00' ? '#00C689' : 'red' } }>{ props.data.percent_change }</p>
        </div>
    )
}

export default RowItem;
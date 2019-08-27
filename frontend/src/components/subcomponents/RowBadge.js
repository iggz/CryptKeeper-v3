import React from 'react';
import '../../styles/RowBadge.css';
import Avatar from '@material-ui/core/Avatar';

const RowBadge = (props) => {
    let logo = require('../../../node_modules/cryptocurrency-icons/svg/color/generic.svg');
    try {
        logo = require(`../../../node_modules/cryptocurrency-icons/svg/color/${props.ticker.toLowerCase()}.svg`);
    } catch (e) {
        // console.log("error: ", e.message);
    }

    return (
        <div className="flex-row-container">
            <div className="icon-container">
                <Avatar alt={ props.ticker } src={ logo } className="icon" />
            </div>
            <div className="flex-col-container">
                <p className="symbolName" style={ { textAlign: 'left', margin: 0 } }>{ props.ticker }</p>
                <p className="fullName" style={ { textAlign: 'left', margin: 0 } }>{ props.name }</p>
            </div>
        </div >
    )
}

export default RowBadge;
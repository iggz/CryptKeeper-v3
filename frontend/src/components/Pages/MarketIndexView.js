// functional component representing the Market Index page that'll
// function as the base page

import React from 'react';
import BaseTemplate from '../BaseTemplate';
import MarketIndex from '../MarketIndex';

const MarketIndexView = () => {
    return (
        <BaseTemplate >
            <MarketIndex />
        </BaseTemplate >
    );
};

export default MarketIndexView;
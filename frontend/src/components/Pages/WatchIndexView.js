import React from 'react';
import BaseTemplate from '../BaseTemplate';
import WatchIndex from '../WatchIndex';
import WatchIndexRow from '../subcomponents/WatchIndexRow';

const WatchListView = () => {
    return (
        <BaseTemplate >
            <WatchIndex />
            <WatchIndexRow />
        </BaseTemplate >
    );
};

export default WatchListView;
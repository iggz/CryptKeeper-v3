import React from 'react';

const HeaderData = () => {
    const lorem = [];
    for (let i = 0; i < 100; i++) {
        lorem.push(`Hello World ${i + 1}!`);
    };
    return (
        <>
            {lorem.map((value, index) => {
                return <h1 key={index}>{value}</h1>
            })}
        </>
    )
};

export default HeaderData;
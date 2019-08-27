import React from 'react';

const ParagraphData = () => {
    const lorem = [];
    for (let i = 0; i < 100; i++) {
        lorem.push("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, obcaecati quos! Quaerat, voluptas possimus ex ducimus, nobis, sit laudantium sapiente maxime totam quis vitae dolorem reiciendis libero! Sed, possimus molestias!");
    };
    return (
        <>
            {lorem.map((value, index) => {
                return <p key={index}>{value}</p>
            })}
        </>
    )
};

export default ParagraphData;
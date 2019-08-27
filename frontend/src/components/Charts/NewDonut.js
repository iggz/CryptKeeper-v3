import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const colorMap = {
    1: '#11727B',
    2: '#FB8F1E',
    3: '#F2432B',
    4: '#2E2347',
    5: '#B10D67',
};

function createColors(length) {
    const bgColors = [],
        hovBgColors = [];

    for (let i = 0; i < length; i++) {
        const curr_color = Object.keys(colorMap)[i];
        const curr_color_hex = colorMap[curr_color];
        bgColors.push(curr_color_hex);
        hovBgColors.push(curr_color_hex);
    }
    return { bgColors, hovBgColors }
};

const NewDonut = (props) => {
    const { bgColors, hovBgColors } = createColors(props.data.length);

    const labels = props.labels;

    const data_to_pass_in = {
        labels: labels,
        datasets: [{
            data: props.data,
            backgroundColor: bgColors,
            hoverBackgroundColor: hovBgColors
        }]
    };

    return (
        <>
            <div>

                <Doughnut data={ data_to_pass_in } options={ {
                    cutoutPercentage: 80,
                    rotation: 120
                } } />
            </div>
        </>
    );
};

export default NewDonut;

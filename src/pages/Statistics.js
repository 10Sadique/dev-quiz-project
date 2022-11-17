import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    CartesianGrid,
    Label,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;

    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-14 text-lime">
                Quiz Statistics
            </h1>
            <div className="grid place-items-center mb-20">
                <div className="h-[40vh] lg:h-[60vh] w-[90vw] lg:w-[50vw] bg-gray-light/50 p-3 rounded-lg mt-10">
                    <div className="w-full h-full">
                        <ResponsiveContainer width={'100%'} height={'100%'}>
                            <LineChart data={data}>
                                <CartesianGrid
                                    stroke="#52525B"
                                    strokeDasharray="5 5"
                                />
                                <XAxis dataKey={'name'} stroke="#84CC16">
                                    <Label
                                        value="Topics"
                                        offset={-4}
                                        position="insideBottom"
                                        fill="#84CC16"
                                    />
                                </XAxis>
                                <YAxis
                                    label={{
                                        value: 'No. of Questions',
                                        angle: -90,
                                        position: 'insideLeft',
                                        fill: '#84CC16',
                                    }}
                                    stroke="#84CC16"
                                />
                                <Line
                                    type={'linear'}
                                    dataKey={'total'}
                                    stroke="#84CC16"
                                />
                                <Tooltip
                                    wrapperStyle={{ color: '#52525B' }}
                                    dataKey={'name'}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;

import React from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data01 = [
        { name: 'Assignment 1', value: 60 },
        { name: 'Assignment 2', value: 59 },
        { name: 'Assignment 3', value: 60 },
        { name: 'Assignment 4', value: 59 },
        { name: 'Assignment 5', value: 60 },
        { name: 'Assignment 6', value: 60 },
        { name: 'Assignment 7', value: 60 },
        { name: 'Assignment 8', value: 60 },
    ];

    return (
        <div>
            <div>
                <img src="https://i.ibb.co/9ZbFHzb/banner.png" className="absolute top-[15.12%] bottom-[77.77%] right-[ 81.82%] left-0 w-[240px] h-[100px]" />
                <h1 className='text-center my-8 font-bold text-3xl'>Assingment Analysis</h1>
                <img src="https://i.ibb.co/5v8dy8x/Vector.png" className=" absolute left-[87%] right-[-5.47%] top-0 bottom-[79.43%] float-right w-[240px] h-[100px]" />
            </div>
            <div className=' flex justify-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics; 
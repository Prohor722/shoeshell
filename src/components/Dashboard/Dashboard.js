import React from 'react';
import { Area, AreaChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import Header from '../Header/Header';
import useData from '../hook/useData'

const Dashboard = () => {
    const [data, setData] = useData([]);
    console.log(data)
    return (
        <div>
            <Header></Header>
            <h1>Charts</h1>

            <div className='row row-cols-md-2 m-5 align-items-center justify-content-center'>
                <div>
                    <h4 className='text-primary'>Revenue & Investment</h4>
                    <LineChart width={500} height={300} data={data} 
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </div>

                <div>
                    <h4 className='text-primary'>Monthly Sell</h4>
                    <AreaChart width={500} height={400} data={data} 
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                
                <div>
                    <h4 className='text-primary'>Revenue on Investment</h4>
                    <PieChart width={500} height={500}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </div>
                
                <div>
                    <h4 className='text-primary'>Revenue and Interest depending on sell</h4>
                    <ComposedChart width={500} height={400} data={data}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 20,
                        }}>
                    <CartesianGrid stroke="#f5f5f5" />
                        <Tooltip />
                        <Legend />

                        <XAxis dataKey="sell" type="number" label={{ value: 'Sell', position: 'insideBottomRight', offset: 0 }} />
                        <YAxis unit="tk" type="number" label={{ value: ' ', angle: -90, position: 'insideLeft' }} />
                        <Scatter name="investment" dataKey="investment" fill="red" />
                        <Scatter name="revenue" dataKey="revenue" fill="blue" />
                        <Line dataKey="investment" stroke="red" dot={false} activeDot={false} legendType="none" />
                        <Line dataKey="revenue" stroke="blue" dot={false} activeDot={false} legendType="none" />
                    </ComposedChart>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
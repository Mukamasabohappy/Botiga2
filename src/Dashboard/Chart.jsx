import React from 'react';
import './Dashboard_Styles/Chart.css'; // Import CSS
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RecentOrder from "../Dashboard/RecentOrder";
import Dash from"../Dashboard/Dash";
const Chart = () => {
    const data = [
        { date: '2000-01', uv: 4000, pv: 2400, amt: 2400 },
        { date: '2000-02', uv: 3000, pv: 1398, amt: 2210 },
        { date: '2000-03', uv: 2000, pv: 9800, amt: 2290 },
        { date: '2000-04', uv: 2780, pv: 3908, amt: 2000 },
        { date: '2000-05', uv: 1890, pv: 4800, amt: 2181 },
        { date: '2000-06', uv: 2390, pv: 3800, amt: 2500 },
        { date: '2000-07', uv: 3490, pv: 4300, amt: 2100 },
        { date: '2000-08', uv: 4000, pv: 2400, amt: 2400 },
        { date: '2000-09', uv: 3000, pv: 1398, amt: 2210 },
        { date: '2000-10', uv: 2000, pv: 9800, amt: 2290 },
        { date: '2000-11', uv: 2780, pv: 3908, amt: 2000 },
        { date: '2000-12', uv: 1890, pv: 4800, amt: 2181 },
    ];

    const monthTickFormatter = (tick) => {
        const date = new Date(tick);
        return date.getMonth() + 1;
    };

    return (
        <div className="dashboard">
            {/* Summary Cards Section */}
            <div className="dashboard-summary">
                <SummaryCard title="Customer" value="3.5k" progress={87} label="Today" color="blue" />
                <SummaryCard title="Orders" value="2.6k" progress={97} label="Total" color="green" />
                <SummaryCard title="Sales" value="$73,145" progress={2.9} label="Target" color="orange" />
                <SummaryCard title="Revenue" value="$59,114" progress={94} label="Month" color="pink" />
            </div>

            {/* Sales Chart Section */}
            <div className="dashboard-content">
                <div className="dashboard-chart">
                    <h2>Sales Statistics</h2>
                    <div className="chart-placeholder">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Popular Products Section */}
                <div className="dashboard-products">
                    <h2>Popular Products</h2>
                    <ProductList products={[
                        { name: "BodyLotion", image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-1.jpg.webp" },
                        { name: "Sport", image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-2.jpg.webp" },
                        { name: "Headset", image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-wireless-headset-420x420.jpg.webp" },
                    ]} />
                </div>
            </div>

            {/* Recent Orders Section */}
            <div className="dashboard-recent-orders">
                <RecentOrder />
            </div>
            <div className="dashboard-dash"><Dash/></div>
            
        </div>
    );
};

const SummaryCard = ({ title, value, progress, label, color }) => {
    return (
        <div className="summary-card">
            <h3>{title}</h3>
            <div className="summary-card-value">{value}</div>
            <div className="summary-card-progress">
                <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: color }}></div>
                <span>{label}</span>
                <span>{progress}%</span>
            </div>
        </div>
    );
};

const ProductList = ({ products }) => {
    return (
        <ul className="product-list">
            {products.map((product, index) => (
                <li key={index} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <span className="product-name">{product.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Chart;

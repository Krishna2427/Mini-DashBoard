import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/dashboard.css'; // Import CSS file for custom styles

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashBoard({modes, setModes}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Users Data',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`dashBord ${modes ? 'dash-dark' : 'dash-light'} ${isSidebarOpen ? 'side-bar-open' : ''}`}>
            <h2 className="chart">Chart</h2>
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default DashBoard;

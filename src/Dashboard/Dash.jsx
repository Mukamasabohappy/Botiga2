import React from "react";
import "../Dashboard/Dashboard_Styles/Dash.css";

const Dash= () => {
  return (
    <div className="dashboard">
      <div className="project-table">
        <h3>Project</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>E-commerce</td>
                <td>02-01-2020</td>
                <td>02-01-2020</td>
                <td>Pending</td>
                <td>Alxis lenra</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Revenue by Country */}
      <div className="revenue-section">
        <h3>Total Revenue by Country</h3>
        <div className="revenue-boxes">
          {[
            { country: "Arab Emirates", value: 90, color: "blue" },
            { country: "Pakistan", value: 81, color: "green" },
            { country: "United Kingdom", value: 78, color: "pink" },
            { country: "India", value: 69, color: "lightblue" },
          ].map((data, index) => (
            <div key={index} className="revenue-box">
              <div className="circle" style={{ borderColor: data.color }}>
                <span>{data.value}</span>
              </div>
              <p>{data.country}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Website Traffic */}
      <div className="traffic-section">
        <h3>Website Traffic</h3>
        <h2 className="visitor-count">Visitor: 5.7m</h2>
        <div className="traffic-bar"></div>
        <ul>
          <li>
            <span>📶 Direct Traffic:</span> 984,747 (46%)
          </li>
          <li>
            <span>🔍 Search Traffic:</span> 4,747 (39%)
          </li>
          <li>
            <span>📱 Social Media:</span> 384,795 (59%)
          </li>
          <li>
            <span>👁️ Page Viewer:</span> 984,747 (63%)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dash;

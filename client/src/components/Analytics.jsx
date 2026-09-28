import RevenueChart from "./RevenueChart"

function Analytics() {
  return (
    <div className="analytics-section">

      <div className="revenue-card">
        <div className="card-header">
          <div>
            <h3>Revenue Overview</h3>
            <p>Monthly revenue performance</p>
          </div>

          <select>
            <option>Last 6 months</option>
            <option>Last 12 months</option>
          </select>
        </div>

        <RevenueChart />
      </div>

      <div className="status-card">
        <h3>Project Status</h3>

        <div className="status-item">
          <span>Active</span>
          <strong>12</strong>
        </div>

        <div className="status-item">
          <span>Completed</span>
          <strong>8</strong>
        </div>

        <div className="status-item">
          <span>Pending</span>
          <strong>4</strong>
        </div>
      </div>

    </div>
  )
}

export default Analytics
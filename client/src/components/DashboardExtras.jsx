function DashboardExtras() {
  return (
    <div className="dashboard-extras">

      {/* Left column */}
      <div className="dashboard-left-column">

        <div className="recent-projects-card">

          <div className="section-card-header">
            <h3>Recent Projects</h3>
            <button>View all</button>
          </div>

          <div className="projects-table">

            <div className="projects-table-header">
              <span>Name</span>
              <span>Status</span>
              <span>Due Date</span>
              <span>Last Updated</span>
              <span>Actions</span>
            </div>

            <div className="project-row">
              <div>
                <strong>Website Redesign</strong>
                <small>Modernize the company website</small>
              </div>
              <span className="table-status completed">Completed</span>
              <span>Sep 5, 2025</span>
              <span>2 hours ago</span>
              <span>•••</span>
            </div>

            <div className="project-row">
              <div>
                <strong>Mobile App</strong>
                <small>Build beta version</small>
              </div>
              <span className="table-status progress">In Progress</span>
              <span>Sep 20, 2025</span>
              <span>5 hours ago</span>
              <span>•••</span>
            </div>

            <div className="project-row">
              <div>
                <strong>API Integration</strong>
                <small>Integrate third-party APIs</small>
              </div>
              <span className="table-status progress">In Progress</span>
              <span>Sep 25, 2025</span>
              <span>1 day ago</span>
              <span>•••</span>
            </div>

            <div className="project-row">
              <div>
                <strong>Design System</strong>
                <small>Create reusable components</small>
              </div>
              <span className="table-status todo">Todo</span>
              <span>Sep 30, 2025</span>
              <span>2 days ago</span>
              <span>•••</span>
            </div>

            <div className="project-row">
              <div>
                <strong>Landing Page</strong>
                <small>Marketing landing page</small>
              </div>
              <span className="table-status overdue">Overdue</span>
              <span className="date-overdue">Sep 1, 2025</span>
              <span>3 days ago</span>
              <span>•••</span>
            </div>

          </div>
        </div>

      </div>

      {/* Right column */}
      <div className="dashboard-right-column">

        {/* New Project */}
        <div className="progress-card">

          <div>
            <h2>
              Turn ideas into
              <br />
              real progress
            </h2>

            <p>
              Create, track and ship your projects
              with PulseBoard.
            </p>
          </div>

          <button className="dashboard-new-project-btn">
            + New Project
          </button>

        </div>

        {/* Recent Activity */}
        <div className="activity-card">

          <div className="section-card-header">
            <h3>Recent Activity</h3>
          </div>

          <div className="activity-item">
            <span className="activity-icon success">✓</span>
            <div>
              <p>
                You marked <strong>Website Redesign</strong> as completed
              </p>
              <small>2h ago</small>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon edit">✎</span>
            <div>
              <p>
                You updated <strong>API Integration</strong>
              </p>
              <small>5h ago</small>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon create">+</span>
            <div>
              <p>
                You created <strong>Mobile App</strong>
              </p>
              <small>1d ago</small>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon overdue">◷</span>
            <div>
              <p>
                Project <strong>Landing Page</strong> is overdue
              </p>
              <small>1d ago</small>
            </div>
          </div>

          <div className="activity-item">
            <span className="activity-icon edit">✎</span>
            <div>
              <p>
                You updated <strong>Design System</strong>
              </p>
              <small>2d ago</small>
            </div>
          </div>

          <button className="view-all-btn">
            View all activity →
          </button>

        </div>

        {/* Upcoming Deadlines */}
        <div className="deadlines-card">

          <div className="section-card-header">
            <h3>Upcoming Deadlines</h3>
            <button>View all</button>
          </div>

          <div className="deadline-item">
            <div>
              <strong>Mobile App</strong>
              <small>Sep 20, 2025</small>
            </div>
            <span>10 days left</span>
          </div>

          <div className="deadline-item">
            <div>
              <strong>API Integration</strong>
              <small>Sep 25, 2025</small>
            </div>
            <span>15 days left</span>
          </div>

          <div className="deadline-item">
            <div>
              <strong>Design System</strong>
              <small>Sep 30, 2025</small>
            </div>
            <span>20 days left</span>
          </div>

          <div className="deadline-item">
            <div>
              <strong>Landing Page</strong>
              <small>Sep 1, 2025</small>
            </div>
            <span className="deadline-overdue">
              Overdue
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default DashboardExtras
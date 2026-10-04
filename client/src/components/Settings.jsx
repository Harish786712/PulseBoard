import { useState } from "react"

function Settings() {
  const [name, setName] = useState("PulseBoard User")
  const [email, setEmail] = useState("user@pulseboard.com")
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState("Light")

  function handleSaveSettings() {
    alert("Settings saved successfully!")
  }

  return (
    <div className="settings-page">

      <h1>Settings</h1>
      <p className="settings-subtitle">
        Manage your PulseBoard preferences
      </p>

      <div className="settings-card">

        <h2>Profile</h2>

        <div className="settings-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="settings-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

      </div>

      <div className="settings-card">

        <h2>Notifications</h2>

        <div className="settings-option">
          <div>
            <strong>Enable notifications</strong>
            <p>Receive notifications about your projects.</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) =>
              setNotifications(e.target.checked)
            }
          />
        </div>

      </div>

      <div className="settings-card">

        <h2>Appearance</h2>

        <div className="settings-field">
          <label>Theme</label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

      </div>

      <button
        className="save-settings-btn"
        onClick={handleSaveSettings}
      >
        Save Settings
      </button>

    </div>
  )
}

export default Settings
function SettingsPage() {
  return (
    <main className="dashboard-main">
      <h1 className="dashboard-title">Settings</h1>
      <p className="dashboard-subtitle">Manage your account and preferences</p>

      <div className="settings-grid">

        {/* Profile Section */}
        <div className="settings-card">
          <h3 className="settings-card__title">Profile</h3>
          <div className="settings-form">
            <div className="settings-field">
              <label className="settings-label">Full Name</label>
              <input
                type="text"
                className="task-input__field"
                placeholder="Your name"
                defaultValue="Margarette Lavoix"
              />
            </div>
            <div className="settings-field">
              <label className="settings-label">Email</label>
              <input
                type="email"
                className="task-input__field"
                placeholder="your@email.com"
                defaultValue="Margarette_lavoix@gmail.com"
              />
            </div>
            <div className="settings-field">
              <label className="settings-label">Role</label>
              <input
                type="text"
                className="task-input__field"
                placeholder="Your role"
                defaultValue="Software Engineer"
              />
            </div>
            <button className="button button-primary">Save Changes</button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-card">
          <h3 className="settings-card__title">Preferences</h3>
          <div className="settings-form">
            <div className="settings-toggle">
              <div>
                <p className="settings-toggle__label">Dark Mode</p>
                <p className="settings-toggle__desc">Follows your system preference</p>
              </div>
              <div className="toggle toggle--active"></div>
            </div>
            <div className="settings-toggle">
              <div>
                <p className="settings-toggle__label">Email Notifications</p>
                <p className="settings-toggle__desc">Receive updates via email</p>
              </div>
              <div className="toggle"></div>
            </div>
            <div className="settings-toggle">
              <div>
                <p className="settings-toggle__label">Weekly Report</p>
                <p className="settings-toggle__desc">Get a summary every Monday</p>
              </div>
              <div className="toggle toggle--active"></div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="settings-card settings-card--danger">
          <h3 className="settings-card__title">Danger Zone</h3>
          <div className="settings-form">
            <div className="settings-danger-item">
              <div>
                <p className="settings-toggle__label">Clear All Tasks</p>
                <p className="settings-toggle__desc">Permanently delete all your tasks</p>
              </div>
              <button className="button button-danger">Clear</button>
            </div>
            <div className="settings-danger-item">
              <div>
                <p className="settings-toggle__label">Delete Account</p>
                <p className="settings-toggle__desc">Permanently delete your account and data</p>
              </div>
              <button className="button button-danger">Delete</button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default SettingsPage;
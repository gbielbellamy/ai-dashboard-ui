type Props = {
  page: string;
  setPage: (page: string) => void;
};

function Sidebar({ page, setPage }: Props) {
  return (
    <aside className="sidebar">
      <h2>AI Dashboard</h2>
      <nav>
        <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>
          Dashboard
        </button>
        <button className={page === "analytics" ? "active" : ""} onClick={() => setPage("analytics")}>
          Analytics
        </button>
        <button className={page === "settings" ? "active" : ""} onClick={() => setPage("settings")}>
          Settings
        </button>
        <button className={page === "components" ? "active" : ""} onClick={() => setPage("components")}>
          Components
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
type Props = {
  page: string;
  setPage: (page: string) => void;
};

function Sidebar({ page, setPage }: Props) {
  return (
    <aside>
      <h2>AI Dashboard</h2>
      <nav>
        <button onClick={() => setPage("home")}>
          Dashboard
        </button>
        <button onClick={() => setPage("analytics")}>
          Analytics
        </button>
        <button onClick={() => setPage("settings")}>
          Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
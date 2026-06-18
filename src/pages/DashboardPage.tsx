type Props = {
  page: string;
};

function DashboardPage({ page }: Props) {
  if (page === "analytics") {
    return <main><h1>Analytics</h1></main>;
  }

  if (page === "settings") {
    return <main><h1>Settings</h1></main>;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome to my frontend portfolio project.</p>
    </main>
  );
}

export default DashboardPage;
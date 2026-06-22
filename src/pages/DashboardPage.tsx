import ComponentsPage from "./ComponentsPage";
import { dashboardStats } from "../data/mockData";
import Card from "../components/ui/Card";

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

  if (page === "components") {
    return <ComponentsPage />;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
      {dashboardStats.map((stat) => (
      <Card key={stat.id} title={stat.title}>
        <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
        <p className="stat-description">{stat.description}</p>
      </Card>
      ))}
    </div>
    </main>
  );
}

export default DashboardPage;
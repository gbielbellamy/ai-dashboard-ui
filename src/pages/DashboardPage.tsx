import ComponentsPage from "./ComponentsPage";
import { dashboardStats } from "../data/mockData";
import Card from "../components/ui/Card";
import ProductivityChart from "../components/charts/ProductivityChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";

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
  <main className="dashboard-main">
    <h1 className="dashboard-title">Dashboard</h1>
    <p className="dashboard-subtitle">Welcome to your AI productivity dashboard</p>
    <div className="dashboard-grid">
      {dashboardStats.map((stat) => (
        <Card key={stat.id} title={stat.title}>
          <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
          <p className="stat-description">{stat.description}</p>
        </Card>
      ))}
    </div>
    <ProductivityChart />
    <WeeklyActivityChart />
  </main>
  );
}

export default DashboardPage;
import ComponentsPage from "./ComponentsPage";
import { dashboardStats } from "../data/mockData";
import Card from "../components/ui/Card";
import ProductivityChart from "../components/charts/ProductivityChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import TaskDistributionChart from "../components/charts/TaskDistributionChart";
import TaskWidget from "../components/dashboard/TaskWidget";
import NoteWidget from "../components/dashboard/NoteWidget";

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

    {/* Stats Row */}
    <div className="dashboard-grid">
      {dashboardStats.map((stat) => (
        <Card key={stat.id} title={stat.title}>
          <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
          <p className="stat-description">{stat.description}</p>
        </Card>
      ))}
    </div>

    {/* Main Row */}
    <div className="dashboard-row">
      <div className="dashboard-row__main">
        <ProductivityChart />
      </div>
      <div className="dashboard-row__side">
        <TaskWidget />
      </div>
    </div>

    {/* Charts Row */}
    <div className="dashboard-row dashboard-row--equal">
      <div className="dashboard-row__half">
        <WeeklyActivityChart />
      </div>
      <div className="dashboard-row__half">
        <TaskDistributionChart />
      </div>
    </div>

    {/* Notes Row */}
    <NoteWidget />
  </main>
);
}

export default DashboardPage;
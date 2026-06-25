import ComponentsPage from "./ComponentsPage";
import { dashboardStats } from "../data/mockData";
import Card from "../components/ui/Card";
import ProductivityChart from "../components/charts/ProductivityChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import TaskDistributionChart from "../components/charts/TaskDistributionChart";
import TaskWidget from "../components/dashboard/TaskWidget";
import NoteWidget from "../components/dashboard/NoteWidget";
import { motion } from "framer-motion";
import AnimatedSection from "../components/ui/AnimatedSection";

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
      {dashboardStats.map((stat, index) => (
      <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
         <Card title={stat.title}>
           <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
           <p className="stat-description">{stat.description}</p>
         </Card>
       </motion.div>
      ))}
    </div>

    <AnimatedSection delay={0.1}>
      <TaskWidget />
    </AnimatedSection>

    <ProductivityChart />

      <div className="dashboard-row dashboard-row--equal">
        <div className="dashboard-row__half">
          <WeeklyActivityChart />
        </div>
        <div className="dashboard-row__half">
         <TaskDistributionChart />
        </div>
      </div>

    <AnimatedSection delay={0.2}>
    <NoteWidget />
    </AnimatedSection>
  </main>
);
}

export default DashboardPage;
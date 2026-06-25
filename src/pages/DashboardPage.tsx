import ComponentsPage from "./ComponentsPage";
import { dashboardStats } from "../data/mockData";
import Card from "../components/ui/Card";
import TaskWidget from "../components/dashboard/TaskWidget";
import NoteWidget from "../components/dashboard/NoteWidget";
import { motion } from "framer-motion";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnalyticsPage from "./AnalyticsPage";

type Props = {
  page: string;
};

function DashboardPage({ page }: Props) {
  if (page === "analytics") {
    return <AnalyticsPage />;
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

    {/* Task Widget */}
    <AnimatedSection delay={0.1}>
      <TaskWidget />
    </AnimatedSection>

    {/* Notes */}
    <AnimatedSection delay={0.2}>
      <NoteWidget />
    </AnimatedSection>
  </main>
  );
}

export default DashboardPage;
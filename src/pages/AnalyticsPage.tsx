import ProductivityChart from "../components/charts/ProductivityChart";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import TaskDistributionChart from "../components/charts/TaskDistributionChart";
import AnimatedSection from "../components/ui/AnimatedSection";

function AnalyticsPage() {
  return (
    <main className="dashboard-main">
      <h1 className="dashboard-title">Analytics</h1>
      <p className="dashboard-subtitle">Track your productivity and performance over time</p>

      <AnimatedSection delay={0.1}>
        <ProductivityChart />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="dashboard-row--equal">
          <div className="dashboard-row__half">
            <WeeklyActivityChart />
          </div>
          <div className="dashboard-row__half">
            <TaskDistributionChart />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default AnalyticsPage;
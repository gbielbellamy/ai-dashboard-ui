import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { weeklyActivityData } from "../../data/mockData";

function WeeklyActivityChart() {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Weekly Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyActivityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" stroke="var(--text)" fontSize={12} />
          <YAxis stroke="var(--text)" fontSize={12} />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" fill="var(--accent)" name="Total Tasks" />
          <Bar dataKey="completed" fill="var(--accent-border)" name="Completed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;
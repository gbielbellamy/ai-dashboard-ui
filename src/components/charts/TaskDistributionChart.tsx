import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { taskDistributionData } from "../../data/mockData";

const COLORS = ["#22c55e", "#aa3bff", "#f59e0b", "#ef4444"];

function TaskDistributionChart() {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Task Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={taskDistributionData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {taskDistributionData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TaskDistributionChart;
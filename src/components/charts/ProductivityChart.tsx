import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { productivityData } from "../../data/mockData";

function ProductivityChart() {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Productivity Score</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={productivityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" stroke="var(--text)" fontSize={12} />
          <YAxis stroke="var(--text)" fontSize={12} domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={{ fill: "var(--accent)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityChart;
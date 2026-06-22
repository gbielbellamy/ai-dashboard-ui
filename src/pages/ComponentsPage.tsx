import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function ComponentsPage() {
  return (
    <main className="components-main">
      <h1>Components</h1>

      <section className="components-section">
        <h2>Buttons</h2>
        <div className="components-row">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>

      <section className="components-section">
        <h2>Badges</h2>
        <div className="components-row">
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Cancelled</Badge>
          <Badge variant="neutral">Draft</Badge>
        </div>
      </section>

      <section className="components-section">
        <h2>Cards</h2>
        <div className="components-grid">
          <Card title="Productivity Score">
            <p className="stat-value" style={{ color: "#aa3bff" }}>85%</p>
            <p className="stat-description">Above average</p>
          </Card>
          <Card title="Active Tasks">
            <p className="stat-value" style={{ color: "#3b82f6" }}>24</p>
            <p className="stat-description">4 due today</p>
          </Card>
          <Card title="AI Insights">
            <p className="stat-value" style={{ color: "#f59e0b" }}>3</p>
            <p className="stat-description">New recommendations</p>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default ComponentsPage;
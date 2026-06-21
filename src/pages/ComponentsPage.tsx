import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function ComponentsPage() {
  return (
    <main>
      <h1>Components</h1>

      <section>
        <h2>Buttons</h2>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </section>

      <section>
        <h2>Badges</h2>
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Cancelled</Badge>
        <Badge variant="neutral">Draft</Badge>
      </section>

      <section>
        <h2>Cards</h2>
        <Card title="Productivity Score">
          <p>85%</p>
        </Card>
      </section>
    </main>
  );
}

export default ComponentsPage;
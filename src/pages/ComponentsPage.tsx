import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function ComponentsPage() {
  return (
    <main className="components-main">
      <h1>Components</h1>
      <p className="dashboard-subtitle">Design system and reusable components</p>

      {/* Colors */}
      <section className="components-section">
        <h2>Colors</h2>
        <div className="color-grid">
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--accent)" }}></div>
            <p className="color-swatch__name">Accent</p>
            <p className="color-swatch__var">--accent</p>
          </div>
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--accent-bg)" }}></div>
            <p className="color-swatch__name">Accent Background</p>
            <p className="color-swatch__var">--accent-bg</p>
          </div>
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}></div>
            <p className="color-swatch__name">Background</p>
            <p className="color-swatch__var">--bg</p>
          </div>
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--border)" }}></div>
            <p className="color-swatch__name">Border</p>
            <p className="color-swatch__var">--border</p>
          </div>
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--text)" }}></div>
            <p className="color-swatch__name">Text</p>
            <p className="color-swatch__var">--text</p>
          </div>
          <div className="color-swatch">
            <div className="color-swatch__preview" style={{ background: "var(--text-h)" }}></div>
            <p className="color-swatch__name">Text Heading</p>
            <p className="color-swatch__var">--text-h</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="components-section">
        <h2>Typography</h2>
        <Card title="Type Scale">
          <div className="typography-list">
            <h1 style={{ margin: 0 }}>Heading 1</h1>
            <h2 style={{ margin: 0 }}>Heading 2</h2>
            <h3 style={{ margin: 0 }}>Heading 3</h3>
            <p style={{ margin: 0 }}>Body text — system-ui, Segoe UI, Roboto</p>
            <p style={{ margin: 0 }}><code>Monospace text</code></p>
          </div>
        </Card>
      </section>

      {/* Buttons */}
      <section className="components-section">
        <h2>Buttons</h2>
        <div className="components-row">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="components-section">
        <h2>Badges</h2>
        <div className="components-row">
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Cancelled</Badge>
          <Badge variant="neutral">Draft</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="components-section">
        <h2>Cards</h2>
        <div className="components-grid">
          <Card title="Simple Card">
            <p className="stat-description">A basic card with title and content</p>
          </Card>
          <Card title="Card with Badge">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <Badge variant="success">Completed</Badge>
              <Badge variant="warning">Pending</Badge>
            </div>
          </Card>
          <Card title="Card with Stats">
            <p className="stat-value" style={{ color: "var(--accent)" }}>85%</p>
            <p className="stat-description">Productivity Score</p>
          </Card>
          <Card title="Card with Button">
            <p className="stat-description" style={{ marginBottom: "12px" }}>Card with an action button</p>
            <Button variant="primary">Action</Button>
          </Card>
        </div>
      </section>

    </main>
  );
}

export default ComponentsPage;
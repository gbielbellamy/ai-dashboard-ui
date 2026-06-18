import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <DashboardLayout page={page} setPage={setPage}>
      <DashboardPage page={page} />
    </DashboardLayout>
  );
}

export default App;
console.log("APP RENDER");
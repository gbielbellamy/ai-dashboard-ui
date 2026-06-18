import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

type Props = {
  children: ReactNode;
  page: string;
  setPage: (page: string) => void;
};

function DashboardLayout({ children, page, setPage }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar page={page} setPage={setPage} />

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;
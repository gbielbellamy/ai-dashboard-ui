import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

type Props = {
  children: ReactNode;
  page: string;
  setPage: (page: string) => void;
};

function DashboardLayout({ children, page, setPage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout">
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sidebar-wrapper ${menuOpen ? "open" : ""}`}>
        <Sidebar
          page={page}
          setPage={(p) => {
            setPage(p);
            setMenuOpen(false);
          }}
        />
      </div>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="layout__main">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
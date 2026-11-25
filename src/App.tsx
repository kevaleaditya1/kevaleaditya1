import { PortfolioSite } from "./components/PortfolioSite";
import { ActivityPage } from "./components/ActivityPage";

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/activity") {
    return <ActivityPage />;
  }

  return <PortfolioSite />;
}
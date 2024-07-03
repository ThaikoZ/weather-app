import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NoPage from "./pages/NoPage";
import { SidebarContextProvider } from "./context/SidebarContext";

export function App() {
  return (
    <Router>
      <SidebarContextProvider>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </SidebarContextProvider>
    </Router>
  );
}

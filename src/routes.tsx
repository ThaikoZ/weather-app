import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NoPage from "./pages/NoPage";
import { SidebarContextProvider } from "./context/SidebarContext";
import TestPage from "./pages/TestPage";

export function App() {
  return (
    <Router>
      <SidebarContextProvider>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<DashboardPage />} />
            <Route path="api" element={<TestPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </SidebarContextProvider>
    </Router>
  );
}

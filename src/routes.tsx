import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NoPage from "./pages/NoPage";
import { SidebarContextProvider } from "./context/SidebarContext";
import LoginPage from "./pages/LoginPage";

export function App() {
  return (
    <Router>
      <SidebarContextProvider>
        <Routes>
          <Route>
            <Route Component={Sidebar}>
              <Route index Component={DashboardPage} />
              <Route path="dashboard" Component={DashboardPage} />
            </Route>
          </Route>
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </SidebarContextProvider>
    </Router>
  );
}

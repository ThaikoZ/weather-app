import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App as AppRoutes } from "./routes";
import { APIProvider } from "@vis.gl/react-google-maps";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <AppRoutes />
    </APIProvider>
  </React.StrictMode>
);

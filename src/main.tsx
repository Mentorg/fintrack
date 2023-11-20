import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Budget from "./features/budget";
import Bills from "./features/bills";
import Reports from "./features/reports";
import Debt from "./features/debt";
import Settings from "./features/settings";
import Investments from "./features/investments";
import NetWorth from "./features/networth";
import Overview from "./features/overview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route path="/" element={<Overview />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/debt" element={<Debt />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/networth" element={<NetWorth />} />
      <Route path="/resources" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

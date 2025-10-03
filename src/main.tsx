import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login.tsx";
import { LayoutWithHeader } from "./components/UI/LayoutWithHeader.tsx";

const router = createBrowserRouter([
  {
    element: <LayoutWithHeader />,
    children: [
      // { path: "/", element: <LandingPage /> },
      { path: "/login", element: <Login /> },
    ],
  },
  { path: "/404", element: <div>404 Not Found page</div> },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);

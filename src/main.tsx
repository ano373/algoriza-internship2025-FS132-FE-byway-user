import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { LayoutWith_Header_Footer } from "./components/UI/LayoutWith_Header_Footer.tsx";
import { ProtectedRoute } from "@components/UI/ProtectedRoute.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import { LandingPage } from "./pages/LandingPage.tsx";
import { CourseListPage } from "./pages/CourseListPage.tsx";
import { LayoutWith_Header } from "./components/UI/LayoutWith_Header.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import CartPage from "./pages/CartPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import CheckOutPage from "./pages/CheckOutPage.tsx";

const router = createBrowserRouter([
  {
    element: <LayoutWith_Header_Footer />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/courses", element: <CourseListPage /> },
      { path: "/courses/:id", element: <CoursePage /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckOutPage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    element: <LayoutWith_Header />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
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

import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { AboutPage } from "@/pages/AboutPage";
import { CateringPage } from "@/pages/CateringPage";
import { ContactPage } from "@/pages/ContactPage";
// Pages - lazy imports deferred but kept as direct imports for simplicity
import { HomePage } from "@/pages/HomePage";
import { MenuPage } from "@/pages/MenuPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
  },
});

// Root route with Layout
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: MenuPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const cateringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catering",
  component: CateringPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  menuRoute,
  aboutRoute,
  cateringRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}

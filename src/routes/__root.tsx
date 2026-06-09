import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "../components/Layout";

function NotFoundComponent() {
  return (
    <Layout>
      <div className="container-narrow py-32 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          The page you're looking for has wandered off the path. Let's get you back home.
        </p>
        <Link to="/" className="inline-block mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition">
          Return home
        </Link>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <Layout>
      <div className="container-narrow py-32 text-center">
        <h1 className="font-display text-3xl text-foreground">This page didn't load</h1>
        <p className="mt-3 text-muted-foreground">Something went wrong. Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full">Try again</button>
          <a href="/" className="border border-border px-5 py-2.5 rounded-full">Go home</a>
        </div>
      </div>
    </Layout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Umoja Women Group — Samburu, Kenya" },
      { name: "description", content: "A women-led Samburu community sharing culture, beadwork, education and warm hospitality in northern Kenya." },
      { property: "og:site_name", content: "Umoja Women Group" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

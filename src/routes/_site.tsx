import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppLoader } from "@/components/common/AppLoader";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const routerIsLoading = useRouterState({
    // TanStack Router state shape varies by minor versions; use a safe narrow type.
    select: (s: Record<string, unknown>) =>
      Boolean(
        (s as { isLoading?: boolean }).isLoading || (s as { status?: string }).status === "pending",
      ),
  });
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setFirstLoad(false));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const showTopBar = useMemo(() => !firstLoad && routerIsLoading, [firstLoad, routerIsLoading]);
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {firstLoad ? <AppLoader /> : null}
      {showTopBar ? <AppLoader variant="bar" /> : null}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

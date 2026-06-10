import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function RequireAdmin({ children }: { children: ReactNode }) {
  const { user, isAdmin, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      setLocation("/admin/login", { replace: true });
    }
  }, [isLoading, setLocation, user]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <p className="text-sm text-muted-foreground">Checking admin access...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <section className="w-full max-w-md rounded-md border border-border bg-card p-6">
          <h1 className="text-xl font-semibold">Access denied</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This account is signed in, but it is not listed in the admins
            collection.
          </p>
          <Button asChild className="mt-5">
            <Link href="/admin/login">Back to login</Link>
          </Button>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}

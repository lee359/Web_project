import { FolderKanban, LogOut } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { logout, user } = useAuth();

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Signed in as</p>
            <h1 className="text-2xl font-semibold">{user?.email}</h1>
          </div>
          <Button onClick={logout} variant="outline">
            <LogOut />
            Sign out
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/admin/projects">
            <a className="block rounded-md border border-border bg-card p-5 transition hover:border-primary/60">
              <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <FolderKanban className="size-5" />
              </div>
              <h2 className="text-lg font-semibold">Projects</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Create, update, and remove project records in Firestore.
              </p>
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}

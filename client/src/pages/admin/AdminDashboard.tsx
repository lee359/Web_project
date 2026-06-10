import { useEffect, useState } from "react";
import { Eye, LogOut } from "lucide-react";
import { doc, onSnapshot, type Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";

type SiteStats = {
  totalViews: number;
  homeViews: number;
  updatedAt?: Timestamp;
};

export default function AdminDashboard() {
  const { logout, user } = useAuth();
  const [stats, setStats] = useState<SiteStats>({
    totalViews: 0,
    homeViews: 0,
  });

  useEffect(() => {
    return onSnapshot(doc(db, "siteStats", "summary"), (snapshot) => {
      if (!snapshot.exists()) {
        setStats({ totalViews: 0, homeViews: 0 });
        return;
      }

      const data = snapshot.data();
      setStats({
        totalViews: Number(data.totalViews ?? 0),
        homeViews: Number(data.homeViews ?? 0),
        updatedAt: data.updatedAt,
      });
    });
  }, []);

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
          <div className="rounded-md border border-border bg-card p-5">
            <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Eye className="size-5" />
            </div>
            <h2 className="text-lg font-semibold">Visitor Stats</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">Total views</p>
                <p className="mt-2 text-3xl font-semibold">
                  {stats.totalViews.toLocaleString()}
                </p>
              </div>
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">Home views</p>
                <p className="mt-2 text-3xl font-semibold">
                  {stats.homeViews.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Last updated:{" "}
              {stats.updatedAt?.toDate
                ? stats.updatedAt.toDate().toLocaleString()
                : "No records yet"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

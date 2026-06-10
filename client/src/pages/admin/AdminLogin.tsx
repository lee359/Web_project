import { useEffect, useState } from "react";
import { LogIn, X } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLogin() {
  const { login, user, isAdmin, isLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [isClosed, setIsClosed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function exitLogin() {
    const returnTo = sessionStorage.getItem("adminLoginReturnTo");

    if (returnTo && !returnTo.startsWith("/admin")) {
      sessionStorage.removeItem("adminLoginReturnTo");
      setLocation(returnTo);
      return;
    }

    sessionStorage.removeItem("adminLoginReturnTo");

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    setIsClosed(true);
  }

  useEffect(() => {
    if (!isLoading && user && isAdmin) {
      setLocation("/admin");
    }
  }, [isAdmin, isLoading, setLocation, user]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      setLocation("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isClosed) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 px-6 text-foreground backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-login-title"
    >
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm rounded-md border border-primary/30 bg-card p-6 shadow-2xl"
      >
        <Button
          className="absolute right-4 top-4"
          onClick={exitLogin}
          size="icon-sm"
          title="Exit login"
          type="button"
          variant="ghost"
        >
          <X />
        </Button>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <LogIn className="size-5" />
          </div>
          <div>
            <h1 id="admin-login-title" className="text-xl font-semibold">
              Admin Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in with Firebase Auth.
            </p>
          </div>
        </div>

        <label className="mb-4 block">
          <span className="mb-2 block text-sm font-medium">Email</span>
          <Input
            autoComplete="email"
            className="border-primary/35 bg-input/60 placeholder:text-muted-foreground focus-visible:border-primary"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@example.com"
            required
            type="email"
            value={email}
          />
        </label>

        <label className="mb-5 block">
          <span className="mb-2 block text-sm font-medium">Password</span>
          <Input
            autoComplete="current-password"
            className="border-primary/35 bg-input/60 placeholder:text-muted-foreground focus-visible:border-primary"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
            type="password"
            value={password}
          />
        </label>

        {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

        <Button className="w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}

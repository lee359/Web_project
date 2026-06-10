import { useEffect, useState } from "react";
import { ArrowLeft, Pencil, Plus, Trash2 } from "lucide-react";
import { Link } from "wouter";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  type Timestamp,
} from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  createdAt?: Timestamp;
};

type ProjectForm = Omit<Project, "id" | "createdAt" | "tech"> & {
  techCsv: string;
};

const emptyForm: ProjectForm = {
  title: "",
  description: "",
  imageUrl: "",
  techCsv: "",
  demoUrl: "",
  repoUrl: "",
};

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<ProjectForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  async function loadProjects() {
    setIsLoading(true);
    setError("");

    try {
      const projectsQuery = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(projectsQuery);
      setProjects(
        snapshot.docs.map((projectDoc) => ({
          id: projectDoc.id,
          title: "",
          description: "",
          imageUrl: "",
          tech: [],
          demoUrl: "",
          repoUrl: "",
          ...projectDoc.data(),
        })) as Project[]
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function updateField(field: keyof ProjectForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function startEditing(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      techCsv: project.tech.join(", "),
      demoUrl: project.demoUrl,
      repoUrl: project.repoUrl,
    });
  }

  function resetForm() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSaving(true);

    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      imageUrl: form.imageUrl.trim(),
      tech: form.techCsv
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
      demoUrl: form.demoUrl.trim(),
      repoUrl: form.repoUrl.trim(),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), payload);
      } else {
        await addDoc(collection(db, "projects"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
      await loadProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(projectId: string) {
    const shouldDelete = window.confirm("Delete this project?");

    if (!shouldDelete) return;

    setError("");

    try {
      await deleteDoc(doc(db, "projects", projectId));
      await loadProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[380px_1fr]">
        <div>
          <Button asChild className="mb-5" variant="outline">
            <Link href="/admin">
              <ArrowLeft />
              Back
            </Link>
          </Button>

          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-border bg-card p-5"
          >
            <h1 className="mb-5 text-xl font-semibold">
              {editingId ? "Edit Project" : "New Project"}
            </h1>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">Title</span>
              <Input
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) => updateField("title", event.target.value)}
                required
                value={form.title}
              />
            </label>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">Description</span>
              <Textarea
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                required
                value={form.description}
              />
            </label>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">Image URL</span>
              <Input
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) =>
                  updateField("imageUrl", event.target.value)
                }
                value={form.imageUrl}
              />
            </label>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">
                Tech tags
              </span>
              <Input
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) => updateField("techCsv", event.target.value)}
                placeholder="React, Firebase, TypeScript"
                value={form.techCsv}
              />
            </label>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium">Demo URL</span>
              <Input
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) => updateField("demoUrl", event.target.value)}
                value={form.demoUrl}
              />
            </label>

            <label className="mb-5 block">
              <span className="mb-2 block text-sm font-medium">Repo URL</span>
              <Input
                className="border-primary/30 bg-input/60 focus-visible:border-primary"
                onChange={(event) => updateField("repoUrl", event.target.value)}
                value={form.repoUrl}
              />
            </label>

            {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

            <div className="flex gap-2">
              <Button disabled={isSaving} type="submit">
                <Plus />
                {isSaving ? "Saving..." : editingId ? "Save" : "Create"}
              </Button>
              {editingId && (
                <Button onClick={resetForm} type="button" variant="outline">
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-md border border-border bg-card p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Firestore Projects</h2>
              <p className="text-sm text-muted-foreground">
                Collection: projects
              </p>
            </div>
            <Button onClick={loadProjects} variant="outline">
              Refresh
            </Button>
          </div>

          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : projects.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No projects in Firestore yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {projects.map((project) => (
                <li
                  className="rounded-md border border-border bg-background p-4"
                  key={project.id}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      {project.tech.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span className="tech-tag" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <Button
                        onClick={() => startEditing(project)}
                        size="icon"
                        title="Edit"
                        type="button"
                        variant="outline"
                      >
                        <Pencil />
                      </Button>
                      <Button
                        onClick={() => handleDelete(project.id)}
                        size="icon"
                        title="Delete"
                        type="button"
                        variant="destructive"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

import { doc, increment, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const VISIT_TRACKED_KEY = "siteVisitTracked";

export async function recordSiteVisit() {
  if (typeof window === "undefined") return;
  if (!db) return;

  if (sessionStorage.getItem(VISIT_TRACKED_KEY) === "true") {
    return;
  }

  sessionStorage.setItem(VISIT_TRACKED_KEY, "true");

  try {
    await setDoc(
      doc(db, "siteStats", "summary"),
      {
        totalViews: increment(1),
        homeViews: increment(1),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    sessionStorage.removeItem(VISIT_TRACKED_KEY);
    console.warn("Failed to record site visit", error);
  }
}

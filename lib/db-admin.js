//file import
import admin from "./firebase-admin";

//node imports
import "firebase/firestore";
import { compareDesc, format, parseISO } from "date-fns";

const db = admin.firestore();
export async function getAllFeedbacks(siteId) {
  try {
    const snapshot = await db
      .collection("feedback")
      .where("siteId", "==", siteId)
      .get();
    const feedback = [];
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });
    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const sitesRef = await db.collection("site").get();
    const sites = [];
    sitesRef.forEach((site) => {
      sites.push({ id: site.id, ...site.data() });
    });
    return { sites };
  } catch (error) {
    return { error };
  }
}

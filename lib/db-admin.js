import admin from "./firebase-admin";
import "firebase/firestore";

const db = admin.firestore();
export async function getAllFeedbacks(siteId) {
  const snapshot = await db
    .collection("feedback")
    .where("siteId", "==", siteId)
    .get();
  const feedback = [];
  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });
  return feedback;
}

export async function getAllSites() {
  const sitesRef = await db.collection("site").get();
  const sites = [];
  sitesRef.forEach((site) => {
    sites.push({ id: site.id, ...site.data() });
  });
  return sites;
}

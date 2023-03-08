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
  const sitesRef = await db.collection("site").get();
  const sites = [];
  sitesRef.forEach((site) => {
    sites.push({ id: site.id, ...site.data() });
  });
  return { sites };
}

export async function getUserSites(userId) {
  const sitesRef = await db
    .collection("site")
    .where("author", "==", userId)
    .get();
  const sites = [];
  sitesRef.forEach((site) => {
    sites.push({ id: site.id, ...site.data() });
  });
  return { sites }; 
}
export async function getUserFeedback(userId) {
  const userFeedback = await db
    .collection("feedback")
    .where("authorId", "==", userId)
    .get();
  const feedback = [];
  userFeedback.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });
  return { feedback };
}
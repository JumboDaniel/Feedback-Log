import firebase from "./firebase";
import "firebase/firestore";

const db = firebase.firestore();

export const createUser = (uid, data) => {
  return db
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = (data) => {
  const site = db.collection('site').doc()
  site.set(data)
  return site;
}; 

export const createFeedback = (data) => {
  return db.collection("feedback").add(data);
}
export const deleteFeedback = (id) => {
  return db.collection("feedback").doc(id).delete()
}
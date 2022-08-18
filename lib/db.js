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
  return db.collection("site").add(data);
}; 

export const createFeedback = (data) => {
  return db.collection("feedback").add(data);
}
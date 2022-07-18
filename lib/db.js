import firebase from "./firebase";
import 'firebase/firestore';


const db = firebase.firestore();

export const createUser = (uid, data) => {
  return db
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};


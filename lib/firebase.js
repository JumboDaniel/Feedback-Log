import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIEBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIEBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIEBASE_PROJECT_ID
  });
}

export default firebase;

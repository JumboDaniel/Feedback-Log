import admin from "firebase-admin";

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIEBASE_PROJECT_ID,
    }),
  });
  console.log("Initialized.");
} catch (error) {
  /* 
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization rror", error.stack);
  }
} 


// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       client_email: process.env.FIREBASE_CLIENT_EMAIL,
//       private_key: process.env.FIREBASE_PRIVATE_KEY,
//       project_id: "feedbacklog-45900",
//     }),
//     databaseURL: "https://feedbacklog.firebaseio.com",
//   });
// }
export default admin;

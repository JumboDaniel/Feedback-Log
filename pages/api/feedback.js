//file imports
import { getUserFeedback } from "@/lib/db-admin";
////Node import
import admin from "@/lib/firebase-admin";

export default async function sites(req, res) {
  try {
    const user = await admin.auth().verifyIdToken(req.headers.token);
    const { feedback, error }= await getUserFeedback(user.uid);
    res.status(200).json({ feedback });
  } 
  ///////////////////////
  catch (error) {
    res.status(500).json({ error }); 
  }
}

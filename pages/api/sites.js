//file imports
import { getUserSites } from "@/lib/db-admin";
////Node import
import admin from "@/lib/firebase-admin";

export default async function sites(req, res) {
  try {
    const token = req.headers.token;
    const user = await admin.auth().verifyIdToken(req.headers.token);
    const { sites, error }= await getUserSites(user.uid);
    res.status(200).json({ sites });
  } 
  ///////////////////////
  catch (error) {
    res.status(500).json({ error }); 
  }
}

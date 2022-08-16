import { getAllSites } from "@/lib/db-admin";
import admin from "@/lib/firebase-admin";
import { database } from "firebase-admin";

export default async function (req, res){
  const firebase = admin.firestore() 
  const sites= await getAllSites()
  res.status(200).json({sites})
};

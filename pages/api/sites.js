import { getAllSites } from "@/lib/db-admin";
import admin from "@/lib/firebase-admin";
import { database } from "firebase-admin";

export default async function sites (req, res){
  const firebase = admin.firestore() 
  const {sites, error}= await getAllSites()
  if(error){
    res.status(500).json({error})
  }
  res.status(200).json({sites})
};

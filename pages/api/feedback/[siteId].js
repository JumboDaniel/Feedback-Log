import { getAllFeedbacks } from "@/lib/db-admin";
import admin from "@/lib/firebase-admin";
import { database } from "firebase-admin";

export default async function (req, res){
  const feedback =  await getAllFeedbacks(req.query.siteId);
  res.status(200).json({feedback})
};
  
import { getAllFeedbacks } from "@/lib/db-admin";
import admin from "@/lib/firebase-admin";
import { database } from "firebase-admin";

export default async function getFeedbacks(req, res){
  const {feedback, error} =  await getAllFeedbacks(req.query.siteId);
  if(error){
    res.status(500).json({error})
  }
  res.status(200).json({feedback})
};
  
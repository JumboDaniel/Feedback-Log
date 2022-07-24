import admin from "@/lib/firebase-admin";
import { database } from "firebase-admin";

export default async function (req, res){
  const firebase = admin.firestore() 
  const sitesRef = await firebase.collection("site").get();
  const data =[]
  sitesRef.forEach(site =>  {
    data.push({id:site.id, ...site.data()})
  })
  res.status(200).json(data)
};

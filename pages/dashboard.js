//file imports
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
//Node imports
import { Button} from "@chakra-ui/react";
import EmptyState from "@/components/EmptyState";

const Dashboard = () => {
  const auth = useAuth();

  if(!auth.user){
    return 'Loading ...'
  }return <EmptyState/> 
};
export default Dashboard;

//file imports
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SkeletonTable";
import DashboardShell from "@/components/dashboard";
import SiteTable from "@/components/SiteTable";

//Node imports
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
 
const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      { data.sites? (<SiteTable sites={data.sites} />) : <EmptyState />}
    </DashboardShell>
  );
};
export default Dashboard;

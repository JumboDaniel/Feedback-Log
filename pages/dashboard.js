//file imports
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SkeletonTable";
import DashboardShell from "@/components/dashboard";
import SiteTable from "@/components/SiteTable";

//Node imports
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
 
const Dashboard = () => {
  const {user} = useAuth();
  // const token = user._delegate.accessToken
  // console.log(token)
  const { data } = useSWR(user ? ["/api/sites", user._delegate.accessToken] : null, fetcher);
  console.log(data)
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

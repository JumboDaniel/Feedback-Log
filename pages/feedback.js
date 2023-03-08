//file imports
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SkeletonTable";
import DashboardShell from "@/components/dashboard";
import FeedbackTable from "@/components/FeedbackTable";

//Node imports
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
 
const UserFeedback = () => {
    const {user} = useAuth();
    const { data } = useSWR(user ? ["/api/feedback", user._delegate.accessToken] : null, fetcher);
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
        { data.feedback? (<FeedbackTable allFeedback={data.feedback } />) : <EmptyState />}
      </DashboardShell>
    );
}

export default UserFeedback
import Feedback from "@/components/Feedback";
import { getAllFeedbacks, getAllSites } from "@/lib/db-admin";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedbacks(siteId);
  console.log(feedback);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths(props) {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="720px"
      margin="0 auto"
    >
      <FormControl my={0}>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <Input type="comment" id="comment" marginBottom="3" />
        <Button fontWeight="medium" type="submit">
          Add Comment
        </Button>
      </FormControl>
      {initialFeedback.map((feedback) => (
        <Feedback {...feedback} key={feedback.id} />
      ))}
    </Box>
  );
};
export default SiteFeedback;

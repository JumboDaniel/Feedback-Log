///FIle Import
import Feedback from "@/components/Feedback";
import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";
import { getAllFeedbacks, getAllSites } from "@/lib/db-admin";

///Node Import
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const {feedback} = await getAllFeedbacks(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths(props) {
  const {sites} = await getAllSites();
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
  const auth = useAuth()
  const router = useRouter()
  const inputEl= useRef(null)
  const [allFeedbacks, setAllFeedbacks] = useState(initialFeedback)
  const handleSubmit= (e) =>{ 
    e.preventDefault();
    const newFedback = {
      author: auth.user.displayName, 
      authorId: auth.user.uid,
      siteId:  router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.providerData[0].providerId,
      status:'pending'
    }
    setAllFeedbacks([newFedback, ...allFeedbacks])
    console.log(newFedback, auth)
    createFeedback(newFedback)

  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="720px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={handleSubmit}>      
      <FormControl my={0}>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <Input type="comment" id="comment" marginBottom="3"  ref={inputEl}/>
        <Button fontWeight="medium" type="submit">
          Add Comment
        </Button>
      </FormControl>
      </Box>

      {allFeedbacks.map((feedback) => (
        <Feedback {...feedback} key={feedback.id} />
      ))}
    </Box>
  );
};
export default SiteFeedback;

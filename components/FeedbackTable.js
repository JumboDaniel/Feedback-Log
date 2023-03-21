//Node imports
import { Box, Skeleton, Link, Code, Switch, IconButton } from "@chakra-ui/react";
// import { DeleteIcon } from '@chakra-ui/icons'

// File Import
import { Table, Tr, Th, Td } from "./table";
import {RemoveButton} from "@/components/feedback/RemoveFeedback"

 
const feedbackbackTable = ({ allFeedback }) => {
  console.log(allFeedback)
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th> 
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Status</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
                <Code>{`/`}</Code>
            </Td>
            <Td>
                <Switch
                defaultChecked={feedback?.status === "active "}/>
                
                </Td> 
            <Td>
               <RemoveButton feedbackId={feedback.id}/>
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default feedbackbackTable;

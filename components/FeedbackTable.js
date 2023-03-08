//Node imports
import { Box, Skeleton, Link, Code } from "@chakra-ui/react";
import NextLink from "next/link";

// File Import
import { Table, Tr, Th, Td } from "./table";
import { format, formatISO, parseISO } from "date-fns";

 
const feedbackbackTable = ({ allFeedback }) => {
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
            <Td fontWeight="medium">{feedback.Name}</Td>
            <Td>{feedback.text}</Td>
            <Td>
                <Code>{`/`}</Code>
            </Td>
            <Td>{feedback.status}</Td> 
            <Td>Remove</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default feedbackbackTable;

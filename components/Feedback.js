import React from "react";
const { Box, Heading, Divider, Text } = require("@chakra-ui/react");
import { format, formatISO, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxWidth="720px" marginTop={10} marginBottom={10}>
      <Heading size="sm" as="h3" mb={0}>
        {author}
      </Heading>
      <Text>{format(parseISO(createdAt), "PPpp")}</Text>
      <Text color="gray.800" marginBottom={4}>{text}</Text>
      <Divider />
    </Box>
  );
};
export default Feedback;

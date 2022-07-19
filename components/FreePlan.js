import React from "react";
import {
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Dashboard from "./dashboard";

const FreePlan = () => (
  <Dashboard>
    <Box
      backgroundColor="white"
      ml="auto"
      mr="auto"
      p={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
    >
      <Heading as="h2" size="lg" p={3}>
        Get Instant Feedback
      </Heading>
      <Heading as="h3" size="md" p={3}>
        Stat and grow with us
      </Heading>
      <Button variant="solid" size="md" m={3}>
        Start now
      </Button>
    </Box>
  </Dashboard>
);

export default FreePlan;

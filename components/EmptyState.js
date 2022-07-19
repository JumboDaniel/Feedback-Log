import React from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import Dashboard from "./dashboard";

const EmptyState = () => (
  <Dashboard>
    <Box
      backgroundColor="white"
      ml="auto"
      mr="auto"
      my="35px"
      p={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      width="100%"
    >
      <Heading as="h2" size="lg" p={3}>
        You haven't added any sites{" "}
      </Heading>
      <Heading as="h3" size="md" p={3}>
        Welcome, let's us get started!{" "}
      </Heading>
      <Button variant="solid" size="md" m={3} fontWeight='medium' >
        Add your first site{" "}
      </Button>
    </Box>
  </Dashboard>
);

export default EmptyState;

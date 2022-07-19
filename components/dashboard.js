import React from "react";
import {
  ChakraProvider,
  Flex,
  Stack,
  Icon,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import Logo from "@/assets/logo";
import { useAuth } from "@/lib/auth";

const Dashboard = (props) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column" height="100%">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        px={6}
        py={4}
      >
        <Stack spacing={6} isInline alignItems="center">
          <Logo />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent="space-around" alignItems="center">
          <Link m={2} fontWeight="medium" >{auth.user.displayName} </Link>
          <Avatar size="sm" src={auth.user.photoURL} />
        </Flex>
      </Flex>
      <Flex flexDirection="row" backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          flexDirection="column"
          maxWidth="80%"
          width="100%"
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink m={3} color="gray.700" font="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading m={3}>My Sites</Heading>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Dashboard;

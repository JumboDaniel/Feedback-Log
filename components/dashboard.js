//Node imports
import React from "react";

//File imports
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import Logo from "@/assets/logo";
import { useAuth } from "@/lib/auth";

const DashboardShell = (props) => {
  const { user, signOut } = useAuth();
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
          <Link m={2} fontWeight="medium">
            {user?.displayName}
          </Link>
          <Avatar size="sm" src={user?.photoURL } />
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
              <BreadcrumbLink m={3} color="gray.700" font="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading m={3}>My Sites </Heading>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;

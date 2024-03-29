//Node imports
import React from "react";
import { Box, Skeleton, Link } from "@chakra-ui/react";
import NextLink from "next/link";

// File Import
import { Table, Tr, Th, Td } from "./table";
import { format, formatISO, parseISO } from "date-fns";

 
const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Box as="tr" key={site.id}>
            <Td fontWeight="medium">{site.Name}</Td>
            <Td>{site.URL}</Td>
            <Td>
              <NextLink href='/p/[siteId]' as={`/p/${site.id}`} passHref>
              <Link color='blue.700' fontWeight="bold">View Feedback</Link> 
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td> 
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;

import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./Table";

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <td>
      {" "}
      <Skeleton height="10px" width="75px" m={4} />
    </td>
    <td>
      {" "}
      <Skeleton height="10px" width="125px" m={4} />
    </td>
    <td>
      {" "}
      <Skeleton height="10px" width="50px" m={4} />
    </td>
    <td>
      {" "}
      <Skeleton height="10px" width="100px" m={4} />
    </td>
    <td>
      {" "}
      <Skeleton height="10px" width="50px" m={4} />
    </td>
  </Box>
);

const SiteTableSkeleton = () => {
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
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;

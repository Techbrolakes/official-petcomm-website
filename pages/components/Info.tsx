import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Info = () => {
  return (
    <>
      <Box bgColor="#F9F9F9">
        <Flex
          textTransform="uppercase"
          justifyContent="space-between"
          layerStyle="container"
          py="50px"
        >
          <Text textStyle="h6"> Peculiar colours </Text>
          <Text textStyle="h6"> Sabre Works</Text>
          <Text textStyle="h6"> itplus HEALTHCARE </Text>
          <Text textStyle="h6"> Christ embassy baltimore </Text>
        </Flex>
      </Box>
    </>
  );
};

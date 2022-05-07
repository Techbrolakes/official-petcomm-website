import {
  Box,
  Image,
  ListItem,
  UnorderedList,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <>
      <Flex
        bgColor="#F9F9F9"
        justifyContent="space-around"
        align="center"
        py={{ base: "50px", lg: "50px" }}
        flexDir={{ base: "column", lg: "column" }}
      >
        <Box mb="20px">
          <Image src="./Image.png" alt="image" width="fit-content" />
        </Box>
        <Box my={{ base: "40px", lg: "0px" }} textAlign="center">
          <Text textStyle="h2" mb="50px">
            Services We Provide
          </Text>

          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justify="space-between"
            textAlign="center"
            px={"5%"}
            gap="20px"
          >
            <Box bgColor="#fff" shadow="md" borderRadius="10px" p="40px">
              <Text textStyle="span">Digital & I.T Solutions</Text>
            </Box>
            <Box bgColor="#fff" shadow="md" borderRadius="10px" p="40px">
              <Text textStyle="span">Brand Consultancy & Management</Text>
            </Box>
            <Box bgColor="#fff" shadow="md" borderRadius="10px" p="40px">
              <Text textStyle="span">
                Social Media & Graphics(illustration/design)
              </Text>
            </Box>
            <Box bgColor="#fff" shadow="md" borderRadius="10px" p="40px">
              <Text textStyle="span">Content Creation & Copywriting</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Services;

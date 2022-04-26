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
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box>
          <Image src="./Image.png" alt="image" width="fit-content" />
        </Box>
        <Box my={{ base: "40px", lg: "0px" }}>
          <Text textStyle="h2" mb="20px">
            Services We Provide
          </Text>
          <UnorderedList spacing="10px" px="5px">
            <ListItem textStyle="xp">Digital Branding and Engagement</ListItem>
            <ListItem textStyle="xp">Social media management</ListItem>
            <ListItem textStyle="xp">Content marketing</ListItem>
            <ListItem textStyle="xp">Online campaigns and ads.</ListItem>
            <ListItem textStyle="xp">Graphics design and illustration</ListItem>
            <ListItem textStyle="xp">Web design and development</ListItem>
            <ListItem textStyle="xp">Brand management and consultancy</ListItem>
            <ListItem textStyle="xp">Copywriting</ListItem>
            <ListItem textStyle="xp">Content creation </ListItem>
            <ListItem textStyle="xp">Social media marketing</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </>
  );
};

export default Services;

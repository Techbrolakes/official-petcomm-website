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
        justifyContent="space-around"
        align="center"
        my="100px"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Image src="./Image.png" alt="image" />
        <Box my={{ base: "40px", lg: "0px" }}>
          <Text textStyle="h2" mb="20px">
            Services We Provide
          </Text>
          <UnorderedList spacing="10px">
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

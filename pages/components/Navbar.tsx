import { Flex, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <>
      <Flex>
        <Image src={"/logo.png"} alt="logo" />
        <UnorderedList display="flex">
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Services</ListItem>
        </UnorderedList>
      </Flex>
    </>
  );
}

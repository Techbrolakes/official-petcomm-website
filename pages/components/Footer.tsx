import React from "react";
import type { NextPage } from "next";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <>
      <Box pt="50px">
        <Flex
          flexDir={{
            base: "column",
            lg: "row",
          }}
          py="2%"
          px="5%"
          justify="space-between"
          borderBottomWidth="1px"
          borderBottomColor="#000"
          align="center"
        >
          <Box display="flex" gap="20px" mb={{ base: "20px", lg: "0px" }}>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaFacebookSquare size="20px" />}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaTwitterSquare size="20px" />}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaLinkedinIn size="20px" />}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaWhatsappSquare size="20px" />}
            />
          </Box>
          <Box>
            <Text textStyle="p"> Call Us - +2348094905198</Text>
          </Box>
        </Flex>
        <Text textAlign="center" textStyle="h6" py="10px">
          Website Built By Lekan Dar
        </Text>
      </Box>
    </>
  );
};

export default Footer;

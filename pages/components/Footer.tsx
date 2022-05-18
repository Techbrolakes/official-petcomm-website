import React from "react";
import type { NextPage } from "next";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import {
  BrandLinkedin,
  BrandWhatsapp,
  BrandFacebook,
} from "tabler-icons-react";
import { Button } from "@mantine/core";
import { FaPhoneAlt } from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <>
      <Box pt="50px">
        <Flex
          py="2%"
          gap="8px"
          wrap={"wrap"}
          justify="center"
          borderTopWidth="1px"
          borderTopColor="#fff"
          align="center"
        >
          <Button size="sm" leftIcon={<BrandLinkedin size={20} />}>
            LinkedIn
          </Button>
          <Button mx="10px" size="sm" leftIcon={<FaPhoneAlt size={20} />}>
            +2347054294179
          </Button>
          <Button mx="10px" size="sm" leftIcon={<BrandWhatsapp size={20} />}>
            <a href="https://wa.me/+2347069217291?text=Hi,%20Lekan%20Dar%20I%20love%20your%20works">
              WhatsApp
            </a>
          </Button>
          <Button mx="10px" size="sm" leftIcon={<BrandFacebook size={20} />}>
            Facebook
          </Button>
        </Flex>
        <Text textAlign="center" textStyle="pWhite" py="10px">
          &copy; Petcomm 2022
        </Text>
      </Box>
    </>
  );
};

export default Footer;

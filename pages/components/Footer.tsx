import React from "react";
import type { NextPage } from "next";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { BrandLinkedin, BrandWhatsapp } from "tabler-icons-react";
import { Button } from "@mantine/core";

const Footer: NextPage = () => {
  return (
    <>
      <Box pt="50px">
        <Flex
          py="2%"
          gap="8px"
          justify="center"
          borderBottomWidth="1px"
          borderBottomColor="#fff"
          align="center"
        >
          <Button size="sm" leftIcon={<BrandLinkedin size={20} />}>
            LinkedIn
          </Button>
          <Button mx="10px" size="sm" leftIcon={<BrandWhatsapp size={20} />}>
            WhatsApp
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

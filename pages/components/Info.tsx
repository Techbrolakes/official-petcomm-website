import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

import type { NextPage } from "next";
import MessageModal from "./MessageModal";

const Info: NextPage = () => {
  return (
    <>
      <Box bgColor="#F9F9F9" py={{ base: "40px", lg: "100px" }}>
        <Box
          padding={{ base: "15px", lg: "30px" }}
          textAlign="center"
          width={{ base: "90%", md: "85%", lg: "80%" }}
          mx="auto"
          bgColor="#fff"
          shadow="lg"
          borderRadius="2xl"
        >
          <Text textStyle="h2" mb="20px">
            {" "}
            Book A free Consultancy with Us
          </Text>

          <MessageModal />
        </Box>
      </Box>
    </>
  );
};

export default Info;

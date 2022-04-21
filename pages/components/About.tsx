import React from "react";
import type { NextPage } from "next";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const AboutBox = () => {
  return (
    <Box shadow="lg" width="350px" p="40px" textAlign="center">
      <Text textStyle="pp">
        We are your bridge to that technological break and innovative concept
        you seek in the digital and I.T space
      </Text>
    </Box>
  );
};

const About: NextPage = () => {
  return (
    <>
      <Stack p="50px" bgImage="/bg.png">
        <Box textAlign="center">
          <Text textStyle="h11">Who Are We</Text>
          <Text textStyle="pp" p="40px">
            With years of hands-on experience, our team of experts are very well
            acquainted with the challenges businesses and companies encounter
            and are committed to providing a positive ROI and increased
            productivity that are cost effective and pocket friendly. So, who
            would you rather be, the shark of the ocean or the fish of the
            ocean?
          </Text>
        </Box>
        <Flex justifyContent="space-around">
          <AboutBox />
          <AboutBox />
          <AboutBox />
        </Flex>
      </Stack>
    </>
  );
};

export default About;

import React from "react";
import type { NextPage } from "next";
type detailsProps = {
  details: string;
};
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const AboutBox = (props: detailsProps) => {
  return (
    <Box
      shadow={{ base: "md", lg: "lg" }}
      width={{ base: "100%", lg: "350px" }}
      p={{ base: "20px", lg: "40px" }}
      textAlign="center"
    >
      <Text textStyle="p">{props.details}</Text>
    </Box>
  );
};

const About: NextPage = () => {
  return (
    <>
      <Stack bgColor="#f9f9f9" py={{ base: "50px", lg: "100px" }}>
        <Box textAlign="center">
          <Text textStyle="h1">Who Are We?</Text>
          <Text textStyle="span" p={{ base: "10px", lg: "40px" }}>
            With years of hands-on experience, our team of experts are very well
            acquainted with the challenges businesses and companies encounter
            and are committed to providing a positive ROI and increased
            productivity that are cost effective and pocket friendly. So, who
            would you rather be, the shark of the ocean or the fish of the
            ocean?
          </Text>
        </Box>
        <Flex
          justifyContent={{ base: "space-between", lg: "space-around" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <AboutBox
            details=" We are your bridge between that technological break and innovative concept
        you seek in the digital and I.T space"
          />
          <AboutBox details=" We brand, you trend, through our aesthetically pleasing visual representation and brand management consultancy services" />
          <AboutBox details=" We are your guide and we provide a safe landing for all your social media needs and queries" />
        </Flex>
      </Stack>
    </>
  );
};

export default About;

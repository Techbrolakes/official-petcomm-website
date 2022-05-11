import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import type { NextPage } from "next";
import Footer from "./Footer";

const Community: NextPage = () => {
  return (
    <>
      <Stack pt="90px" bgImage={"./bbg.png"}>
        <Box textAlign="center">
          <Text textStyle="h11">Join Our Community</Text>
          <Text textStyle="spanWhite" p={{ base: "20px", lg: "50px" }}>
            Join our ever expanding community of vibrant and enterprising
            individuals to gain access to exclusive content on high income
            skills. Be a petcomm-er today!.
          </Text>
          <Button
            colorScheme="red"
            textStyle="p"
            shadow="lg"
            p="25px"
            mt="10px"
          >
            Join Our Community{" "}
          </Button>
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default Community;

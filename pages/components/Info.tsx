import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import type { NextPage } from "next";

export const Info: NextPage = () => {
  return (
    <>
      <Box
        bgColor="#F9F9F9"
        my="100px"
        py="50px"
        layerStyle="container"
        textTransform="uppercase"
      >
        <Text textAlign="center" pb="30px" textStyle="p">
          Some Brands We have worked with
        </Text>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Text textStyle="h6"> Peculiar colours </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text textStyle="h6"> Sabre Works</Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text textStyle="h6"> Peculiar colours </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text textStyle="h6"> itplus HEALTHCARE </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text textStyle="h6"> Peculiar colours </Text>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

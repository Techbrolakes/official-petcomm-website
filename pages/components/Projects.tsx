import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import type { NextPage } from "next";

const Project: NextPage = () => {
  return (
    <>
      <Box
        bgColor="#F9F9F9"
        py="50px"
        layerStyle="container"
        textTransform="uppercase"
      >
        <Text pb="30px" textStyle="h2">
          Some Of Our Works
        </Text>
        <Swiper
          style={{ padding: "50px 10px" }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
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
            <Image
              src="/p1.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/p3.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/p8.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/p4.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/p2.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/p5.jpg"
              alt="projectimg"
              borderRadius="20px"
              shadow="md"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Project;

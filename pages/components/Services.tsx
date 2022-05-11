import {
  Box,
  Image,
  ListItem,
  UnorderedList,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const service = [
    {
      name: "Digital & I.T Solutions",
    },
    {
      name: "Brand Consultancy & Management",
    },
    {
      name: "Social Media & Graphics (illustration / design)",
    },
    {
      name: "Content Creation & Copywriting",
    },
    {
      name: "Online Campaigns & ads",
    },
  ];
  return (
    <>
      <Flex
        bgColor="#F9F9F9"
        justifyContent="space-around"
        align="center"
        py={{ base: "50px", lg: "50px" }}
        flexDir={{ base: "column", lg: "column" }}
      >
        <Box mb="20px">
          <Image src="./Image.png" alt="image" width="fit-content" />
        </Box>
        <Box my={{ base: "40px", lg: "0px" }} textAlign="center">
          <Text textStyle="h2" mb="50px">
            Services We Provide
          </Text>

          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justify="space-between"
            textAlign="center"
            gap="20px"
            px={"5%"}
          >
            {service.map((eachService) => (
              <Box
                w={"60"}
                bgColor="#fff"
                shadow="md"
                borderRadius="10px"
                p="30px"
                key={eachService.name}
              >
                <Text textStyle="span">{eachService.name}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Services;

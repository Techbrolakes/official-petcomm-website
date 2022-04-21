import {
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "./components/About";
import Info from "./components/Info";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Petcomm Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack bgImage="/bg.png">
        <Box pr="5%">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py="20px"
            textStyle="pp"
          >
            <Image src={"/logo.png"} alt="logo" />
            <UnorderedList display="flex" gap="20px" listStyleType={"none"}>
              <ListItem>About</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Community</ListItem>
              <ListItem>Contact</ListItem>
            </UnorderedList>
          </Flex>
        </Box>

        <Flex layerStyle="container" py="30px">
          <Box>
            <Text textStyle="h11">Digital Marketing Agency With A Swag</Text>
            <Text textStyle="pp" my="20px">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </Text>
            <Button colorScheme="red" textStyle="p" shadow="lg" p="25px">
              Book A Free Consultancy
            </Button>
          </Box>
          <Image src="/RightImage.png" alt="image" width="50%" />
        </Flex>
      </Stack>

      <Box>
        <Info />
      </Box>

      <Box>
        <About />
      </Box>
    </Box>
  );
};

export default Home;

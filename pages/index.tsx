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
  Skeleton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import About from "./components/About";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Project from "./components/Projects";
import Services from "./components/Services";
import "react-loading-skeleton/dist/skeleton.css";
import MessageModal from "./components/MessageModal";
import { FaBars, FaMedal } from "react-icons/fa";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      <Head>
        <title>Petcomm</title>
        <meta name="description" content="Petcomm Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Flex
          bgImage={"./bbg.png"}
          minH="100vh"
          align="center"
          justify="center"
        >
          <FadeLoader color="#ffffff" loading={loading} />
        </Flex>
      ) : (
        <Box>
          <Stack bgImage={"./bbg.png"} pb="100px">
            <Box px="5%">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                py="20px"
                textStyle="pWhit"
              >
                <Image
                  src={"/mainlogo.png"}
                  alt="logo"
                  width={{ base: "180px", lg: "220px" }}
                />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FaBars />}
                  />
                  <MenuList textStyle="p">
                    <MenuItem icon={<FaMedal />}>Blog Page</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            <Box textAlign="center" py="20px">
              <Text
                mx="auto"
                width={{
                  base: "100%",
                  lg: "65%",
                }}
                textStyle="h11"
              >
                Digital Marketing Agency With A Swag
              </Text>
              <Text
                width={{
                  base: "100%",
                  lg: "80%",
                }}
                textStyle="spanWhite"
                my="30px"
                mx="auto"
                px="5px"
              >
                We are your bridge to that technological break and innovative
                concept you seek in the digital and I.T space
              </Text>
              <MessageModal />
            </Box>
          </Stack>

          <Box>
            <About />
          </Box>

          <Box>
            <Info />
          </Box>

          <Stack>
            <Services />
          </Stack>

          <Stack>
            <Project />
          </Stack>

          <Stack>
            <Community />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Home;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["40px", "45px", "50px", "60px"],
      fontFamily: "ManropeBold",
      color: "#36454F",
    },
    h2: {
      fontSize: ["25px", "30px", "40px", "50px"],
      fontFamily: "ManropeRegular",
    },
    h6: {
      fontSize: "25px",
      color: "#36454F",
      fontFamily: "NunitoBold",
    },
    p: {
      fontSize: ["14px", "15px", "16px", "17px"],
      fontFamily: "NunitoRegular",
      color: "#36454F",
    },
  },
  layerStyles: {
    container: {
      px: "5%",
    },
  },
});

export default theme;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["40px", "45px", "62px", "72px"],
      fontFamily: "ManropeBold",
      color: "#36454F",
    },
    h11: {
      fontSize: ["40px", "45px", "62px", "72px"],
      fontFamily: "ManropeBold",
      color: "#ffffff",
    },
    h2: {
      fontSize: ["25px", "30px", "40px", "50px"],
      fontFamily: "ManropeRegular",
    },
    h6: {
      fontSize: ["14px", "15px", "16px", "17px"],
      color: "#fffff",
      fontFamily: "NunitoBold",
    },
    h66: {
      fontSize: "25px",
      color: "#fffff",
      fontFamily: "NunitoBold",
    },
    p: {
      fontSize: ["14px", "15px", "16px", "17px"],
      fontFamily: "NunitoRegular",
      color: "#36454F",
    },
    pWhite: {
      fontSize: ["14px", "15px", "16px", "17px"],
      fontFamily: "NunitoRegular",
      color: "#ffffff",
    },
    span: {
      fontSize: ["14px", "17px", "22px", "25px"],
      fontFamily: "NunitoRegular",
      color: "#36454F",
    },
    spanWhite: {
      fontSize: ["14px", "17px", "22px", "25px"],
      fontFamily: "NunitoRegular",
      color: "#ffffff",
    },
    xp: {
      fontSize: ["14px", "15px", "21px", "22px"],
      fontFamily: "NunitoRegular",
      color: "#36454F",
    },
    xxp: {
      fontSize: ["14px", "15px", "21px", "22px"],
      fontFamily: "NunitoRegular",
      color: "#ffffff",
    },
    pp: {
      fontSize: ["14px", "15px", "16px", "17px"],
      fontFamily: "NunitoRegular",
      color: "#fff",
    },
  },
  layerStyles: {
    container: {
      px: "5%",
    },
  },
});

export default theme;

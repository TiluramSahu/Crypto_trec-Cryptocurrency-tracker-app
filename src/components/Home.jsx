import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"#00337C"} w={"full"} h={"85vh"}>
            <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      </motion.div>

      <Text
        fontSize={"8xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        marginTop={"-20"}
        fontFamily={"monospace"}
      >
        Crypto Trek
      </Text>
    </Box>
  );
};

export default Home;

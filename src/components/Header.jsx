import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack
        p={"4"}
        shadow={"base"}
        bgColor={"blackAlpha.900"}
        justifyContent={"Left"}
      >
        <Button
          variant={"unstyled"}
          color={"white"}
          paddingRight={"5"}
          paddingLeft={"20"}
        >
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} paddingRight={"5"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} paddingRight={"10"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;

import { Flex, Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineGoogle,
  AiOutlineApple,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box mt={"5rem"} boxShadow={"0px -5px 32px rgba(74, 165, 198, 0.15)"} >
        <Container maxW={"container.xl"}>
          <Box p={10}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Flex gap={"2vw"}>
                <Text fontSize={"1rem"}>
                  <Link to={"https://hoogaaa.com/about"}>About Us</Link>
                </Text>
                <Text fontSize={"1rem"}>
                  <Link to={"https://hoogaaa.com/products"}>Features</Link>
                </Text>
                <Text fontSize={"1rem"}>
                  <Link to={"https://hoogaaa.com"}>News</Link>
                </Text>
                <Text fontSize={"1rem"}>
                  <Link to={"/"}>Apps</Link>
                </Text>
                <Text fontSize={"1rem"}>
                  <Link to={"https://hoogaaa.com/"}>Contact Us</Link>
                </Text>
              </Flex>
              <Flex gap={"2vw"} alignItems={"center"}>
                <Link to={"https://www.instagram.com/hacksatya/"}>
                  <AiOutlineInstagram color="#D85E33" fontSize={"1.5rem"} />
                </Link>
                <Link to={"/"}>
                  <AiOutlineGoogle color="#D85E33" fontSize={"1.5rem"} />
                </Link>
                <Link to={"/"}>
                  <AiOutlineApple color="#D85E33" fontSize={"1.5rem"} />
                </Link>
                <Link to={"/"}>
                  <AiOutlineFacebook color="#D85E33" fontSize={"1.5rem"} />
                </Link>
              </Flex>
            </Flex>
          </Box>
          <Box borderTop={"1px solid rgba(0,0,0,0.1)"} p={10}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text color={"#5F6D7E"}>
                © 2023 <a href="www.hoogaaa.com">URL</a>. All Rights Reserved.
              </Text>
              <Flex gap={"2vw"} alignItems={"center"}>
                <Link to={"/"}>
                  <Text color={"#5F6D7E"}>Privacy Policy</Text>
                </Link>
                <Link to={"/"}>
                  <Text color={"#5F6D7E"}>Terms & Conditions</Text>
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

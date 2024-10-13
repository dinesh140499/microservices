import { Container, Box, Text, Input, Flex } from "@chakra-ui/react";
import MyButton from "./MyButton";
import { useState } from "react";
import YourShortenUrl from "./YourShortenUrl";
import Chooseus from "./Chooseus";
import bg from '../assets/images/pic.jpg'

const Shortner = () => {
  const [toggle, setToggle] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleCopy = () => {
    if (!inputText) {
      alert("Field Is Blank");
    } else {
      setToggle(true);
      setInputVal(inputText);
    }
  };

  return (
    <>
      <Flex alignItems={"center"} minH={"60vh"} background={`url(${bg})`} backgroundRepeat={"no-repeat"} backgroundSize={"100% 100%"} h={"auto"} p="15px" py={"50px"}>
        {toggle ? (
          <YourShortenUrl
            urlVal={inputVal}
            toggleFun={() => setToggle(!toggle)}
            inputFn={() => setInputText("")}
          />
        ) : (
          <Container
            maxW={"600px"} p={"10"}
            backgroundColor={"rgba(255, 255, 255, 0.6);"}
            borderRadius={"10px"}
          
          >
            <Box textAlign={"center"}>
              <Text
                color={"black"}
                fontWeight={"500"}
                fontSize={{ base: "30px" }}
              >
                Shorten URL
              </Text>
              <Text color={"#606060"} fontSize={"25px"} mt={"1"}>
                URL when the shorter, the better
              </Text>
              <Flex
                align={"center"}
                gap={"10px"}
                mt={"5"}
                flexWrap={{ base: "wrap", md: "unset" }}
                justifyContent={"center"}
              >
                <Input
                  placeholder="Enter URL here..."
                  fontWeight={"400"}
                  py={"6"}
                  fontSize={"20px"}
                  color={"rgba(0,0,0,0.6)"}
                  onChange={(e) => setInputText(e.target.value)}
                  value={inputText}
                  border={"1px solid #D85E33"}
                  _focusVisible={"#D85E33"}
                  _focus={"#D85E33"}
                  _hover={"#D85E33"}
                />
                <MyButton
                  content={"Shorten Now"}
                  myFun={handleCopy}
                  mt={"30px"}
                  myBgColor={"#D85E33"}
                  myBorder={"#fff"}
                />
              </Flex>
              <Text mt={"5"} fontSize={"18px"} color={"#606060"}>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </Text>
            </Box>
          </Container>
        )}
      </Flex>
      <Chooseus />
    </>
  );
};

export default Shortner;

import {
  Container,
  Box,
  Text,
  Input,
  Flex,
  Button,
  Spinner,
  VStack
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";
import axios from "axios";
import Loader from "./Loader";
import Clipboard from "react-copy-to-clipboard";

Spinner;

const YourShortenUrl = ({ urlVal, toggleFun, inputFn }) => {
  const [shortUrl, setShortUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFn = () => {
    toggleFun(inputFn());
  };

  const fetchData = async () => {
    try {
      if (urlVal) {
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${urlVal}`
        );
        setShortUrl(res.data.result.full_short_link);
      }
    } catch (error) { }
  };
  useEffect(() => {
    fetchData();
    setLoader(false);
  }, [urlVal]);

  return (
    <>

      <Container
        maxW={"600px"} p={"5"}
        backgroundColor={"rgba(255, 255, 255, 0.6);"}

        borderRadius={"10px"}
      >
        {loader?<Loader />:<Flex alignItems={"center"} justifyContent={"center"} flexDirection={"column"}> 
        <Box textAlign={"center"}>
          <Text
            color={"black"}
            fontWeight={"500"}
            fontSize={{ base: "30px" }}
          >
            Your shorten URL
          </Text>
          <Text color={"#606060"} fontSize={"25px"} mt={"1"}>
            Here is your shorten URL
          </Text>
          {copied ? (
            <Text
              fontStyle={"italic"}
              transition={"0.5s linear"}
              transform={"scale(1.2)"}
            >
              Copied
            </Text>
          ) : (
            ""
          )}
          <Flex alignItems={"center"} gap={"10px"}>
          <Input
            placeholder="Enter URL here..."
            fontWeight={"400"}
            py={"6"}
            fontSize={"20px"}
            color={"rgba(0,0,0,0.6)"}
            readOnly
            value={shortUrl}
            mt={"30px"}
            border={"1px solid #D85E33"}
            _focusVisible={"#D85E33"}
            _focus={"#D85E33"}
            _hover={"#D85E33"}
          />


          <Clipboard text={shortUrl} onCopy={() => setCopied(true)}>
            <Button
              content={"Copy URL"}
              mt={"30px"}
              backgroundColor={"#D85E33"}
              myBorder="none"
              fontSize={"20px"}
              color={"white"}
              p={"25px 45px"}
              borderRadius={"10px"}
              _hover={"#2E4143"}
              border={"none"}
              outline={"none"}
              _focusVisible={"#D85E33"}
              _active={"#D85E33"}
            >Copy URL</Button>
          </Clipboard>
        </Flex>
        </Box>
        {shortUrl && (
          <Flex
            mt={"5"}
            flexDirection={{ base: "column", md: "row" }}
            fontSize={"18px"}
            gap={"10px"}
            color={"#121212"}
            fontWeight={"500"}
            flexWrap={"wrap"}
            width={"full"}
            textAlign={{ base: "center", lg: "left" }}
          >
           <Text textAlign={{ base: "center", lg: "left" }}> Previous Url :</Text>
            <Link to={urlVal} style={{ width: "100%" }}>
              <Text color={"#4AA5C6"}>{urlVal}</Text>
            </Link>
          </Flex>
        )}
        <Box mt={"2rem"} textAlign={"center"}>
          <MyButton
            content={"Shorten Another"}
            myFun={handleFn}
            myBgColor={"#D85E33"}
            myBorder={"1px solid #D85E33"}
          />
        </Box>
      </Flex>}
      </Container>
    </>
  );
};

export default YourShortenUrl;

import { Box, Text, Flex, Card, Grid, Image,Container } from "@chakra-ui/react";
import React, { useState } from "react";
import dataChoose from "./data";
import { Link } from "react-router-dom";
import { BiLinkExternal } from 'react-icons/bi'

const Chooseus = () => {
  const [data] = useState(dataChoose);
  return (
    <Container maxW={"1380px"} mt={"50px"} p={"50px"}>
      <Box p={"10px"} textAlign={"center"}>
        <Text fontSize={"32px"} fontWeight={"500"}>
          Frequently Asked Questions
        </Text>
        <Text mt={"10px"} fontSize={"19px"} color={"#A0A0A0"} maxW={"800px"} mx={"auto"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,2fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={6}
        mt={"50px"}
      >
        {data.map((cur) => {
          const { id, icon, title, desc } = cur;
          return (
            <Card
              key={id}
              style={{ border: "none", boxShadow: "none" }}
              textAlign={{base:"center",lg:"left"}}

            >
              <Flex
                h={"60px"}
                width={"60px"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"50%"}
                bgColor={"#D85E33"}
                mx={{base:"auto",lg:"unset"}}
                
              >
                <Image
                  src={icon}
                  color={"white"}
                  width={"50%"}
                  height={"50%"}
                  filter={"invert(100%)"}
                ></Image>
              </Flex>
              <Text mt={"3"} color={"#D85E33"} fontSize={"28px"} >
                {title}
              </Text>
              <Text color={"#A0A0A0"} fontWeight={"400"} fontSize={"18px"}>
                {desc.li1}
              </Text>
              <Text color={"#A0A0A0"} fontWeight={"400"} fontSize={"18px"}>
                {desc.li2}
              </Text>
              <Text color={"#A0A0A0"} fontWeight={"400"} fontSize={"18px"}>
                {desc.li3}
              </Text>
              <Link to={"https://hoogaaa.com/"} >
                <Flex alignItems={"center"} justifyContent={{base:"center",lg:"left"}} mt={"10px"} gap={"5px"} fontSize={"18px"} color={"#D85E33"} fontWeight={"500"}>See All <BiLinkExternal /></Flex>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Chooseus;

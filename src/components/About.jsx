import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import profile from "../assets/profile.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      height="100vh"
      bgColor="#5C5470"
      className="outer"
      zIndex="999"
      display="flex"
      alignItems="center"
      gap={20}
      justifyContent="center"
      id="about"
    >
      <Box
        height="60vh"
        width="30%"
        bgColor="#B9B4C7"
        className="inner"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        boxShadow="-15px 15px 50px 2px #352F44"
      >
        <Image
          src={profile}
          alt="profile"
          h="170px"
          borderRadius="50%"
          width="170px"
          mt="40px"
        />
        <Text
          fontWeight={700}
          fontSize="1.5rem"
          textAlign="center"
          mt="30px"
          lineHeight="1.2"
        >
          Nikson <br />
          Shrestha
        </Text>

        <Heading fontWeight={500} fontSize="1.1rem" letterSpacing={4} mt="10%">
          Web Developer
        </Heading>
        <Box fontSize="1.6rem" display="flex" gap={7} mt={20}>
          <BiLogoFacebook cursor="pointer" />
          <AiOutlineInstagram cursor="pointer" />
          <LiaTelegramPlane cursor="pointer" />
        </Box>
      </Box>
      <Box color="white">
        <Box>
          <Heading fontSize="5rem">Hello,</Heading>
          <Text fontSize="1.7rem">{`Here's who I am & what I do`}</Text>
        </Box>
        <Box display="flex" gap={20} letterSpacing={5} width="100%" mt={7}>
          <Button
            cursor="pointer"
            padding={10}
            letterSpacing={4}
            bgColor="#B9B4C7"
            color="black"
            border="none"
            borderRadius="60px"
            _hover={{
              bgColor: "#FAF0E6",
              transition: "ease-in 0.4s",
            }}
            width="50%"
            onClick={() => scrollToSection("resume")}
          >
            RESUME
          </Button>
          <Button
            cursor="pointer"
            padding={10}
            bgColor="transparent"
            border="2px solid white"
            borderRadius="60px"
            letterSpacing={5}
            color="white"
            _hover={{
              bgColor: "#FAF0E6",
              color: "black",
              transition: "ease-in 0.4s",
            }}
            width="50%"
            onClick={() => scrollToSection("project")}
          >
            PROJECT
          </Button>
        </Box>
        <Text mt={20}>Highly motivated and enthusiastic individual</Text>
      </Box>
    </Box>
  );
};

export default About;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Box
      height="max-content"
      bgColor="#5C5470"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="50px"
      id="contact"
    >
      <Heading
        letterSpacing={9}
        fontSize="3rem"
        fontWeight={800}
        mt="100px"
        data-aos="zoom-out"
      >{`Let's talk`}</Heading>

      <Box
        bgColor="#FAF0E6"
        height="max-content"
        padding="70px"
        width="50%"
        color="black"
        mt={70}
        borderRadius={10}
        data-aos="slide-right"
      >
        <FormControl>
          <Box display="flex" gap={40} justifyContent="space-between">
            <Box width="100%">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                padding={6}
                borderColor="transparent transparent black transparent" // Add a border to the bottom only
                borderWidth="0 0 2px 0" // Set the thickness of the bottom border
                bgColor="transparent"
                _focus={{
                  borderColor: "transparent transparent black transparent",
                  borderWidth: "0 0 2px 0",
                }} // Add border on focus
                _placeholder={{ color: "gray.400" }} // Customize placeholder color
                outline="none"
                width="100%"
              />
            </Box>
            <Box width="100%">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                padding={6}
                borderColor="transparent transparent black transparent" // Add a border to the bottom only
                borderWidth="0 0 2px 0" // Set the thickness of the bottom border
                bgColor="transparent"
                _focus={{
                  borderColor: "transparent transparent black transparent",
                  borderWidth: "0 0 2px 0",
                }} // Add border on focus
                _placeholder={{ color: "gray.400" }} // Customize placeholder color
                outline="none"
                width="100%"
              />
            </Box>
          </Box>
          <Box mt={50}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              padding={6}
              borderColor="transparent transparent black transparent" // Add a border to the bottom only
              borderWidth="0 0 2px 0" // Set the thickness of the bottom border
              bgColor="transparent"
              _focus={{
                borderColor: "transparent transparent black transparent",
                borderWidth: "0 0 2px 0",
              }} // Add border on focus
              _placeholder={{ color: "gray.400" }} // Customize placeholder color
              outline="none"
              width="100%"
            />
          </Box>
          <Box mt={50}>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              padding={6}
              borderColor="transparent transparent black transparent" // Add a border to the bottom only
              borderWidth="0 0 2px 0" // Set the thickness of the bottom border
              bgColor="transparent"
              _focus={{
                borderColor: "transparent transparent black transparent",
                borderWidth: "0 0 2px 0",
              }} // Add border on focus
              _placeholder={{ color: "gray.400" }} // Customize placeholder color
              outline="none"
              width="100%"
            />
          </Box>
          <Box mt={50}>
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              padding={6}
              borderColor="transparent transparent black transparent" // Add a border to the bottom only
              borderWidth="0 0 2px 0" // Set the thickness of the bottom border
              bgColor="transparent"
              _focus={{
                borderColor: "transparent transparent black transparent",
                borderWidth: "0 0 2px 0",
              }} // Add border on focus
              _placeholder={{ color: "gray.400" }} // Customize placeholder color
              outline="none"
              width="100%"
            />
          </Box>

          <Button
            cursor="pointer"
            padding={10}
            letterSpacing={4}
            bgColor="#B9B4C7"
            color="black"
            border="none"
            borderRadius="60px"
            _hover={{
              bgColor: "#5C5470",
              transition: "ease-in 0.2s",
              color: "white",
            }}
            mt={20}
          >
            SEND
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Contact;

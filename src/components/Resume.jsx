import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

const Resume = () => {
  return (
    <Box height="max-content" bgColor="#5C5470" color="white">
      <Box width="80%" margin="0 auto">
        <Text
          letterSpacing={9}
          fontSize="3rem"
          fontWeight={800}
          textAlign="center"
        >
          RESUME
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          width="50%"
          margin="70px auto"
        >
          <Text fontSize="1.7rem" fontWeight={600}>
            Education
          </Text>
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
          >
            DOWNLOAD CV
          </Button>
        </Box>

        <Box
          bgColor="#FAF0E6"
          height="40vh"
          color="black"
          width="50%"
          margin="70px auto"
          boxShadow="-15px 15px 50px 2px #352F44"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="50"
        >
          <Box>
            <Text color="#5C5470">2076 - Current</Text>
            <Text>Prime College</Text>
            <Text>Khusibhu,kathmandu</Text>
          </Box>
          <Box>
            <Text color="#5C5470">2074 - 2076</Text>
            <Text>Global College of Management</Text>
            <Text>Mid-Baneshowr,kathmandu</Text>
          </Box>
        </Box>

        <Box
          bgColor="#FAF0E6"
          height="40vh"
          color="black"
          width="50%"
          margin="auto"
          boxShadow="-15px 15px 50px 2px #352F44"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="50"
        >
          <Box mt={50}>
            <Box>
              <Text color="#5C5470" fontSize="1.5rem" fontWeight={800}>
                Professional skillset
              </Text>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={30}
                mt={10}
              >
                <GridItem colSpan={1} display="flex" alignItems="center">
                  <BiRightArrow />
                  <Text> HTML,CSS</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>JavaScript</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>React</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>ChakraUI</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>NodeJS</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>Git,Github</Text>
                </GridItem>
              </Grid>
            </Box>

            <Box mt={40}>
              <Text color="#5C5470" fontSize="1.5rem" fontWeight={800}>
                Languages
              </Text>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={30}
                mt={10}
              >
                <GridItem colSpan={1} display="flex" alignItems="center">
                  <BiRightArrow />
                  <Text>Nepali</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>English</Text>
                </GridItem>
                <GridItem colSpan={1} display="flex" alignItems="center">
                  {" "}
                  <BiRightArrow />
                  <Text>Hindi</Text>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

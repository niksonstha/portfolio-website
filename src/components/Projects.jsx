import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import weatherapp from "../assets/weatherapp.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  const link = "https://github.com/niksonstha/weather-app-react";

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Box
      height="100vh"
      bgColor="#5C5470"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      id="project"
    >
      <Box height="30vh">
        <Text
          letterSpacing={9}
          fontSize="3rem"
          fontWeight={800}
          textAlign="center"
          data-aos="zoom-in"
        >
          PROJECT
        </Text>
        <Text
          textAlign="justify"
          width="40%"
          fontWeight="200"
          fontSize="0.9rem"
          margin="0px auto"
          data-aos="zoom-in"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
          perferendis tempore quae culpa quia facere ut corrupti velit magnam
          blanditiis rerum, quo sapiente quibusdam. Molestias debitis hic
          provident dolor perspiciatis.
        </Text>
      </Box>

      <Box
        bgColor="#FAF0E6"
        height="max-content"
        width="70%"
        boxShadow="-15px 15px 50px 2px #352F44"
        color="black"
        display="flex"
        alignItems="center"
        data-aos="slide-right"
      >
        <Box width="60%" padding={10}>
          <Heading color="#5C5470" fontSize="1.2rem" fontWeight={500}>
            Weather App in React JS
          </Heading>
          <Text textAlign="justify" mt={7}>
            A weather app in React.js using Axios fetches weather data from an
            API (e.g., OpenWeatherMap) by making HTTP requests with Axios. Users
            input a location, triggering an API call, and the app displays the
            current weather conditions for that place, rendering the data
            dynamically in the user interface.
          </Text>
        </Box>
        <Link href={link} target="_blank">
          <Image
            src={weatherapp}
            height="50vh"
            padding="20px"
            cursor="pointer"
          />
        </Link>
      </Box>
    </Box>
  );
}

export default Projects;

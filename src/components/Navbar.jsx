import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      height="100px"
      boxShadow="10px 5px 20px 0px rgba(0,0,0,0.1);"
      display="flex"
      alignItems="center"
      bg="#B9B4C7"
      position="fixed"
      top={0}
      width="100%"
      zIndex="1000"
    >
      <UnorderedList
        height="100px"
        listStyleType="none"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        fontSize="1rem"
        letterSpacing={4}
        width="100%"
      >
        <Box>
          <ListItem cursor="pointer" fontSize="1.4rem" fontWeight={800}>
            ImNIXON
          </ListItem>
        </Box>
        <Box display="flex" alignItems="center" gap={20} mr="30px">
          <ListItem
            cursor="pointer"
            padding={5}
            _hover={{
              bgColor: "#5C5470",
              color: "white",
              transition: "ease-in 0.3s",
            }}
          >
            ABOUT
          </ListItem>
          <ListItem
            cursor="pointer"
            padding={5}
            _hover={{
              bgColor: "#5C5470",
              color: "white",
              transition: "ease-in 0.3s",
            }}
          >
            RESUME
          </ListItem>
          <ListItem
            cursor="pointer"
            padding={5}
            _hover={{
              bgColor: "#5C5470",
              color: "white",
              transition: "ease-in 0.3s",
            }}
          >
            PROJECT
          </ListItem>
          <ListItem
            cursor="pointer"
            padding={5}
            _hover={{
              bgColor: "#5C5470",
              color: "white",
              transition: "ease-in 0.3s",
            }}
          >
            CONTACT
          </ListItem>
        </Box>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;

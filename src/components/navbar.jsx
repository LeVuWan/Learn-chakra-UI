import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" align="center">
      <Heading as="h1">Doji task</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>VuLe@gamil.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="green">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     1
    //   </Box>
    // </Flex>
  );
};

export default Navbar;

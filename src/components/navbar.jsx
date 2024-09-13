import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
    });
  };

  return (
    <Flex as="nav" p="10px" align="center">
      <Heading as="h1">Doji task</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/public/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>VuLe@gamil.com</Text>
        <Button onClick={showToast} colorScheme="purple">
          Logout
        </Button>
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

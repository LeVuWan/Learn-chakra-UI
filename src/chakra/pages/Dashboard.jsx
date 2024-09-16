import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  return (
    <SimpleGrid
      minChildWidth="300px"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-10 mb-12"
    >
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
      <Card borderTop="8px" borderColor="purple.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src="/public/img/mario.png" />
            <Box w="50px" h="50px">
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Fix the navbar
              </Heading>
              <Text>By Mario</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody color="gray.500">
          <Text>
            There is an issue with the navbar on the homepage. It is not
            displaying correctly on mobile devices.
          </Text>
        </CardBody>

        <Divider />

        <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<ViewIcon />}>
              Watch
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Comment
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const task = {
      title: formData.get("title"),
      description: formData.get("description"),
      isPriority: formData.get("isPriority") === "on",
    };

    console.log(task);
  };

  return (
    <Box maxW="480px">
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name: </FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Task description: </FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description "
          />
        </FormControl>
        <FormControl display="flex" mt="40px" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>

        <Button colorScheme="purple" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

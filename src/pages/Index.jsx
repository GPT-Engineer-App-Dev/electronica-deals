import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to E-Shop
      </Heading>
      <Text color={"gray.500"}>
        Your one-stop shop for the latest electronics.
      </Text>
      <VStack spacing={4} mt={6}>
        <Button as={RouterLink} to="/products" colorScheme="teal" variant="solid">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
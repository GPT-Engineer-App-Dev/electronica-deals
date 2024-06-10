import { Box, SimpleGrid, Image, Text, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <VStack spacing={2}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text>{product.price}</Text>
                <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500">
                  View Details
                </Link>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
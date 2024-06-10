import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", description: "Latest model smartphone with all the new features.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", description: "High-performance laptop for all your needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones with superior sound quality.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Image src={product.image} alt={product.name} />
        <Heading>{product.name}</Heading>
        <Text fontSize="2xl">{product.price}</Text>
        <Text>{product.description}</Text>
      </VStack>
    </Box>
  );
};

export default ProductDetail;
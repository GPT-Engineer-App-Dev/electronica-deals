import { useState } from "react";
import { Box, SimpleGrid, Image, Text, Link, VStack, Select, Input, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", rating: 4 },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", rating: 5 },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg", rating: 3 },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  const query = useQuery();

  const resetFilters = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setRating("");
  };
  const searchQuery = query.get("search") || "";
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.name.toLowerCase().includes(category.toLowerCase()) : true;
    const matchesMinPrice = minPrice ? parseFloat(product.price.replace("$", "")) >= parseFloat(minPrice) : true;
    const matchesMaxPrice = maxPrice ? parseFloat(product.price.replace("$", "")) <= parseFloat(maxPrice) : true;
    const matchesRating = rating ? product.rating >= parseInt(rating) : true;
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesRating && matchesSearchQuery;
  });
  return (
    <Box p={5}>
      <Box mb={5}>
        <HStack spacing={4}>
          <Select placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="headphones">Headphones</option>
          </Select>
          <Input
            placeholder="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <Input
            placeholder="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <Select placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </Select>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </HStack>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {filteredProducts.map((product) => (
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
import {
  Box,
  Image,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const BookCard = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="100%"
      rounded="20px"
      overflow="hidden"
      bg={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <Image src="/book.jpg" alt="Card Image" w="100%"></Image>
      <Box p={5}>
        <Stack>
          <Text as="h2" align="center" fontWeight="normal" my={2}>
            A Computer Science Portal for Geeks
          </Text>
          <Text as="p" fontWeight="normal" my={2}>
            A Computer Science Portal for Geeks
          </Text>
        </Stack>
        <Flex>
          <Spacer />
          <Button variant="solid" colorScheme="blue" size="sm" mx="1">
            <EditIcon />
            &nbsp;Edit
          </Button>
          <Button variant="solid" colorScheme="red" size="sm" mx="1">
            <DeleteIcon />
            &nbsp;Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookCard;

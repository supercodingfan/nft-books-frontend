import { Box, Flex, useColorMode, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  onOpen: any;
}

const BookCreationCard = ({ onOpen }: Props) => {
  return (
    <Box w="100%" h="100%" rounded="20px" overflow="hidden" bg="gray.700" p={2}>
      <Flex
        height="100%"
        border="2px"
        borderStyle="dashed"
        borderRadius="20px"
        borderColor="blue.600"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          onClick={onOpen}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          <AddIcon />
          &nbsp; New
        </Button>
      </Flex>
    </Box>
  );
};

export default BookCreationCard;

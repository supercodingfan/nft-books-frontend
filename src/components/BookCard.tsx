import {
  Box,
  Image,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Book } from "../types";
import { useEthers } from "@usedapp/core";
import BookEditModal from "./BookEditModal";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const { account } = useEthers();
  const { colorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        w="100%"
        h="100%"
        rounded="20px"
        overflow="hidden"
        bg={colorMode === "dark" ? "gray.700" : "gray.200"}
      >
        <Image
          src={`${process.env.REACT_APP_SERVER_UPLOADS_URL}${book.image_path}`}
          alt="Card Image"
          w="100%"
        ></Image>
        <Box p={5}>
          <Stack>
            <Text as="h2" align="center" fontWeight="normal" my={2}>
              {book.title}
            </Text>
            <Text as="p" fontWeight="normal" my={2}>
              {book.description}
            </Text>
          </Stack>
          {account === book.owner && (
            <Flex>
              <Spacer />
              <Button
                variant="solid"
                colorScheme="blue"
                size="sm"
                mx="1"
                onClick={onOpen}
              >
                <EditIcon />
                &nbsp;Edit
              </Button>
              <Button variant="solid" colorScheme="red" size="sm" mx="1">
                <DeleteIcon />
                &nbsp;Delete
              </Button>
            </Flex>
          )}
        </Box>
        <BookEditModal
          isOpen={isOpen}
          onClose={onClose}
          book={book}
          account={account}
        />
      </Box>
    </>
  );
};

export default BookCard;

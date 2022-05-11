import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";

import { useAppSelector, useAppDispatch } from "../redux/hook";
import { selectBooks, getBookList } from "../redux/modules/book";
import BookCard from "../components/BookCard";
import BookCreationCard from "../components/BookCreationCard";

const BookList = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const { account } = useEthers();

  useEffect(() => {
    dispatch(getBookList());
  }, []);

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap={6}
      px={3}
    >
      {account && (
        <GridItem w="100%" h="100%">
          <BookCreationCard />
        </GridItem>
      )}
      {books.map((book, index) => {
        return (
          <GridItem w="100%" key={`books${index}`}>
            <BookCard book={book} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default BookList;
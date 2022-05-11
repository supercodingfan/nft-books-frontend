import { Grid, GridItem } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import BookCreationCard from "../components/BookCreationCard";

const BookList = () => {
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
      <GridItem w="100%">
        <BookCard />
      </GridItem>
      <GridItem w="100%">
        <BookCard />
      </GridItem>
      <GridItem w="100%">
        <BookCard />
      </GridItem>
      <GridItem w="100%">
        <BookCard />
      </GridItem>
      <GridItem w="100%" h="100%">
        <BookCreationCard />
      </GridItem>
    </Grid>
  );
};

export default BookList;

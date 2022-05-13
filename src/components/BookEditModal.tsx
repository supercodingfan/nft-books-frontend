import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { editBook } from "../redux/modules/book";
import { Book } from "../types";

interface Props {
  isOpen: any;
  onClose: any;
  account: string | null | undefined;
  book: Book;
}

const BookEditModal = ({ isOpen, onClose, account, book }: Props) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: useMemo(() => {
      return { title: book.title, description: book.description, image: null };
    }, [book]),
  });

  const onSubmit = (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.image || values.image?.length)
      formData.append("image", values.image[0]);
    if (account) formData.append("owner", account);
    return dispatch(editBook({ id: book._id, formData })).then(() => {
      onClose();
    });
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="30%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            id="book_form"
            name="book_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                placeholder="title"
                {...register("title", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                placeholder="description"
                {...register("description", {
                  required: "This is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input id="image" type="file" {...register("image", {})} />
              <FormErrorMessage>
                {errors.image && errors.image.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="teal"
            isLoading={isSubmitting}
            type="submit"
            form="book_form"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookEditModal;

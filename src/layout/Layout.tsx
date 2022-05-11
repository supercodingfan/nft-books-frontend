import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box h="100vh" bg="gray.800">
      <Header />
      {children}
    </Box>
  );
}

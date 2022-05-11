import { useDisclosure, Box } from "@chakra-ui/react";
import ConnectButton from "../components/ConnectButton";
import AccountModal from "../components/AccountModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box float="right" m={2}>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;

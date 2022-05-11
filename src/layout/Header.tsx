import { useDisclosure, Flex, Image } from "@chakra-ui/react";
import ConnectButton from "../components/ConnectButton";
import AccountModal from "../components/AccountModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignItems="center" justifyContent="end" p={3}>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;

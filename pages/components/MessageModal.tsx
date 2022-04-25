import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

const MessageModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="red"
        textStyle="p"
        shadow="lg"
        p="25px"
        onClick={onOpen}
      >
        Book A Free Consultancy
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            sunt porro explicabo, nobis eveniet recusandae accusantium accusamus
            voluptas, fugit fuga repudiandae maiores delectus? Autem atque natus
            possimus molestias, magnam dolorum?
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageModal;

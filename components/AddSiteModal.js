//Node module imports
import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormLabel,
  FormControl,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function AddSiteModal() {
  //Chakra Modal Hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  //FormControl Reactform hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight="medium"
        variant="solid"
        size="md"
        m={3}
        background="blue.300"
      >
        Add your first site{" "}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay
          bg="blueAlpha.400"
          backdropFilter="blur(10px) hue-rotate(50deg)"
        />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                ref={initialRef}
                  RecreateRef={register("Name", {
                    required: true,
                    min: 1,
                    maxLength: 80,
                  })}
                  placeholder="Name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input
                  placeholder="https://www.website.com"
                  ref={register("Link", {
                    required: true,
                    min: 3,
                    maxLength: 150,
                  })}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} mr={3} fontWeight="medium">
                Cancel
              </Button>
              <Button colorScheme="blue" fontWeight="medium" type="submit">
                Create
              </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AddSiteModal;

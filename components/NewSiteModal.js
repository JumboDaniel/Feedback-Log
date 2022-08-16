//Node module imports
import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

function NewSiteModal({ children }) {
  //Chakra Modal Hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const auth = useAuth();

  //FormControl Reactform hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //On Subbit function
  const onSubmit = (data) => {
    //New Site Object
    const NewSite = {
      author: auth.user.uid,
      createdAt: new Date().toISOString(),
      ...data,
    };
    createSite(NewSite);

    toast({
      title: "Created Site Sucessfully",
      description: "We have successfully created a new site",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    onClose();
  };
  console.log(errors);

  return (
    <>
      <Button
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800", transform: "scale(0.95)" }}
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                {...register("Name", { required: true, min: 1, maxLength: 80 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://www.website.com"
                {...register("URL", { required: true, min: 3, maxLength: 100 })}
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
export default NewSiteModal;

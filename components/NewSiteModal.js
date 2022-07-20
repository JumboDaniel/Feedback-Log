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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createSite } from "@/lib/db";

function NewSiteModal() {
  //Chakra Modal Hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  //FormControl Reactform hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 
  const onSubmit = (data) => createSite(data);
  console.log(errors);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

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
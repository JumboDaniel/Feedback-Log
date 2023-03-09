import React, { useState, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { mutate } from "swr";
 
//file import
import { deleteFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";

export function RemoveButton({feedbackId}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const {user} = useAuth();

  const onDelete =()=>{
    deleteFeedback(feedbackId)
    mutate(
      ["/api/feedback", user._delegate.accessToken],
      async (data) =>{
        // console.log(data.feedback.filter((feedback)=> feedback.id !== feedbackId))
        return {feedback:data.feedback.filter((feedback)=> feedback.id !== feedbackId)}
      },
      false
    )
    onClose()
}
  return (
    <>
      <IconButton
        aria-label="Delete Feedback"
        // icon={<DeleteIcon/>}
        onClick={onOpen}
        variant="ghost"
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback 
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

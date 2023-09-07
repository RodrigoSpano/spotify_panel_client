import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ArtistProfileCard from "./ArtistProfileCard";

export default function ArtistProfileModal({isOpen, onOpen, onOpenChange, artist}) {

  return (
    <>
      <Modal className="bg-zinc-900 text-white" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Artist Profile</ModalHeader>
              <ModalBody>
                {
                  !artist ? 'loading...' : <ArtistProfileCard artist={artist} />
                }
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

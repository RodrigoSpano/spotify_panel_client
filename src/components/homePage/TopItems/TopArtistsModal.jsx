import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";
import ArtistCard from "./ArtistCard";
import TrackCard from "../topTracks/TrackCard";

export default function TopArtistsModal({array, type}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="cursor-pointer" color="success" variant="ghost">View all</Button>
      <Modal className="select-none bg-zinc-900 text-white" backdrop="blur" isOpen={isOpen} size="md" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize">{type === 'tracks' ? 'Your favorites songs' :'Your Favorites Artists'}</ModalHeader>
              <ModalBody >
              <ScrollShadow hideScrollBar className="w-[300px] h-[400px] flex flex-col items-start gap-3 pl-4">
               {
                 array.length > 0 ? array.map((el, i) => type === 'tracks' ? <TrackCard position={++i} track={el} key={el.id} /> : <ArtistCard artist={el} position={++i} key={el.id} />) : null
                 
                }
                </ScrollShadow>
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

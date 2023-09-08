'use client'
import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { useUserPlaylists } from "@/zustand/useUserPlaylists";
import TracksContainer from "./TracksContainer";
import PlaylistHeader from "@/components/homePage/topTracks/PlaylistHeader";
import usePlaylistHook from "@/customHook/usePlaylistHook";
import Loader from "@/components/loader/Loader";

export default function PlaylistModal({isOpen, onOpenChange, playlist}) {
  const {playlistTracks} = useUserPlaylists()
  const {handlePlaylistTracks, loader} = usePlaylistHook()

  useEffect(() => {
  async function HandleTracks(){
    await handlePlaylistTracks(playlist.id)
  }    
  HandleTracks()
  }, [isOpen])

  return (
      <Modal size="4xl" className="bg-zinc-900" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody className="flex flex-col items-start justify-center gap-5">

                    {loader ? <Loader /> : 
                    <>
                    <PlaylistHeader name={playlist.name} description={playlist.description} images={playlist.images} owner={playlist.owner.display_name} publicList={playlist.public} songs={playlist.tracks.total} />
                    <TracksContainer tracks={playlistTracks}/>
                    </>
                    }

              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
}

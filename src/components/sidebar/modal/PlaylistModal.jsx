'use client'
import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import TracksContainer from "./TracksContainer";
import PlaylistHeader from "@/components/sidebar/modal/PlaylistHeader";
import usePlaylistHook from "@/customHook/usePlaylistHook";
import Loader from "@/components/loader/Loader";
import PlaylistOptions from "./PlaylistOptions";

export default function PlaylistModal({isOpen, onOpenChange, playlist}) {
  const {handlePlaylistTracks, loader, handleOrderTracks, handleSearchTrack, handleChangeSearch, tracks} = usePlaylistHook()

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

                    {loader.modal ? <Loader /> : 
                    <>
                    <div className="flex w-full justify-evenly">
                      <PlaylistHeader name={playlist.name} description={playlist.description} images={playlist.images} owner={playlist.owner.display_name} publicList={playlist.public} songs={playlist.tracks.total} />
                      <PlaylistOptions handleOrder={handleOrderTracks} handleSearch={handleSearchTrack} handleChange={handleChangeSearch} />
                    </div>
                    <TracksContainer tracks={tracks} loader={loader}/>
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

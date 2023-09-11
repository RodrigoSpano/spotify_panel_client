import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import usePlaylistHook from "@/customHook/usePlaylistHook";

const options = ['custom order', 'title', 'artist', 'album', 'duration']

export default function SelectOptions() {
  const {handleOrderTracks} = usePlaylistHook()

  const handleChange = async (e) => {
    await handleOrderTracks(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Select
      label="Custom Order"
      variant="faded"
      color="success"
      className="w-[200px] dark text-white"
      onChange={handleChange}
      defaultValue={'custom order'}
    >
      {options.map((item, i) =>  <SelectItem key={item}>{item}</SelectItem>)}
    </Select>
  );
}
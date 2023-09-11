import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const options = ['custom order', 'title', 'artist', 'album', 'duration']

export default function SelectOptions({handleOrder}) {

  return (
    <Select
      label="Custom Order"
      variant="faded"
      color="success"
      className="w-[200px] dark text-white"
      onChange={(e) => handleOrder(e.target.value)}
      defaultValue={'custom order'}
    >
      {options.map((item, i) =>  <SelectItem key={item} variant="shadow" className="dark" >{item}</SelectItem>)}
    </Select>
  );
}

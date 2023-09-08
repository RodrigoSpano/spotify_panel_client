import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, ScrollShadow} from "@nextui-org/react";

const columns = [
  {
    label: 'TITLE',
    key: 'title'
  },
  {
    label: 'ARTIST',
    key: 'artist'
  },
  {
    label: 'ALBUM',
    key: 'album'
  },
  {
    label: 'DURATION',
    key: 'duration'
  },
]

const TracksContainer = ({tracks}) => {
  const rows = tracks.map((el) => ({key: el.id, title: el.name, album: el.album.name, artist:el.artist?.map(a => a.name).join(', '), duration: (el.duration_ms/60000).toFixed(2).replace('.', ':')}))
  return (
    <ScrollShadow hideScrollBar className="h-[400px] w-full">
      <Table aria-label="Example table with dynamic content" className='dark text-white' >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key} className='hover:bg-white/10'>
              {(columnKey) => <TableCell className={`${columnKey === 'title' ? 'text-white font-semibold text-sm': 'text-zinc-300 text-xs'}`}>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </ScrollShadow>
  )
}

export default TracksContainer
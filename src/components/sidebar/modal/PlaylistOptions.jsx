import React from 'react'
import SelectOptions from './SelectOptions'
import { Input } from '@nextui-org/react'

const PlaylistOptions = () => {
  return (
    <div className='w-auto flex flex-col gap-5'>
      <Input variant='underlined' placeholder='(_) Search' />
      <SelectOptions />
    </div>
  )
}

export default PlaylistOptions
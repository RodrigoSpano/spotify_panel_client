import React from 'react'
import SelectOptions from './SelectOptions'
import { Button, Input } from '@nextui-org/react'
import {FiSearch} from 'react-icons/fi'
import {IoMdArrowRoundBack} from 'react-icons/io'

const PlaylistOptions = ({handleSearch, handleOrder, handleChange}) => {
  return (
    <div className='w-auto flex flex-col gap-5'>
      <div className='flex gap-3 items-center'>
        <IoMdArrowRoundBack className='text-white text-2xl cursor-pointer' onClick={() => handleOrder('custom order')} />
        <Input isClearable onValueChange={(e) => handleChange(e)} variant='underlined' className='text-white' placeholder='Search' />
        <Button isIconOnly variant='ghost' className='text-xl text-zinc-200 hover:text-zinc-900 transition-all' onPress={handleSearch}><FiSearch/></Button>
      </div>
      <SelectOptions handleOrder={handleOrder} />
    </div>
  )
}

export default PlaylistOptions
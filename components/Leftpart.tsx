import React from 'react'
import ItemList from './ItemList'
import { ItemProps } from '@/lib/constrain'
import TotalItem from './TotalItem'

export default function Leftpart({items, setItems, handleDeleteItem, handleToggleItem}:
   {items: ItemProps[], setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>, handleDeleteItem: any, handleToggleItem: any}) {
  return (
    <div className=' w-[70%] px-6 py-4 flex flex-col'>
      <TotalItem items={items}/>
      <ItemList items={items} setItems={setItems} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}/>
    </div>
  )
}

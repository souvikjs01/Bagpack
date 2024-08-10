"use client"
import { initItems, ItemProps } from '@/lib/constrain';
import React, { useMemo, useState } from 'react'
import { MdDelete } from "react-icons/md";
import EmptyItem from './EmptyItem';
import Select from 'react-select'

interface SortProps {
  label: string;
  value: "default" | "packed" | "unpacked"
}
const sortingOpt: SortProps[] = [
  {
    label: "Sort by default",
    value: "default"
  },
  {
    label: "Sort by packed",
    value: "packed"
  },
  {
    label: "Sort by unpacked",
    value: "unpacked"
  }
];

export default function ItemList({items, setItems, handleDeleteItem, handleToggleItem}: 
  {items: ItemProps[], setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>, handleDeleteItem: any, handleToggleItem: any}) { 
  
    const [sortBy, setSortBy] = useState<"default" | "packed" | "unpacked">("default");
    
    const sortItems = useMemo(() => items.sort((a, b) => {
      if(sortBy === "packed"){
        return b.packed === a.packed ? 0 : b.packed ? 1 : -1;
      } else if(sortBy === "unpacked"){
        return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
      }else{
        return a.id-b.id;
      }
    }), [items, sortBy]) 
    
    return (
    <ul className=' h-full overflow-y-auto'>
      {items.length === 0 && <EmptyItem />}
      {items.length > 0 && (
        <div className=' py-2'>
          <Select 
            key={sortBy}
            defaultValue={sortingOpt[0]} 
            options={sortingOpt} 
            onChange={(opt) => {
              setSortBy(opt?.value!)              
            }}  
            className=' text-sm'
          />
        </div>
      )}
      {sortItems.map(itm => <Item key={itm.id} id={itm.id} name={itm.name} packed={itm.packed} handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} />)}
    </ul>
  )
}


function Item ({id, name, packed, handleToggleItem, handleDeleteItem}: {id: number,name: string, packed: boolean, handleToggleItem: any, handleDeleteItem: any}){    
    return (
        <li className=' flex justify-between items-center relative border-b h-10 text-sm'>
            <label htmlFor={name} className=' flex flex-row justify-center items-center gap-x-2'>
                <input 
                  id={name}
                  type="checkbox"
                  checked={packed}
                  onChange={() => handleToggleItem(id)}
                />
                <span>{name}</span>
            </label>
            <button onClick={() => handleDeleteItem(id)}>
                <MdDelete size={16}/>
            </button>
        </li>
    )
}

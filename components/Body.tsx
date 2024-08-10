'use client'
import React, { useEffect, useState } from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'
import { initItems, ItemProps } from '@/lib/constrain';

export default function Body() {

  const itemsFromLocalStorage= JSON.parse(localStorage.getItem("items") || '[]')
  const [items, setItems] = useState<ItemProps[]>(itemsFromLocalStorage || initItems);

  const handleDeleteItem = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  const handleToggleItem = (id: number) => {
    const newItems = items.map(item => {
      if(item.id == id){
        return {...item, packed: !item.packed};
      }
      return item;
    })
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }
  
  const handleResetToInit = () => {
    setItems(initItems);
  }

  const handleMarkAllInComplete = () => {
    const newItems = items.map((item) => {
      return {...item, packed: false}
    })
    setItems(newItems)
  }

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return {...item, packed: true};
    })
    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

  return (
    <div className=' flex h-[90%] rounded-b-md'>

      <Leftpart
        items={items} 
        setItems={setItems}
        handleDeleteItem={handleDeleteItem}  
        handleToggleItem={handleToggleItem}
      />

      <Rightpart 
        setItems={setItems} 
        handleRemoveAllItems={handleRemoveAllItems} 
        handleResetToInit={handleResetToInit}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllInComplete={handleMarkAllInComplete}
      />
    </div>
  )
}

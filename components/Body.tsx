'use client'
import React, { useEffect, useState } from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'
import { initItems, ItemProps } from '@/lib/constrain';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';

function Body() {
    // Retrieve items from cookies, or use initial items if cookies are empty
    const itemsFromCookies = Cookies.get('items') ? JSON.parse(Cookies.get('items') as string) : initItems;
    const [items, setItems] = useState<ItemProps[]>(itemsFromCookies);
  
    // Update cookies whenever items change
    useEffect(() => {
      Cookies.set('items', JSON.stringify(items), { expires: 7 }); // Expires in 7 days
    }, [items]);



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

export default dynamic(() => Promise.resolve(Body), {ssr: false})
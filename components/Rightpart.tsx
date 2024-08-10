"use client"
import { ItemProps } from '@/lib/constrain';
import React, { useState } from 'react'

export default function Rightpart({setItems, handleRemoveAllItems, handleResetToInit, handleMarkAllComplete, handleMarkAllInComplete}:
   {setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>, handleRemoveAllItems: any,
    handleResetToInit:any, handleMarkAllComplete: any, handleMarkAllInComplete: any}) {
  const [itemText, setItemText] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(!itemText){
      alert("Items can't be empty");
      return;
    }
    const newItem: ItemProps = {
      id: new Date().getTime(),
      name: itemText,
      packed: false
    };
    setItems(prev => [...prev, newItem]);
    setItemText("");
  }

  return (
    <div className=' bg-[#FAF6EF] w-[30%] h-full rounded-b px-4 py-4 flex flex-col justify-between border-l'>
      <form onSubmit={handleSubmit} className=' space-y-1'>
        <h1 className=' text-sm'>Add an item</h1>
        <input type="text" value={itemText} placeholder='Items' name='item' onChange={(e) => {
          setItemText(e.target.value)
        }} className=' bg-white py-1 px-2 w-full focus:outline-none border border-black rounded-md' />
        <Button text='Add an list' type='dark'/>
      </form>
      
      <div className=' space-y-2'>
        <Button onclick={handleMarkAllComplete} text='Mark all as complete' type='light'/>
        <Button onclick={handleMarkAllInComplete} text='Mark all as incomplete' type='light'/>
        <Button onclick={handleResetToInit} text='Reset to initial' type='light'/>
        <Button onclick={handleRemoveAllItems} text='Remove all items' type='light'/>
      </div>
    </div>
  )
}

function Button({text, type, onclick}: {text: string, type: 'dark' | 'light', onclick?: any}){
    return (
        <button onClick={onclick} type='submit' className={` w-full ${type=='dark' ? 'bg-[#463C2B]' : 'bg-[#5E503A]'} text-white py-2 rounded-md text-xs hover:bg-[#463C2B] transition-all duration-200`}>
            {text}
        </button>
    )
}
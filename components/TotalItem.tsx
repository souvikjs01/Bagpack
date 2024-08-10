"use client"
import { ItemProps } from '@/lib/constrain'
import React, { useEffect, useState } from 'react'

export default function TotalItem({items}: {items: ItemProps[]}) {
  const [packedCount, setPackedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    setPackedCount(items.filter(item => item.packed).length);
    setTotalCount(items.length);
  }, [items]);
  return (
    <div className=' flex justify-between text-sm font-medium'>
      <p>Select item</p>
      <p><span>{packedCount}</span>/<span>{totalCount}</span> packed</p>
    </div>
  )
}

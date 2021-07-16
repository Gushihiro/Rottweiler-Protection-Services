import React from 'react'
import './PageHead.css'
interface Props {
  currentPageHead: string
}

export default function PageHead({currentPageHead}: Props) {
  return (
    <div className='pageHead'>
      <h1>{currentPageHead}</h1>
    </div>
  )
}

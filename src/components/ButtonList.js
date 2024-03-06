import React from 'react'
import Button from './Button'

export default function ButtonList() {
  const buttonList = [
    {title: "All"},
    {title: "Music"},
    {title: "JavaScript"},
    {title: "Filmi"},
    {title: "Soundtracks"},
    {title: "Mantras"},
    {title: "Trailers"},
    {title: "Tamil Cinema"},
    {title: "Live"},
    {title: "Shopping"},
    {title: "Engineering"},
    {title: "Meditation Music"},
    {title: "Lo-fi"},
    {title: "Dramedy"}
  ]
  return (
    <div className='flex items-center justify-between'>
      {buttonList.map((button) => {
        return (
          <Button key={button.title} title={button.title}/>
        )
      })}
    </div>
  )
}

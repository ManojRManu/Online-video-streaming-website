import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
    <Button name="All"/>
    <Button name="Live"/>
    <Button name="Songs"/>
    <Button name="Cooking"/>
    <Button name="Cricket"/>
    <Button name="Music"/>
    <Button name="Cars"/>
    <Button name="Bike"/>
    </div>
  )
}

export default ButtonList

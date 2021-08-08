import React from 'react'

import Card from './Card';

const CardList = ({robots}) => {
  if(true) {
    throw new Error('NOOOOOOOO!');
  }
  return (
    <>
      {
        robots.map((robot, index) => {
          return (
            <Card
              key={index}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          )
        })
      }
    </>
  )
}

export default CardList

import React from "react"
import Card from "./../Card/Card"
import './card-list.styles.css'

interface RoboProps{
  id:number;
  name:string;
  place:string;
}

const CardList =(props:{robos:RoboProps[]} ) => {
  const {robos}=props;
const cardComponent = robos.map((user)=>{
  return <Card key={user.id} {...user}  />
})
return(
  <div className='card-list'>
    {cardComponent}
  </div>
)
}

export default CardList
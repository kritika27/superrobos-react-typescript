import React from "react"
import './card.styles.css'

interface RoboProps{
    id:number;
    name:string;
    place:string;
  }

const Card: React.FC<RoboProps>= ({name,place}:RoboProps) => {
    
    return(
    <div className ='card-container'>   
        <img 
        alt='robots' 
        src={`https://robohash.org/${name}?size=180x180`}  />
        
        <h2 style={{fontFamily:'sans-serif'}}>{name}</h2>
        <h3 style={{fontFamily:'sans-serif'}}>{place}</h3>
        
    </div>
    )
}

export default Card
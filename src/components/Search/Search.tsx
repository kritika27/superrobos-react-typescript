import React from 'react';
import './search-box.styles.css';

interface FuncProps{
  onSearchChange(event:React.ChangeEvent<HTMLInputElement>):void;

}
 export const Search:React.FC<FuncProps>=({onSearchChange}:FuncProps) => {
   return(
     <>
  <input
    className='search-box'
    type='search'
    placeholder='Search Super Robos..'
    onChange={onSearchChange}
  />
  </>
)
   }


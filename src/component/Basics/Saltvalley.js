import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js"; 
import MenuCard from "./MenuCard"

const Saltvalley = () => {
// using Hooks for data containing or used for data hold
const [menuData, setmenuData] = useState(Menu);
   const filterItem=(category)=>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category ===category;
    });
    setmenuData(updatedList);
   };

  return (
    //using props or passing props for passind data from parent to child
     <>
        <nav className='navbar'>
          <div className='btn-group'>
              <button className='btn-group__item' onClick={()=>filterItem("Natural")}>Natural Lamps</button>
              <button className='btn-group__item' onClick={()=>filterItem("Crafted")}>Crafted Lamps</button>
              <button className='btn-group__item' onClick={()=>filterItem("Wooden Basket")}>Wooden Basket</button>
              <button className='btn-group__item' onClick={()=>filterItem("Iron Basket")}>Iron Basket</button>
              <button className='btn-group__item'onClick={()=>setmenuData(Menu)}>All</button>
          </div>
        </nav>
       <MenuCard menuData={menuData}/> 


    </>
  );
};

export default Saltvalley;


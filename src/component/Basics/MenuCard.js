import { id } from 'prelude-ls';
import React from 'react';

const MenuCard = ({menuData}) => {
  // Now using map method for the purpose of(we need loop for getting all data of menudata)
  return (
  <>
  <section className="main-card--cointainer">
          {menuData.map((curElem)=>{
            return (
        <>
<div className ="card-container"key={curElem.id}>

            <div className = "card">

               <div className = "card-body">
                 
                 <span className = "card-number card-circle subtle">{curElem.id}</span>
                 <span className = "card-author subtle">{curElem.name}</span>
                 <h1 className = "card-title">{curElem.name}</h1>
                 <span className = "card-desription subtle"> {curElem.description} </span>
                    <div className ="card-read">Read</div>
               </div>
                  <img src={curElem.image} alt='image' className = "card-media"/>
                  <span className='card-tag subtle'>Order Now</span>

            </div>
        </div>
        </>
        );
        
    })}
    </section>
 </>
        
 );
};

export default MenuCard;

import React, { useState } from 'react';
import items from './data'
import Menu from './Menu'
import Button from './Button';
import './styles/records.css'

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

const RecordsSection = () =>  {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }

  return (
    <div className="Records">
       <div className="title">
         <h1 className="title-header">
           Past Transactions
         </h1>
       </div>

      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}

export default RecordsSection;
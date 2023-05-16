import React, { useState , useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../App.css'
import { useSelector } from 'react-redux';


const ContextMenu = (props) => {
  const [search, setSearch] = useState(false);
  const inventoryData = useSelector(state => state.inventory.inventoryState);
  const contextData = inventoryData[props.data];
  console.log(contextData);
  
  useEffect(() => {
    if (contextData && contextData.hasOwnProperty('inventory')) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [contextData]);
  
  return (
    <div>
      <p>{contextData && contextData.name}</p>
      {search && <input type='text' />}
    </div>
  );
  
}

export default ContextMenu


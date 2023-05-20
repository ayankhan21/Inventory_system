import { useSelector } from 'react-redux';
import '../../App.css'
import { useState } from 'react';

const Furniture = () => {
  const furnitureData = useSelector(state => state.inventory.furniture)
  const [source, setSource] = useState(null);
  const [item, setItem] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleDragStart = (source, item) => {
    setSource(source);
    setItem(item);
  };

  const handleDragEnd = (destination) => {
    setDestination(destination);

    // Dispatch your action here or call the equip function with the updated source, item, and destination values
    // equip(source, item, destination);

    // Reset the source, item, and destination values
    setSource(null);
    setItem(null);
    setDestination(null);
  };
  const calculateSize = (arr) => {
    const width = arr[0] * 30;
    const height = arr[1] * 30;
    return { width: `${width}px`, height: `${height}px` };
  };
  return (
    <div className='cabinet'>
      {Object.values(furnitureData).map((item) => (
        <div
          key={item.id} // add a unique key prop for each item
          draggable
          onDragStart={() =>
            handleDragStart(furnitureData.headwear, furnitureData.headwear)
          }
          onDragEnd={() => handleDragEnd(furnitureData.headwear)}
          className="FurnitureItems"
          style={calculateSize(item.size)} // set width and height using the helper function
        >
          {item.description}
        </div>
      ))}
    </div>
  );
};

export default Furniture;

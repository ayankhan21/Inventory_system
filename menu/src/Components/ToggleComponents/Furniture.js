import { useSelector } from 'react-redux';
import '../../App.css'

const Furniture = (setDestination, setItem, setSource,setDestinationObj,setSourceObj ) => {
  const furnitureData = useSelector(state => state.inventory.furniture)

  const handleDragStart = (source, item) => {
    setSource(source);
    setSourceObj('furniture')
    setItem(item);
  };

  const handleDragEnd = (destination) => {
    setDestination(destination);
    setDestinationObj('furniture')

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

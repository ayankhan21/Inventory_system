import "../../App.css";
import { useSelector } from "react-redux";


const Ground = ({setDestination, setItem, setSource,setDestinationObj,setSourceObj }) => {

  const otherData = useSelector(state => state.inventory.ground)

  const handleDragStart = (source, item) => {
    setSource(source);
    setSourceObj('ground')
    setItem(item);
  };

  const handleDragEnd = (destination) => {
    setDestination(destination);
    setDestinationObj('ground');

    // Dispatch your action here or call the equip function with the updated source, item, and destination values
    // equip(source, item, destination);

    // Reset the source, item, and destination values
    // setSource(null);
    // setItem(null);
    // setDestination(null);
  };
  const calculateSize = (arr) => {
    const width = arr[0] * 30;
    const height = arr[1] * 30;
    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div onDragLeave={() => handleDragEnd(otherData)} className="ground">
      {Object.values(otherData).map((item) => (
        <div
          key={item.id} // add a unique key prop for each item
          draggable
          onDragStart={() =>
            handleDragStart(otherData, item)
          }
          
          className="groundItems"
          style={calculateSize(item.size)} // set width and height using the helper function
        >
          {item.description}
        </div>
      ))}
    </div>
  );
};


export default Ground;

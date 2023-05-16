import React from 'react'

const Slot = (props) => {
  return (
    <div>
        <div draggable className="headwear miniBoxes">      
        <span>Headwear</span>
        <p>{props.data && props.data.headwear.name}</p>
      </div>
    </div>
  )
}

export default Slot
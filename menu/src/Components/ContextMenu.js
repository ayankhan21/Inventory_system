import React, { useState } from 'react'

const ContextMenu = (props) => {
  const [contextData,setContextData] = useState(props.data)
  console.log(contextData)
  return (
    <div className='contextMenu'>
        {contextData && contextData.clothingData}
    </div>
  )
}

export default ContextMenu